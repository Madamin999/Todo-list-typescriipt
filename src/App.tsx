import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App flex justify-center items-center">
        <div className="mb-6">
            <label htmlFor="success" className="block my-7 text-5xl font-medium text-green-700 dark:text-green-500 ">TODO LIST</label>
           <div className="flex">
               <input type="text" id="success"
                      className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700
                   dark:placeholder-green-500 text-sm
                   rounded-lg focus:ring-green-500 focus:border-green-500 block  p-2.5 w-[500px]
                   dark:bg-gray-700 dark:border-green-500 mx-5"
                      placeholder="Success input"/>
               <button
                   className="text-white right-2.5 bottom-2.5 bg-green-900 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
               </button>
           </div>
                <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span
                    className="font-medium">Well done!</span> Some success messsage.</p>
        </div>
    </div>
  );
}

export default App;
