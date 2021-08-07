import React, { useEffect } from "react";
import userFetchMiddleware from "../redux/userMiddleware";
import { connect } from "react-redux";

const User = (props) => {
  const { loading, users, error } = props;

  useEffect(() => {
    props.fetchUser();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>...loading</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        users.map((user) => {
          return <h2 key={user.id}>{user.name}</h2>;
        })
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return state.User;
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: () => {
      return dispatch(userFetchMiddleware);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
