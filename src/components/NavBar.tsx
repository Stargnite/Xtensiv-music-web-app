import { HiHome } from "react-icons/hi";
import { CgMusicSpeaker } from "react-icons/cg";
import { PiMicrophone } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { IoAlbumsOutline } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";
import { MdOutlineAddBox } from "react-icons/md";
import { PiPlaylistLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import APIKit from "./../api/spotify";

const NavBar = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      setPlaylists(response.data.items);
      console.log(response.data.items);
    });
  }, []);

  return (
    <nav className="">
      <div className="nav-section mb-5">
        <p className="text-gray-500 text-sm">MENU</p>
        <div className="flex flex-col">
          {/* <Link to="/"> */}
          <button className="flex items-center text-lg py-1 border-r-2 hover:bg-slate-800 transition-all">
            <HiHome size={20} className="mr-2" />
            <p>Explore</p>
          </button>
          {/* </Link> */}
          <button className="flex items-center text-lg py-1 hover:bg-slate-800 transition-all">
            <CgMusicSpeaker size={20} className="mr-2" />
            <p>Genre</p>
          </button>
          <button className="flex items-center text-lg py-1 hover:bg-slate-800 transition-all">
            <PiMicrophone size={20} className="mr-2" />
            <p>Podcast</p>
          </button>
        </div>
      </div>

      <div className="nav-section mb-5">
        <p className="text-gray-500 text-sm">My Library</p>
        <div className="flex flex-col">
          <button className="flex items-center  text-lg py-1 hover:bg-slate-800 transition-all">
            <CiHeart size={20} className="mr-2" />
            <p>Liked</p>
          </button>
          <button className="flex items-center text-lg py-1 hover:bg-slate-800 transition-all">
            <IoAlbumsOutline size={20} className="mr-2" />
            <p>Albums</p>
          </button>
          <button className="flex items-center text-lg py-1 hover:bg-slate-800 transition-all">
            <BsClockHistory size={20} className="mr-2" />
            <p>Recently Played</p>
          </button>
        </div>
      </div>

      <div className="nav-section mb-5">
        <p className="text-gray-500 text-sm">Your Playlists</p>
        <div className="flex flex-col">
          <div className="flex items-center text-lg py-1">
            <MdOutlineAddBox size={20} className="mr-2" />
            <p>Create Playlist</p>
          </div>
          {playlists &&
            playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="flex items-center text-lg py-1 hover:bg-slate-800 transition-all cursor-pointer"
              >
                <PiPlaylistLight size={20} className="mr-2" />
                <p className="text-nowrap overflow-hidden">{playlist.name}</p>
              </div>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
