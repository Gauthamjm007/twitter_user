const initState = [];
export default function tweetsReducer(state = initState, action) {
  switch (action.type) {
    case "GET_TWEETS":
      return action.payload;
    case "CLEAR_TWEETS":
      return [];
    default:
      return [...state];
  }
}
