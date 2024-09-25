export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const timeReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_TIMES":
      return action.payload; // Set initial available times
    case "BOOK_TIME":
      return state.filter((time) => time !== action.payload); // Remove booked time from available times
    default:
      return state;
  }
};
