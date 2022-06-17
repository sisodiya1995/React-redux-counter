import  React from "react";
import { connect } from "react-redux";
import { updateStep } from "../store/action";

function Step(props) {
  function handleclick(step) {
    props.dispatch(updateStep(step));
  }
  return (
    <>
      <button onClick={() => handleclick(5)}>5</button>
      <button onClick={() => handleclick(10)}>10</button>
      <button onClick={() => handleclick(15)}>15</button>
    </>
  );
}
function mapStatetoProps(state) {
  return {
    step: state.step,
  };
}

export default connect(mapStatetoProps)(Step);
