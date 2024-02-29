import ImageHolder from "./../assets/angel-2.jpg";
import { CiHeart } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { PiRepeatLight } from "react-icons/pi";
import { FaBackwardStep } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import { FaStepForward } from "react-icons/fa";
import { IoShuffle } from "react-icons/io5";
import { FaVolumeHigh } from "react-icons/fa6";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { GrAppsRounded } from "react-icons/gr";
import { FaCirclePause } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import music from "./../assets/Asake_-_Dull.mp3";
import { useSelector, useDispatch } from "react-redux";
import { togglePlay } from "../store/musicSlice";
import Marquee from "./UI/Marquee";

const ControlCenter = () => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  // const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.5);

  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.music.isPlaying);
  const currentTrack = useSelector((state) => state.music.currentTrack);

  const imageUrl =
    currentTrack &&
    currentTrack.album &&
    currentTrack.album.images &&
    currentTrack.album.images.length > 2
      ? currentTrack.album.images[2].url
      : ImageHolder;

  const artistName =
    currentTrack && currentTrack.artists && currentTrack.artists.length > 0
      ? currentTrack.artists[0].name
      : "name";

  useEffect(() => {
    // console.log(currentTrackIndex);
    const audioElement = audioRef.current;

    const updateTime = () => {
      if (audioElement) {
        setCurrentTime(audioElement.currentTime);
        setDuration(audioElement.duration);
      }
    };

    if (audioElement) {
      audioElement.addEventListener("timeupdate", updateTime);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("timeupdate", updateTime);
      }
    };
  }, []);

  // const togglePlay = () => {
  //   const audioElement = audioRef.current;
  //   console.log(audioElement);

  //   if (audioElement) {
  //     if (audioElement.paused) {
  //       audioElement.play();
  //     } else {
  //       audioElement.pause();
  //     }
  //     setIsPlaying(!audioElement.paused);
  //   }
  // };

  const handleTogglePlay = () => {
    const audioElement = audioRef.current;
    dispatch(togglePlay(audioElement));
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="flex flex-col bg-black">
      <div className="flex self-center">
        <progress
          value={currentTime}
          max={duration || 100}
          className="w-screen h-[5px] hover:cursor-pointer p-0 m-0"
        />
      </div>

      <div className="py-2 px-5 flex justify-between">
        <div className="flex items-center">
          <img
            src={imageUrl}
            alt=""
            className="w-14 h-14 mr-5 border-white border-[0.1rem] rounded"
          />
          <div className="mr-5">
            <Marquee>
              <h1 className="font-semibold text-xl">
                {currentTrack && currentTrack.name
                  ? currentTrack.name
                  : "Select a music for its name to display here"}
              </h1>
            </Marquee>
            <p>{artistName}</p>
          </div>
          <div className="flex">
            <CiHeart size={25} className="mr-2 hover:cursor-pointer" />
            <IoAddCircleOutline size={25} className="hover:cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center justify-between w-1/5">
          <PiRepeatLight size={25} className="hover:cursor-pointer" />
          <FaBackwardStep size={25} className="hover:cursor-pointer" />
          {isPlaying ? (
            <FaCirclePause
              size={40}
              className="hover:cursor-pointer"
              onClick={handleTogglePlay}
            />
          ) : (
            <FaCirclePlay
              size={40}
              className="hover:cursor-pointer"
              onClick={handleTogglePlay}
            />
          )}
          <FaStepForward size={25} className="hover:cursor-pointer" />
          <IoShuffle size={25} className="hover:cursor-pointer" />
        </div>

        <div className="flex items-center justify-between w-1/6">
          <div className="flex items-center">
            <FaVolumeHigh size={25} className="hover:cursor-pointer" />

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="h-[5px] w-20 hover:cursor-pointer m-2"
            />
          </div>
          <HiBars3BottomLeft size={25} className="hover:cursor-pointer" />
          <GrAppsRounded size={25} className="hover:cursor-pointer" />
        </div>
      </div>

      <audio ref={audioRef}>
        <source src={music} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default ControlCenter;
