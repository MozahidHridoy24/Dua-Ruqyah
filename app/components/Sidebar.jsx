"use client";
import { useEffect, useState } from "react";

export default function Sidebar({ onCategorySelect, onSubcatSelect }) {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcatId, setSelectedSubcatId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch categories and select first by default
  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then(async (data) => {
        if (!data || data.length === 0) return;

        setCategories(data);
        setFilteredCategories(data);

        const firstCat = data[0];
        setSelectedCategory(firstCat.cat_id);
        onCategorySelect?.(firstCat.cat_id, firstCat.cat_name_en);

        const res = await fetch(`/api/subcategories/${firstCat.cat_id}`);
        const subcatData = await res.json();
        setSubcategories(subcatData);

        if (subcatData?.length > 0) {
          const firstSub = subcatData[0];
          setSelectedSubcatId(firstSub.subcat_id);
          onSubcatSelect?.(firstSub.subcat_id, firstSub.subcat_name_en);
        }
      });
  }, []);

  // Filter categories on search
  useEffect(() => {
    const filtered = categories.filter((cat) =>
      cat.cat_name_en.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [searchTerm, categories]);

  const handleCategoryClick = async (catId, catName) => {
    if (selectedCategory === catId) {
      setSelectedCategory(null);
      setSubcategories([]);
      setSelectedSubcatId(null);
      onCategorySelect?.(null, null);
      return;
    }

    setSelectedCategory(catId);
    onCategorySelect?.(catId, catName);

    const res = await fetch(`/api/subcategories/${catId}`);
    const data = await res.json();
    setSubcategories(data);

    if (data?.length > 0) {
      const firstSub = data[0];
      setSelectedSubcatId(firstSub.subcat_id);
      onSubcatSelect?.(firstSub.subcat_id, firstSub.subcat_name_en);
    }
  };

  const handleSubcatClick = (subcatId, subcatName) => {
    setSelectedSubcatId(subcatId);
    onSubcatSelect?.(subcatId, subcatName);
  };

  return (
    <aside className="sticky top-0 w-full sm:w-64 h-screen bg-[#F8FAF9] border-r border-gray-200 p-4 overflow-y-auto text-sm">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search categories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-3 py-2 mb-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#219EBC]"
      />

      {/* Categories List */}
      <ul className="space-y-4">
        {filteredCategories.map((cat) => (
          <li
            key={cat.cat_id}
            className={`pl-2 ${
              selectedCategory === cat.cat_id
                ? "text-[#588157]"
                : "text-gray-800"
            }`}
          >
            <button
              className="font-semibold w-full text-left"
              onClick={() => handleCategoryClick(cat.cat_id, cat.cat_name_en)}
            >
              {cat.cat_name_en}
            </button>

            {/* Subcategories with vertical + horizontal dashed lines */}
            {selectedCategory === cat.cat_id && subcategories.length > 0 && (
              <ul className="mt-2 space-y-1 text-sm text-gray-700 relative">
                {/* Vertical dashed line for subcategories */}
                <span
                  className="absolute top-0 bottom-0 left-2 border-l-2 border-dashed border-[#588157]"
                  style={{ zIndex: 0 }}
                />
                {subcategories.map((sub) => (
                  <li key={sub.subcat_id} className="relative pl-8">
                    {/* Horizontal dashed line */}
                    <span
                      className="absolute left-2 top-1/2 w-4 border-t-2 border-dashed border-[#588157] -translate-y-1/2"
                      style={{ zIndex: 0 }}
                    />
                    <button
                      className={`w-full text-left px-2 py-1 rounded-md transition ${
                        selectedSubcatId === sub.subcat_id
                          ? "bg-[#E6EFE7] text-[#588157] font-semibold"
                          : "hover:text-[#588157]"
                      }`}
                      onClick={() =>
                        handleSubcatClick(sub.subcat_id, sub.subcat_name_en)
                      }
                    >
                      {sub.subcat_name_en}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {filteredCategories.length === 0 && (
        <p className="text-gray-500 text-sm">No matching categories found.</p>
      )}
    </aside>
  );
}
