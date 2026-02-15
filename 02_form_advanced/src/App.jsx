import React from 'react'
import './App.css'
import SimpleForm from './components/SimpleForm';
import AdvancedForm from './components/AdvancedForm';
const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white flex items-center justify-center' >
      {/* <SimpleForm/> */}
      <AdvancedForm/>
    </div>
  );
}

export default App