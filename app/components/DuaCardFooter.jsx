import {
  FaRegBookmark,
  FaRegCopy,
  FaShareAlt,
  FaEllipsisV,
  FaPlay,
} from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useRef } from "react";

export default function DuaCardFooter({ duaId, audioSrc }) {
  console.log(audioSrc);
  const audioRef = useRef(null);

  const handlePlay = async () => {
    try {
      if (audioRef.current) {
        await audioRef.current.play();
      }
    } catch (error) {
      console.error("Audio play error:", error);
    }
  };

  return (
    <div className="flex items-center justify-end gap-4 mt-4 text-xl text-[#588157]">
      {/* Play Audio */}
      <button
        data-tooltip-id={`play-${duaId}`}
        data-tooltip-content="Play Audio"
        className="hover:scale-110 transition-transform"
        onClick={handlePlay}
      >
        <FaPlay />
        {audioSrc && <audio ref={audioRef} src={audioSrc} preload="none" />}
      </button>

      <Tooltip
        id={`play-${duaId}`}
        place="top"
        className="!text-sm !rounded-xl !border !border-[#588157] !bg-white !text-[#588157] !px-3 !py-1 shadow-lg"
      />

      {/* Bookmark */}
      <button
        data-tooltip-id={`bookmark-${duaId}`}
        data-tooltip-content="Bookmark"
        className="hover:scale-110 transition-transform"
      >
        <FaRegBookmark />
      </button>
      <Tooltip
        id={`bookmark-${duaId}`}
        place="top"
        className="!text-sm !rounded-xl !border !border-[#588157] !bg-white !text-[#588157] !px-3 !py-1 shadow-lg"
      />

      {/* Copy */}
      <button
        data-tooltip-id={`copy-${duaId}`}
        data-tooltip-content="Copy"
        className="hover:scale-110 transition-transform"
        onClick={() => {
          navigator.clipboard.writeText("Some dua text"); // Replace with actual dua
        }}
      >
        <FaRegCopy />
      </button>
      <Tooltip
        id={`copy-${duaId}`}
        place="top"
        className="!text-sm !rounded-xl !border !border-[#588157] !bg-white !text-[#588157] !px-3 !py-1 shadow-lg"
      />

      {/* Share */}
      <button
        data-tooltip-id={`share-${duaId}`}
        data-tooltip-content="Share"
        className="hover:scale-110 transition-transform"
      >
        <FaShareAlt />
      </button>
      <Tooltip
        id={`share-${duaId}`}
        place="top"
        className="!text-sm !rounded-xl !border !border-[#588157] !bg-white !text-[#588157] !px-3 !py-1 shadow-lg"
      />

      {/* More Options */}
      <button
        data-tooltip-id={`more-${duaId}`}
        data-tooltip-content="More"
        className="hover:scale-110 transition-transform"
      >
        <FaEllipsisV />
      </button>
      <Tooltip
        id={`more-${duaId}`}
        place="top"
        className="!text-sm !rounded-xl !border !border-[#588157] !bg-white !text-[#588157] !px-3 !py-1 shadow-lg"
      />
    </div>
  );
}
