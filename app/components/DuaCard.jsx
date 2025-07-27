import DuaCardFooter from "./DuaCardFooter";

export default function DuaCard({
  id,
  title,
  content,
  reference,
  arabic,
  audio,
  transliteration,
  translation,
}) {
  return (
    <div className="border border-gray-200 bg-white p-6 rounded-xl shadow-sm mb-6">
      <h3 className="text-[#219EBC] font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-800">{content}</p>

      {/* Arabic Text */}
      {arabic && (
        <div className="text-right mt-4 text-2xl text-gray-800 font-serif leading-loose">
          {arabic}
          <p className="text-start text-sm text-gray-600">{transliteration}</p>
          <h2 className="mt-2 text-start text-base font-bold text-[#588157]">
            Translation:{" "}
            <span className="text-black font-normal">{translation}</span>
          </h2>
        </div>
      )}
      {reference && (
        <p className="text-sm text-[#588157] mt-2">Reference: {reference}</p>
      )}

      {/* Icons - UI only */}
      <div className="flex items-end justify-end gap-4 mt-4 text-[#9CA3AF] text-xl">
        <DuaCardFooter duaId={id} audioSrc={audio} />
      </div>
    </div>
  );
}
