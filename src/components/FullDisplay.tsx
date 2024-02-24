import SearchSection from "./SearchSection";
import MusicHeader from "./MusicHeader";
import Playlists from "./Playlists";
// import img from "./../assets/angel-2.jpg"

const FullDisplay = () => {
  return (
    <div
      className="w-screen overflow-y-scroll min-h-[85vh] max-h-[87vh] bg-gradient-to-t from-black to-slate-800"
      style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
    >
      <div className="px-10">
      <SearchSection />
      <div className="my-10">
        <MusicHeader />
      </div>

      </div>
      <Playlists />
    </div>
  );
};

export default FullDisplay;
