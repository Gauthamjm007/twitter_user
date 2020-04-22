const initState = [];

export default function searchDataReducer(state = initState, action) {
  switch (action.type) {
    case "GET_SEARCHES":
      return [...action.payload];
    case "REMOVE_SEARCHES":
      return "";
    default:
      return [...state];
  }
}
