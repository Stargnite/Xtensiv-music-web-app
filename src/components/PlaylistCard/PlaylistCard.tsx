// import img from "./../assets/angel-2.jpg";
import { AiFillPlayCircle } from "react-icons/ai";
import "./playlistcard.css";

// type MusicCardProps = {
//   music: { id: number; poster: string; title: string; artist: string };
// };

const PlaylistCard: React.FC = ({ playlist }) => {
  return (
    <div className="mt-5 mb-5 playlist-card">
      <img
        src={playlist.images[0].url}
        alt=""
        className="min-w-48 max-w-48 h-48 mb-3 rounded-lg playlist-image"
      />
      <div className="flex items-center justify-between pb-3">
        <div className="pl-2">
          <h3 className="playlist-title">{playlist.name}</h3>
          <p className="text-sm">{playlist.tracks.total} Songs</p>
        </div>
        <div className="playlist-fade">
          <AiFillPlayCircle size={40} className=" fill-primary1" />
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
