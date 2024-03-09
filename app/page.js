"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  let [mainTask, setMainTask] = useState([]);
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) alert("No fields can be Empty!");
    else {
      setMainTask([...mainTask, { title, desc }]);
      console.log(mainTask);
      settitle("");
      setdesc("");
    }
  };
  let renderTask = <h2 className='text-black'>No Task Available....</h2>;
  const erase = (e) => {
    e.preventDefault();
    if (mainTask.length === 0) alert("List is already empty");
    setMainTask([]);
  };
  const eraseIt = (i) => {
    let copy = [...mainTask];
    copy.splice(i,1);
    setMainTask(copy);
  }
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <>
        <div key={i} className="text-black flex justify-between items-center mt-2 mb-2">
          <h4 className="font-semibold text-start text-2xl break-words w-1/4">{t.title}</h4>
          <h5 className="font-medium text-center text-xl break-words w-1/4">{t.desc}</h5>
          <div className='w-1/4 flex justify-center'><button onClick={()=>{eraseIt(i)}} className = 'rounded-xl hover:bg-red-600 px-4 py-1 font-bold bg-red-500 text-white'>Delete</button></div>
        </div>
        <hr className='mt-3 border-black'/>
        </>
      );
    });
  }
  return (
    <>
      <h1 className="top text-black p-10 font-serif w-screen text-4xl font-bold flex justify-center text-center">
        <div className='newTop'>My To-do List</div>
      </h1>
      <hr />
      <div className='container mt-4 flex justify-start items-center'>
      <form className="k flex ml-28 flex-col w-96 bg-white mt-4 rounded">
        <input
          type="text"
          value={title}
          onChange={(t) => {
            settitle(t.target.value);
          }}
          placeholder="Enter Title"
          name="task"
          className="text-center rounded border border-zinc-600 m-3 p-2"
        />
        <input
          type="text"
          value={desc}
          onChange={(d) => {
            setdesc(d.target.value);
          }}
          placeholder="Enter Description"
          name="task"
          className="text-center rounded border border-zinc-600 m-3 p-2"
        />
        <button
          onClick={submit}
          className="rounded w-1/2 m-3 p-2 ml-auto mr-auto hover:bg-teal-600 bg-teal-500 text-white"
        >
          Add Task
        </button>
        <button
          onClick={erase}
          className="rounded w-1/2 m-3 p-2 ml-auto mr-auto hover:bg-red-600 bg-red-500 text-white"
        >
          Clear List
        </button>
      </form>
      </div>
      <div className="bottom p-8 rounded m-auto w-11/12 font-bold mt-8">
        <div className="flex justify-between items-center">
          <h2 className="h w-1/3 text-3xl font-bold flex justify-start text-black">Title</h2>
          <h2 className="h y w-1/3 text-3xl font-bold flex justify-center text-black">Description</h2>
          <h2 className='w-1/3 flex justify-center'></h2>
        </div>
        <hr className="border-black mb-4 mt-5"/>
        {renderTask}
      </div>
    </>
  );
};

export default page;
