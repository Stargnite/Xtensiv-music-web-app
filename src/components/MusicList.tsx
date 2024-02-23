import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { musicList } from "../assets/music-list";
import MusicCard from "./MusicCard";
import APIKit from "./../api/spotify"
import { useEffect, useState } from "react";

const MusicList = () => {
  const [playlist, setPlaylist] = useState(null)


  useEffect(() => {
    APIKit.get("me/playlists").then(function(response) {
      console.log(response.data)
    })
  }, [])

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <h1 className="mr-5 text-xl font-semibold">
            Musics We Think You'd Like{" "}
          </h1>
          <MdOutlineKeyboardArrowRight />
        </div>
        <div className="flex items-center">
          <button className="mr-5">
            <MdKeyboardArrowLeft size={30} />
          </button>
          <button>
            <MdOutlineKeyboardArrowRight size={30} />
          </button>
        </div>
      </div>

      <ul className="flex justify-between overflow-x-scroll" style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
        {musicList.map((music) => (
          <li key={music.id} className="mx-3">
            <MusicCard music={music} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
