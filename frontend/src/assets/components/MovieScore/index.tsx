import MovieStars from "../MovieStars";

function MovieScore() {

    const score = 3.5;
    const count = 13;
    return (
        <div className="ds-movie-score-container">
            <p className="ds-movie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="ds-movie-score-count">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;