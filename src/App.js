import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
const nayoks = ['Janwar', 'badrul','jahrul', 'boda', 'sabbir', 'shovo', 'samim']

  const products = [{name:'Photoshop', price:'$90.09'},
                    {name:'Illustrator', price:'$60.00'},
                    {name:'PDF Reader', price:'$50.09'},
                    {name:'Boom', price:'$60.09'}
]
const nayoksName=nayoks.map (nayok => nayok)



  return (
    <div className="App">
      <header className="App-header">

    <Users></Users>



      <Counter></Counter>

      {
        products.map(pd => <Product something={pd}></Product>)
      }
      
     
       
       <ul>
         {
           nayoks.map(nayok => <li>{nayok}</li>)
         }
         {
           products.map(product => <li>{product.name}</li>)
         }
          <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li>       
        </ul>
       
        
      </header> 

      
    </div>
  );
}
function Users() {
const [users,setUsers] = useState([])
useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/users`)
  .then(res => res.json())
  .then(data=>setUsers(data))
}, [])

  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      {
        console.log(users)
      }
      <ul>{
          users.map (user => <li>{user.name}</li>)
          }
      </ul>
    </div>
  )
}


function Counter() {
const [count, setCount] = useState(0)
const handleIncrease = ()=> setCount(count + 1)
const handleDecrease = ()=> setCount(count - 1)
  


  return (
    <div>
      <h1>Count : {count}</h1>
      
      <button onMouseMove={handleIncrease}>increase</button>

      <button onMouseMove={handleDecrease}>decrease</button>
    </div>
  )
}



function Product(props) {
  const ProductStyle = {
    border:'2px solid red',
    borderRadius:'20px',
    width:'250px',
    backgroundColor:'gray',
    margin:'10px',
    padding:'10px',
    flex:'left'
    
  }
  console.log(props);
  return(
    <div style={ProductStyle}>
      <h3>{props.something?.name}</h3>
      <h5>{props.something?.price}</h5>     
      <button>Buy Now</button>
    </div>
  )
}




function Person(props) {
  return (
    <div style={{border: '2px solid gold',width:'400px'}}>
      <h3>My name: {props.name} </h3>
      <p>My profession: {props.prfession}</p>
    </div>
  )
}
export default App;
