import React from "react";
import { connect } from "react-redux";


const Ball = (props) => {
    console.log(props);
  return (
    <div>
      <h1>Total Balls: {props.ball}</h1>
      <button onClick={props.buyBall}>Buy Ball</button>
      <button onClick={props.sellBall}>Sell Ball</button>
    </div>
  );
};

function mapStateToProps(state) {
  return state.Ball;
}

function mapDispatchToProps(dispatch) {
  return {
    buyBall: () => {
      dispatch({
        type: "buy_ball",
      });
    },
    sellBall: () => {
      dispatch({
        type: "sell_ball",
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Ball);
