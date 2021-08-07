const initialState = {
  loading: true,
  users: [],
  error: "",
};

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case "fetch_users":
      return { loading: false, users: action.payload, error: "" };
    case "error_users":
        return {loading: false, error:action.payload};
    default:
      return state;
  }
}

export default UserReducer;
