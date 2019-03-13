import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './Destination.css';

class Destination extends React.Component {
    

    render() {
        const { destination } = this.props;
        return (
            <article className="exotics">
                <h1 className="destTitle">{destination.title}</h1>
                <Link to={`/destination/${destination._id}`} >
                    <img className="destImage" src={destination.image} alt={destination.title} />
                </Link>
                <h3>{destination.description}</h3>
                <div>
                <FontAwesomeIcon icon={faHeart} className="heart" spin  />
                </div>
            </article>
        );
    }
}

export default Destination;