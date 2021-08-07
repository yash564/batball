const initialState = {
  ball: 15,
};

function BallReducer(state = initialState, action) {
  switch (action.type) {
    case "buy_ball":
      return {
        ball: state.ball + 1,
      }
    case "sell_ball":
      return {
        ball: state.ball - 1,
      }
    default:
      return state;
  }
}

export default BallReducer;
