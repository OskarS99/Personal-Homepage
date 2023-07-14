import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Common/themeSlice";
import personalHomepageReducer from "../features/personalHomepage/personalHomepageSlice";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    personalHomepage: personalHomepageReducer,
    theme: themeReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(saga);
export default store;
