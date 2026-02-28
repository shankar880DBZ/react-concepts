import React from 'react'
import SearchFilter from './components/SearchFilter';
import ToDoList from './components/ToDoList';
const App = () => {
  return (
    <div className='text-white w-full bg-zinc-900  ' >
      {/* <SearchFilter/> */}
      <ToDoList/>
    </div>
  );
}

export default App