import { FaPlay } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img from "../../assets/angel-2.jpg";
import "./musicHeader.css";
import { useSelector, useDispatch } from "react-redux";
import { IoMdPhonePortrait } from "react-icons/io";
import Marquee from "../UI/Marquee";
import { useEffect } from "react";

const MusicHeader = () => {
  const isPlaying = useSelector((state) => state.music.isPlaying);
  // const dispatch = useDispatch()

  const currentTrack = useSelector((state) => state.music.currentTrack);
  const currentTrackIndex = useSelector((state) => state.music.currentTrackIndex);
  useEffect(() => {

  }, [currentTrackIndex])

  const imageUrl =
    currentTrack &&
    
    currentTrack.album &&
    currentTrack.album.images &&
    currentTrack.album.images.length > 2
      ? currentTrack.album.images[0].url
      : img;

  const artistName =
    currentTrack && currentTrack.artists && currentTrack.artists.length > 0
      ? currentTrack.artists[0].name
      : "name";

  return (
    <div className="flex justify-between items-center border-b-2 pb-10 ">
      <div className="">
        <div className="mb-10 overflow-hidden">
          <Marquee>
            <h1 className="font-bold text-4xl mb-1">
              {currentTrack.name ? currentTrack.name : "Current music"}
            </h1>
          </Marquee>
          <h4 className="text-2xl">{artistName}</h4>
        </div>

        <div className="flex">
          <button
            className="flex items-center border rounded-[50px] py-1 px-7 border-none bg-green-400 text-black font-bold mr-5"
            // onClick={() => isPlaying: !isPlaying}
          >
            {!isPlaying && <FaPlay className="mr-5" />}
            <p>{isPlaying ? "Pause" : "Listen Now"}</p>
          </button>
          <button className="flex items-center my-2 border border-white rounded-xl px-3 py-1">
            <CiHeart className="mr-2" />
            <p className="text-sm">Add to my list</p>
          </button>
        </div>

        <div className="flex items-center mt-10 hover:cursor-pointer ">
          <p className="mr-2">Play more from this artist</p>
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
      <div className="flex items-center justify-center relative poster">
        <img
          src={imageUrl}
          alt="music poster"
          className="w-[70%]  max-w-2/4 max-h-80 rounded-xl mr-30"
        />
        <img
          src={imageUrl}
          alt="music poster"
          className="w-[70%] max-w-2/4 max-h-80 rounded-xl poster-shadow"
        />
      </div>
    </div>
  );
};

export default MusicHeader;
