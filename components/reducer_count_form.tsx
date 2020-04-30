import * as React from 'react';

function reducer(state, action) {
  if (action.type == "input") {
    return {count: state.count, count_buf: action.count_buf}
  } else {
    if (action.type == "minus") state.count_buf *= -1;
    return {count: state.count + state.count_buf, count_buf: action.count_buf};
  }
}
const initialState = {count: 10, count_buf: 0};

export default () =>{
  
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <input type="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch({count_buf: Number(e.target.value), type: "input"});
        }}
      ></input>
      <button onClick={() => dispatch({count_buf: state.count_buf, type: "plus"})}>plus</button>
      <button onClick={() => dispatch({count_buf: state.count_buf, type: "minus"})}>minus</button>
    </>
  );
}