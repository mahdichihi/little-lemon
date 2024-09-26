// utils.js

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate()); // Use the day of the date as the seed

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

export const submitAPI = (formData) => {
  if (!true) console.log("formData : ", formData);
  return true;
};

// Updated initializeTimes function to use today's date
export const initializeTimes = () => {
  const today = new Date(); // Today's date
  return { times: fetchAPI(today) }; // Fetch available times for today
};

// Updated updateTimes reducer to pass selected date to fetchAPI
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, times: fetchAPI(new Date(action.date)) }; // Pass action.date to fetchAPI
    // return { ...state, times: fetchAPI((action.date)) }; // Pass action.date to fetchAPI
    default:
      return state;
  }
};
