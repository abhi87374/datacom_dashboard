import React from "react";
import { useState } from "react";
const Todo = () => {
  const [todos, setTodos] = useState({
    todo1: false,
    todo2: false,
    todo3: false,
  });

  function checkboxHandler(e) {
    if (e.target.checked) {
        setTodos({ ...todos, [e.target.name]: true });
        }
        else {
            setTodos({ ...todos, [e.target.name]: false });
        }

  }
  console.log(todos);
  return (
    <div className="grid py-5 font-bold px-6 mt-6 rounded-3xl bg-yellow-200 dark:bg-yellow-950 w-max  ">
      <h3 className="w-full ">To-Do</h3>
      <div className="grid gap-2 mt-3 mr-5">
        <label className="flex gap-2 items-center hover:scale-110 transition duration-300  border-amber-300 rounded-full w-full hover:shadow-2xl cursor-pointer dark:border-1 hover:text-black hover:bg-yellow-300">
          <input
            type="checkbox"
            name="todo1"
            onChange={checkboxHandler}

            className="bg-gray-200 accent-black ml-2 rounded-full p-2"
          />
          <span className="mx-2 text-sm">Call Rohan</span>
        </label>
        <label className="flex gap-2 items-center hover:scale-110 transition duration-300  border-amber-300 rounded-full w-full hover:shadow-2xl cursor-pointer dark:border-1 hover:text-black hover:bg-yellow-300">
          <input
            type="checkbox"
            name="todo2"
            className="bg-gray-200 accent-black ml-2 rounded-full p-2"
            onChange={checkboxHandler}

          />
          <span className="mx-2 text-sm">Meeting at 7pm</span>
        </label>
        <label className="flex gap-2 items-center hover:scale-110 transition duration-300  border-amber-300 rounded-full w-full hover:shadow-2xl cursor-pointer dark:border-1 hover:text-black hover:bg-yellow-300">
          <input
            type="checkbox"

            name="todo3"
            className="bg-gray-200 accent-black ml-2 rounded-full p-2"
            onChange={checkboxHandler}
          />
          <span className="mx-2 text-sm">Fix navbar bug issues</span>
        </label>
      </div>
      <button className="bg-black text-yellow-200 text-sm mt-4 p-2 px-8 w-max  rounded-full">
        ADD TASK
      </button>
    </div>
  );
};

export default Todo;
