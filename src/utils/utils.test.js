// timeReducer.test.js
import { initializeTimes, timeReducer } from "./utils";

describe("Time Reducer Functions", () => {
  test("initializeTimes should return the correct initial available times", () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];

    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });

  test("timeReducer should initialize times with the INITIALIZE_TIMES action", () => {
    const initialState = [];
    const action = {
      type: "INITIALIZE_TIMES",
      payload: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    };

    const result = timeReducer(initialState, action);
    expect(result).toEqual(action.payload);
  });

  test("timeReducer should remove booked time with the BOOK_TIME action", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = {
      type: "BOOK_TIME",
      payload: "18:00",
    };

    const result = timeReducer(initialState, action);
    expect(result).toEqual(["17:00", "19:00"]); // Time "18:00" should be removed
  });

  test("timeReducer should return the current state for unknown actions", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = {
      type: "UNKNOWN_ACTION",
    };

    const result = timeReducer(initialState, action);
    expect(result).toEqual(initialState); // Should return the current state
  });
});
