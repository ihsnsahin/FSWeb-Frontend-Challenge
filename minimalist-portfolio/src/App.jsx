import { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const notify = () => toast('Wow so easy !');

  return (
    <>
      <h1 class="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <div className="grid place-items-center h-dvh bg-zinc-900/15">
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
