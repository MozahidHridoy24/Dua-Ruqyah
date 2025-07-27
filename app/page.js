import Sidebar from "../app/components/sidebar";
import RightPanel from "../app/components/rightpanel";
import DuaCard from "../app/components/duacard";

export default function Home() {
  return (
    <div className="flex bg-gray-50 text-gray-800">
      <Sidebar />

      <main className="flex-1 p-6 max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-2">
          Home &gt; Categories of Dua &gt;{" "}
          <span className="text-blue-700">Dua's Importance</span>
        </div>

        {/* Titles */}
        <h2 className="text-gray-800 font-bold text-xl mb-2">
          Category: Dua's Importance
        </h2>
        <h3 className="text-gray-600 mb-6">
          Section: The servant is dependent on his Lord
        </h3>

        {/* Dua Cards */}
        <DuaCard
          title="01. We Are in Need of Allah’s Help (Surah Al-Fatir)"
          content="All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world..."
          reference="Surah Al-Fatir 35:15"
          arabic="يَا أَيُّهَا النَّاسُ أَنتُمُ الْفُقَرَاءُ إِلَى اللَّهِ..."
        />

        <DuaCard
          title="02. Dua After Prayer for Rizq and Help"
          content="The Prophet ﷺ used to say after every compulsory prayer... treasure of all things is in the hands of Allah..."
          reference="Surah Al-Hijr 15:21"
          arabic="اللَّهُمَّ لاَ مَانِعَ لِمَا أَعْطَيْتَ، وَلاَ مُعْطِيَ لِمَا مَنَعْتَ..."
        />
      </main>

      <RightPanel />
    </div>
  );
}
