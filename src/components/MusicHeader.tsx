import { FaPlay } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img from "./../assets/angel-2.jpg"

import { useSelector, useDispatch } from "react-redux";

const MusicHeader = () => {

  const isPlaying = useSelector(state => state.music.isPlaying)
  // const dispatch = useDispatch()

  // const to


  return (
    <div className="flex justify-between items-center border-b-2 pb-10 ">
      <div className="">
        <div className="mb-10">
          <h1 className="font-bold text-4xl mb-1">The Final Frontier</h1>
          <h4 className="text-2xl">Bones</h4>
        </div>

        <div className="flex">
          <button className="flex items-center border rounded-[50px] py-1 px-7 border-none bg-green-400 text-black font-bold mr-5"
          // onClick={() => isPlaying: !isPlaying}
          >
            {!isPlaying && <FaPlay className="mr-5" />}
            <p>{isPlaying ? "Pause" :"Listen Now"}</p>
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

      <img src={img} alt="" className="w-2/4 h-90" />
    </div>
  );
};

export default MusicHeader;
