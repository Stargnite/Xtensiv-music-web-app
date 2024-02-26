import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
// import { musicList } from "../assets/music-list";
import PlaylistCard from "./PlaylistCard/PlaylistCard";
import APIKit from "../api/spotify";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MusicList = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      setPlaylists(response.data.items);
      console.log(response.data.items);
    });
  }, []);

  return (
    <div
      className=" px-10 pt-2 w-full max-h-[87vh] flex overflow-y-scroll flex-wrap"
      style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
    >
      {playlists ? (
        <div className="">
          <div className="flex items-center w-full justify-between mb-5">
            <Link to="/playlists">
              <div className="flex items-center">
                <h1 className="mr-5 text-xl font-semibold">
                  Your available playlists{" "}
                </h1>
                <MdOutlineKeyboardArrowRight />
              </div>
            </Link>
            <div className="flex items-center">
              <button className="mr-5">
                <MdKeyboardArrowLeft size={30} />
              </button>
              <button>
                <MdOutlineKeyboardArrowRight size={30} />
              </button>
            </div>
          </div>

          <ul
            className="flex flex-wrap"
            // style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            {playlists.map((playlist: object) => (
              <li key={playlist.id} className="mx-3">
                <Link to={`/playlists/${playlist.id}/tracks`}>
                <PlaylistCard playlist={playlist} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h1 className="flex text-center justify-center items-center mt-[-5rem] ml-[5rem] text-2xl">
          You have no current playlist, kindly go create a playlist on spotify
          so they can appear here
        </h1>
      )}
    </div>
  );
};

export default MusicList;
