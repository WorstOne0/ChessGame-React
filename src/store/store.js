import { configureStore } from "@reduxjs/toolkit";

import boardReducer from "./board";

export const store = configureStore({
  reducer: {
    gameState: boardReducer,
  },
});
