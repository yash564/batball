const initialState = {
  bat: 10,
};

function BatReducer(state = initialState, action) {
  switch (action.type) {
    case "set_bat":
      return {
        bat: state.bat - action.payload,
      };
    default:
      return state;
  }
}

export default BatReducer;
