"use client";
import { useEffect, useState } from "react";

export default function Sidebar({ onCategorySelect, onSubcatSelect }) {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all categories initially
  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setFilteredCategories(data);
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
      // Collapse if same category clicked again
      setSelectedCategory(null);
      setSubcategories([]);
      onCategorySelect && onCategorySelect(null, null);
      return;
    }

    setSelectedCategory(catId);
    onCategorySelect && onCategorySelect(catId, catName);

    const res = await fetch(`/api/subcategories/${catId}`);
    const data = await res.json();
    setSubcategories(data);
  };

  const handleSubcatClick = (subcatId, subcatName) => {
    onSubcatSelect && onSubcatSelect(subcatId, subcatName);
  };

  return (
    <aside className="w-full md:w-64 h-screen bg-[#F8FAF9] border-r border-gray-200 p-4 overflow-y-auto">
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search categories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-3 py-2 mb-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#219EBC]"
      />

      <ul className="space-y-4">
        {filteredCategories.map((cat) => (
          <li key={cat.cat_id}>
            <button
              className={`font-semibold text-left w-full ${
                selectedCategory === cat.cat_id
                  ? "text-[#219EBC]"
                  : "text-gray-800"
              }`}
              onClick={() => handleCategoryClick(cat.cat_id, cat.cat_name_en)}
            >
              {cat.cat_name_en}
            </button>

            {selectedCategory === cat.cat_id && subcategories.length > 0 && (
              <ul className="pl-4 mt-2 space-y-1 text-sm text-gray-600">
                {subcategories.map((sub) => (
                  <li key={sub.subcat_id}>
                    <button
                      className="hover:text-[#219EBC] transition"
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

        {filteredCategories.length === 0 && (
          <p className="text-gray-500 text-sm">
            No matching categories found.
          </p>
        )}
      </ul>
    </aside>
  );
}
