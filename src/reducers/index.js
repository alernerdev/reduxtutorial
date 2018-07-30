import { combineReducers } from 'redux';

import BooksReducer from "./reducerBooks";
import ActiveBookReducer from "./reducerActiveBook";

/* the properties defined here will end up on the application state */
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
