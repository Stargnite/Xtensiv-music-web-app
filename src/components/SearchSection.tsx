import { GoSearch } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import Img from "../assets/angel-2.jpg";
import { useEffect, useState } from "react";
import apiClient from "../api/spotify";

export default function SearchSection() {
  const [username, setUsername] = useState("username");
  const [image, setImage] = useState(Img);
  useEffect(() => {
    apiClient.get("me").then((response) => {
      const data = response.data;
      // console.log(data);
      setUsername(data.display_name);
      // if (data.images[0].url) {
      //   setImage(data.images[0].url);
      // } else {
      //   setImage(Img);
      // }
    });
  }, []);

  return (
    <div className="flex items-center justify-between py-5">
      <form
        action=""
        className="flex items-center border rounded-lg min-w-72 py-1"
      >
        <input
          type="text"
          placeholder="Type here to search music, artist,..."
          className="border-none bg-transparent min-w-64 focus:outline-none ml-2"
        />
        <GoSearch className="hover:cursor-pointer mr-2" />
      </form>

      <div className="flex items-center">
        <div className="flex items-center px-2 py-[2px] mr-5 border rounded-xl">
          <p>Welcome, {username}</p>
          <MdKeyboardArrowDown size={20} />
          <img src={image} alt="" className="w-5 h-5 rounded-full" />
        </div>
        <IoSettingsOutline size={20} />
      </div>
    </div>
  );
}
