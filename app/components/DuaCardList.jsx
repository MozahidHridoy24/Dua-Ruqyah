"use client";
import { useEffect, useState } from "react";
import DuaCard from "./DuaCard";

export default function DuaCardList({ subcatId }) {
  const [duas, setDuas] = useState([]);

  useEffect(() => {
    if (!subcatId) return;
    fetch(`/api/duas/${subcatId}`)
      .then((res) => res.json())
      .then((data) => setDuas(data));
  }, [subcatId]);

  if (!subcatId) {
    return <p className="text-gray-500">Select a subcategory to see Duas.</p>;
  }

  return (
    <div className="space-y-6">
      {duas.map((dua) => (
        <DuaCard
          key={dua.dua_id}
          title={dua.dua_name_en}
          content={dua.top_en}
          reference={dua.refference_en}
          arabic={dua.dua_arabic}
          audio={dua.audio}
          transliteration={dua.transliteration_en}
          translation={dua.translation_en}
        />
      ))}
    </div>
  );
}
