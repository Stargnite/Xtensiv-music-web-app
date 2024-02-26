import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../api/spotify";

const SelectedPlaylist = () => {
  const { selectedPlaylistId } = useParams();
  const [listedTracks, setListedTracks] = useState([]);

  console.log(selectedPlaylistId);

  useEffect(() => {
    apiClient
      .get(`/playlists/${selectedPlaylistId}/tracks`)
      .then((response) => {
        console.log(response.data);
        setListedTracks(response.data.items);
      });
  }, [selectedPlaylistId]);

  return (
    <div className="px-5 w-screen overflow-y-scroll min-h-[85vh] max-h-[87vh] "
    style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}>
      <h1 className="text-[3rem] font-bold mb-5">Tracks</h1>

      <ul>
        {listedTracks.map((item) => (
          <li key={item.track.id} className="py-5">
            <p>{item.track.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedPlaylist;
