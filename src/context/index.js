import { createContext, useMemo, useReducer } from 'react';

const StateContext = createContext();
const initialState = {
  isMenuShow: false,
  filterValue: 'Uncategorized',
  isTrailerShow: false,
};
const reducer = (state, action) => {
  const { type, value } = action;
  switch (type) {
    case 'FILTER_CHANGE':
      return { isMenuShow: false, filterValue: value };
    case 'OPEN_MENU':
      return { ...state, isMenuShow: true };
    case 'CLOSE_MENU':
      return { ...state, isMenuShow: false };
    case 'OPEN_TRAILER':
      return { ...state, isTrailerShow: true };
    case 'CLOSE_TRAILER':
      return { ...state, isTrailerShow: false };
    default:
      return state;
  }
};

function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
}

export { StateContext, StateProvider };
