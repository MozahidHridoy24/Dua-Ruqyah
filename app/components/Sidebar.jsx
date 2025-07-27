export default function Sidebar() {
  const categories = [
    {
      name: "Dua's Importance",
      subcategories: [
        "The servant is dependent on his Lord",
        "The most important thing to ask Allah for",
        "Ask for paradise & protection from fire",
      ],
    },
    {
      name: "Dua's Excellence",
      subcategories: [],
    },
  ]

  return (
    <aside className="w-full md:w-64 h-screen bg-[#F8FAF9] border-r border-gray-200 p-4 overflow-y-auto">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Search By Category</h2>
      <ul>
        {categories.map((cat, index) => (
          <li key={index} className="mb-4">
            <h3 className="font-semibold text-gray-800">{cat.name}</h3>
            <ul className="pl-3 mt-1 text-sm text-gray-600 space-y-1">
              {cat.subcategories.map((sub, i) => (
                <li key={i} className="hover:text-[#219EBC] cursor-pointer">
                  {sub}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  )
}
