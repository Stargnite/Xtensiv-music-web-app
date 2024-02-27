import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../api/spotify";

const SelectedPlaylist = () => {
  const { selectedPlaylistId } = useParams();
  const [listedTracks, setListedTracks] = useState([]);

  useEffect(() => {
    apiClient
      .get(`/playlists/${selectedPlaylistId}/tracks`)
      .then((response) => {
        console.log(response.data);
        setListedTracks(response.data.items);
      });
  }, [selectedPlaylistId]);

  return (
    <div className="w-screen overflow-y-scroll min-h-[85vh] max-h-[87vh] "
    style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
      <h1 className="px-5 text-[3rem] font-bold mb-5">Tracks</h1>

      <ul>
        {listedTracks.map((item) => (
          <li key={item.track.id} className="py-3 px-5 border border-t-0 border-l-0 border-r-0 border-gray-800 hover:cursor-pointer hover:bg-slate-900 transition-all-ease">
            <h3>{item.track.name}</h3>
            <p className="text-gray-500">{item.track.artists[0].name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedPlaylist;
