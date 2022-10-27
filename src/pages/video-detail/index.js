import React from 'react';
import './video.css';
import { RiShareFill } from 'react-icons/ri';
import { FaPlay } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import mafa1 from '../../assets/mafa-1.webp';
import mafa2 from '../../assets/mafa-2.webp';

export default function VideoDetail() {
  const { state } = useLocation();
  const { title } = state || {};

  return (
    <div>
      <div className="iframe__detail">
        <iframe
          src="https://trailer.mocaas.tv/trailer/3ea933883c31a8ebdf07e4e00e84da3c.mp4"
          style={{ width: '100%', height: '100%' }}></iframe>
      </div>
      <main className="main__detail">
        <p>{title}</p>
        <div>
          <button className="main__button">
            <RiShareFill style={{ fontSize: 16 }} />
            Share
          </button>
        </div>
        <div className="main__article">
          <p>
            Release year: <span>2022</span>
          </p>
          <p>
            Categories: <span>Uncategorized</span>
          </p>
        </div>
      </main>
      <div className="related__video">
        <h3 style={{ marginBottom: '1.5rem' }}>Related Videos</h3>
        <div className="home__content">
          {[...new Array(2)].map((_, i) => (
            <div className="home__card" key={i}>
              <img src={mafa1} alt="content" />
              <p>Mafa learns how important it is to read books</p>
              <button className="button__card">
                <FaPlay style={{ color: '#fff', fontSize: 16 }} />
                Play
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
