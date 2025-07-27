export default function DuaCard({ title, content, reference, arabic }) {
  return (
    <div className="border border-gray-200 bg-white p-6 rounded-xl shadow-sm mb-6">
      <h3 className="text-[#219EBC] font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-800">{content}</p>
      {reference && (
        <p className="text-sm text-[#3B82F6] mt-2">Reference: {reference}</p>
      )}

      {/* Icons - UI only */}
      <div className="flex items-center gap-4 mt-4 text-[#9CA3AF] text-xl">
        <button title="Bookmark">🔖</button>
        <button title="Copy">📋</button>
        <button title="Share">🔗</button>
        <button title="More">⋮</button>
      </div>

      {/* Arabic Text */}
      {arabic && (
        <div className="text-right mt-4 text-2xl text-gray-800 font-serif leading-loose">
          {arabic}
        </div>
      )}
    </div>
  )
}
