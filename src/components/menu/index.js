import React, { useContext } from 'react';
import CloseIcon from '../../assets/close.webp';
import { MENU__ITEMS } from '../../constant';
import { StateContext } from '../../context';
import './menu.css';

const Menu = () => {
  const { state, dispatch } = useContext(StateContext);

  return (
    state.isMenuShow && (
      <div>
        <div className="menu__container">
          <div className="menu__wrapper">
            <img
              src={CloseIcon}
              alt="close-icon"
              onClick={() => dispatch({ type: 'CLOSE_MENU' })}
            />
            {MENU__ITEMS.map((item) => (
              <div
                key={item}
                onClick={() =>
                  dispatch({ type: 'FILTER_CHANGE', value: item })
                }>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Menu;
