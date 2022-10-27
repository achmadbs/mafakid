import React, { useContext } from 'react';
import './carousel.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaPlay } from 'react-icons/fa';
import { DATA } from '../../constant';
import { StateContext } from '../../context';
import { useNavigate } from 'react-router-dom';

const SETTINGS = {
  showArrows: false,
  showThumbs: false,
  autoPlay: true,
  infiniteLoop: true,
  showStatus: false,
  swipeable: true,
  stopOnHover: true,
};

const Slider = () => {
  const { dispatch } = useContext(StateContext);
  const navigate = useNavigate();

  return (
    <Carousel {...SETTINGS}>
      {DATA.map(({ title, desc, backgroundImg, hasTrailer, id }) => (
        <div className="card__container" key={id}>
          <div className="card__image">
            <img src={backgroundImg} alt="bg-image" loading="lazy" />
          </div>
          <div className="card__details">
            <h2>{title}</h2>
            {desc && <p>{desc}</p>}
            <div className="card__actions">
              <button
                className="button__style red__button"
                onClick={() =>
                  navigate(`/programs/${id}`, { state: { title } })
                }>
                <FaPlay style={{ color: '#fff', fontSize: 16 }} />
                Play
              </button>
              {hasTrailer && (
                <button
                  className="button__style white__button"
                  onClick={() => dispatch({ type: 'OPEN_TRAILER' })}>
                  <FaPlay style={{ color: 'red', fontSize: 16 }} />
                  Trailer
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
