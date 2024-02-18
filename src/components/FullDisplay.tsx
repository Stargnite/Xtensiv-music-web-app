import SearchSection from "./SearchSection";
import MusicHeader from "./MusicHeader";
import MusicList from "./MusicList";
// import img from "./../assets/angel-2.jpg"

const FullDisplay = () => {
  return (
    <div
      className="w-screen px-10 overflow-y-scroll min-h-[85vh] max-h-[87vh] bg-gradient-to-t from-black to-slate-800"
      style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
    >
      <SearchSection />
      <div className="my-10">
        <MusicHeader />
      </div>
      <MusicList />
    </div>
  );
};

export default FullDisplay;
