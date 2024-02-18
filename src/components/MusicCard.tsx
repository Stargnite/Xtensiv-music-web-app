// import img from "./../assets/angel-2.jpg";

type MusicCardProps = {
  music: { id: number; poster: string; title: string; artist: string };
};

const MusicCard: React.FC<MusicCardProps> = ({ music }) => {
  return (
    <div className="rounded">
      <img src={music.poster} alt="" className="min-w-48 max-w-48 h-48 mb-3 rounded-lg" />
      <h3 className="font-semibold text-xl">{music.title}</h3>
      <p className="text-sm">{music.artist}</p>
    </div>
  );
};

export default MusicCard;
