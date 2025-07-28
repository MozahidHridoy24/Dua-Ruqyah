export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Spinner */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#588157] animate-spin"></div>
        <div className="absolute top-1 left-1 w-12 h-12 rounded-full bg-[#588157] opacity-20 animate-pulse"></div>
      </div>

      {/* Text */}
      <p className="mt-6 text-lg font-medium text-[#588157] animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
}
