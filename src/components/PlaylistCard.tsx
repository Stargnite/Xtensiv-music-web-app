// import img from "./../assets/angel-2.jpg";

// type MusicCardProps = {
//   music: { id: number; poster: string; title: string; artist: string };
// };

const PlaylistCard: React.FC = ({ playlist }) => {
  return (
    <div className="rounded hover:cursor-pointer my-5">
      <img src={playlist.images[0].url} alt="" className="min-w-48 max-w-48 h-48 mb-3 rounded-lg" />
      <h3 className="font-semibold text-xl">{playlist.name}</h3>
      {/* <p className="text-sm">{playlist.type}</p> */}
    </div>
  );
};

export default PlaylistCard;
