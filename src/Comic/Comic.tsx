import "./comic.css";

interface TComicProps {
  title: string;
  thumbnailUrl?: string;
}

export default function Comic(props: TComicProps) {
  const { thumbnailUrl, title } = props;
  return (
    <div className="comic">
      <div className="comic-img">
        <img src={thumbnailUrl} alt="" />
      </div>
      <div className="comic-title">
        <p>{title}</p>
      </div>
    </div>
  );
}
