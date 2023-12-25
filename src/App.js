import { useState } from 'react';
import './App.css';
import ToduList from './ToduList';
import ToduForm from './ToduForm';
import ToduForer from './ToduForer';

function App() {
  const [todus,setTodus]= useState([
    {
      id:Math.random(),
      text:"Js",
      isComplete:false

    },
    {
      id:Math.random(),
      text:"CSS",
      isComplete:false

    },
    {
      id:Math.random(),
      text:"HTML",
      isComplete:false

    },
  ])
  return (
    <div className="App">
      <ToduForm onAdd={(text)=>{
        setTodus([
          ...todus,
          {
            id: Math.random(),
            text:text,
            isCompleted:false,
          }
        ])
      }}/>
      <ToduList 
      todus={todus}
      onDelet={(todu)=>{
      setTodus(todus.filter((t)=>t.id !== todu.id))
      }}
      onChange={(newTodu)=>{
       setTodus( todus.map((todu)=>{
          if (todu.id === newTodu.id) {
            return newTodu
          }
          return todu
        }))
      }}
      />
      <ToduForer todus={todus}  isCom={()=>{
        setTodus(todus.filter((todu)=> !todu.isComplete))
      }} />
    </div>
  );
}

export default App;
