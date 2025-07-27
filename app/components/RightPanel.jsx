export default function RightPanel() {
  return (
    <aside className="hidden lg:block w-72 h-screen sticky top-0 p-6 border-l bg-[#F8FAF9] text-gray-800">
      <h2 className="text-lg font-semibold mb-6">Language Settings</h2>
      <ul className="space-y-4 text-sm">
        <li className="text-gray-700">
          Selected Language: <span className="text-[#219EBC]">English</span>
        </li>
        <li className="text-gray-600">Font Setting</li>
        <li className="text-gray-600">View Setting</li>
        <li className="text-gray-600">Appearance Settings</li>
      </ul>
    </aside>
  );
}
