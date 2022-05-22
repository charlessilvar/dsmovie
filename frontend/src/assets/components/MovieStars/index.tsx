import { ReactComponent as StarFull } from 'assets/img/Fullstar.svg'
import { ReactComponent as StarHalf } from 'assets/img/Halfstar.svg'
import { ReactComponent as StarEmpty } from 'assets/img/Emptystar.svg'


function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStars;