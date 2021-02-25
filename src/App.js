import React from 'react';
import './App.css';
import Headers from './header';
import MyContext from './mycontext'


const products=[{
  id:1,name:'icecream'
},
{
  id:2,name:'sandwitch'
}]

function App() {
      
  return (
    <div className="App">
         <MyContext.Provider value={{prd:products}}>
          <Headers />
         </MyContext.Provider>
    </div>
  );
}



export default App;
