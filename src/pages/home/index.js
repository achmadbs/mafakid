import React, { useContext } from 'react';
import Slider from '../../components/carousel';
import { StateContext } from '../../context';
import './home.css';
import { FiChevronDown } from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';
import { CONTENT, MENU__ITEMS } from '../../constant';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { state, dispatch } = useContext(StateContext);
  const navigate = useNavigate();

  function handleFilterContent() {
    const newContent = CONTENT.filter((value) => {
      return value.category.includes(state.filterValue);
    });
    return newContent;
  }

  const renderSideFilter = () => (
    <aside className="side__container">
      {MENU__ITEMS.map((value, i) => (
        <p
          key={i}
          style={{ color: `${state.filterValue === value ? '#000' : ''}` }}
          onClick={() => dispatch({ type: 'FILTER_CHANGE', value })}>
          {value}
        </p>
      ))}
    </aside>
  );

  return (
    <div>
      <Slider />
      <section className="section__container">
        <div className="section__wrapper">
          <div>
            {renderSideFilter()}
            <button
              className="home__button"
              onClick={() => dispatch({ type: 'OPEN_MENU' })}>
              {state.filterValue}
              <FiChevronDown style={{ color: 'red', fontSize: 16 }} />
            </button>
          </div>
          <div className="home__content">
            {handleFilterContent().map(({ id, title, img }) => (
              <div className="home__card" key={id}>
                <img src={img} alt="content" />
                <p>{title}</p>
                <button
                  className="button__card"
                  onClick={() =>
                    navigate(`/programs/${id}`, { state: { title } })
                  }>
                  <FaPlay style={{ color: '#fff', fontSize: 16 }} />
                  Play
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
