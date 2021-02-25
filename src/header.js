import React,{useContext} from 'react';
import MyContext from './mycontext'

function Headers(){
    const prd = useContext(MyContext);
    return(
        <div>
         <h1>Products</h1>
         <ul>
         {
            //console.log(JSON.stringify(prd.prd))
                (prd.prd).map((x,index)=>{
                    return <li key={index}>{x.name}</li>
                })


        }
        </ul>
        </div>
    )
  }

  export default Headers