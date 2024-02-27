import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../api/spotify";
import { useSelector, useDispatch } from "react-redux";
import { fillPlaylist, updateCurrentTrack } from "../../store/musicSlice";

const SelectedPlaylist = () => {
  const { selectedPlaylistId } = useParams();
  // const [listedTracks, setListedTracks] = useState([]);
  // const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
  const listedTracks = useSelector((state) => state.music.playlist);
  const currentTrack = useSelector((state) => state.music.currentTrack);

  useEffect(() => {
    apiClient
      .get(`/playlists/${selectedPlaylistId}/tracks`)
      .then((response) => {
        const tracks = response.data.items;
        dispatch(fillPlaylist(tracks));
        dispatch(updateCurrentTrack(tracks[currentIndex].track));
        console.log(response.data.items);
        // setCurrentIndex()
        // setListedTracks(tracks);
        // setCurrentTrack(tracks[0].track);
      });
    // console.log(currentTrack);
  }, [selectedPlaylistId, dispatch, currentIndex]);

  return (
    <div
      className="w-screen overflow-y-scroll min-h-[85vh] max-h-[87vh] "
      style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
    >
      <h1 className="px-5 text-[3rem] font-bold mb-5">Tracks</h1>

      <ul>
        {listedTracks.map((item) => (
          <li
            key={item.track.id}
            className="flex items-center py-3 px-5 border border-t-0 border-l-0 border-r-0 border-gray-800 hover:cursor-pointer hover:bg-slate-900 transition-all ease-out duration-300"
          >
            <img
              src={item.track.album.images[2].url}
              alt=""
              className="rounded-lg mr-4"
            />
            <div className="">
              <h3>{item.track.name}</h3>
              <p className="text-gray-500">{item.track.artists[0].name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedPlaylist;
