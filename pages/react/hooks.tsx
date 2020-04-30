import { useState, useReducer, useEffect } from "react";
import Timer from '../../components/timer';
import ReducerCountForm from '../../components/reducer_count_form';

const Home = ({allPostsData}) => {
  const [todos, setTodos] = useState([]);
  const [tmpTodo, setTmpTodo] = useState("");
  const addTodo = () => {
    setTodos([...todos, tmpTodo]);
    setTmpTodo("");
  };

  const [state, setState] = useState('');

  return (
    <>
      <Timer></Timer>
      <p></p>
      <ReducerCountForm></ReducerCountForm>
      <p></p>
      <input type="text"
       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
         setState(e.target.value);
       }}
       value={state}
      />
      <h1>Todo App</h1>
      <div className="form">
        <input type="text" name="todo"
          // formの入力値をtmpTodoで持っておく
          onChange={e => setTmpTodo(e.target.value)}
          value={tmpTodo}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </>
  );
};

export default Home;
