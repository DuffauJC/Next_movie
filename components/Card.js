const placeholderImg =
  "https://image.tmdb.org/t/p/w500/";
const Card = ({ original_title, poster_path, release_date, id }) => {
  return (
    <div className="card" style={{ marginBottom: "10px" }}>
      <div className="card-body d-flex justify-content-between">
        <div className="d-flex align-items-start">
          <a
            href={`https://www.themoviedb.org/movie/${id}-`}
            target="_blank"
            style={{ color: "#9b59b6" }}
          >
            <img
              className="mr-2 rounded"
              src={poster_path !== null ? placeholderImg + poster_path: null}
              alt="placeholder"
              width="100"
              height="130"
            />

            <span className="title" style={{ fontSize: "20px" }}>
              {original_title}
            </span>
          </a>
        </div>
        <p style={{ fontSize: "20px" }}>{release_date}</p>
      </div>
    </div>
  );
};
export default Card;
