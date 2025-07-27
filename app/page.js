"use client";
import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import DuaCardList from "@/app/components/DuaCardList";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [selectedSubcat, setSelectedSubcat] = useState(null);
  const [selectedSubcatName, setSelectedSubcatName] = useState("");

  const handleCategorySelect = (catId, catName) => {
    setSelectedCategory(catId);
    setSelectedCategoryName(catName || "");
    setSelectedSubcat(null); // reset subcat when changing category
    setSelectedSubcatName("");
  };

  const handleSubcatSelect = (subcatId, subcatName) => {
    setSelectedSubcat(subcatId);
    setSelectedSubcatName(subcatName || "");
  };

  return (
    <div className="flex bg-gray-50 text-gray-800">
      <Sidebar
        onCategorySelect={handleCategorySelect}
        onSubcatSelect={handleSubcatSelect}
      />
      <main className="flex-1 p-6 max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 space-y-2 text-sm text-[#588157]">
          {/* Breadcrumb */}
          <div className="text-sm text-[#588157]">
            <span className="font-medium text-[#588157]">Home</span>
            {selectedCategoryName && (
              <>
                {" "}
                &gt;{" "}
                <span className="text-[#588157]">{selectedCategoryName}</span>
              </>
            )}
            {selectedSubcatName && (
              <>
                {" "}
                &gt;{" "}
                <span className="text-[#588157] font-medium">
                  {selectedSubcatName}
                </span>
              </>
            )}
          </div>

          {/* Category & Section display */}
          {selectedCategoryName && (
            <p>
              <span className="font-semibold text-[#588157]">Category:</span>{" "}
              {selectedCategoryName}
            </p>
          )}
          {selectedSubcatName && (
            <p>
              <span className="font-semibold text-[#588157]">Section:</span>{" "}
              {selectedSubcatName}
            </p>
          )}
        </div>

        {/* Dua List */}
        <DuaCardList subcatId={selectedSubcat} />
      </main>
    </div>
  );
}
