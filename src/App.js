import {useState} from 'react'
import './index.css';
import Square from './Square';
import Box from './Box';
function App() {
  // const [item,setItem]=useState("");
  const [clr,setClr]=useState("");
  const [hexValue,setHexValue]=useState("");
  const [isDarkClr,setIsDarkClr]=useState(false);
  const toggle=()=>{
    setIsDarkClr(!isDarkClr);
  }
  // const [items,setItems]=useState([]);
  
  // useEffect(() => {
  // console.log("mounted & item value changed");
  // console.log(item);
  //   return () => {
  //     console.log("unmounted useEffect");
  //   }
  // ))
  
  // console.log("render");
  // console.log(`${item}`);
 

  // const setValue=()=>{
  //   const it={name:item,id:items.length === 0 ? 1 :items[items.length-1].id+1,
  //     checked:false
  //   };
  //   setItems([...items,it]);   
  // }
  // const handleChange =(e)=>{
  //   setItem(e.target.value);
  // }
      // {/* <header>
      //   <h1>{item}</h1>
      //   <input type="text" onChange={handleChange} />
      //   <button onClick={()=>setValue()}>Add_Task</button>
      // </header>
      // <div>
      //   {
      //   items.map((ite)=>( 
      //     <h1 key={ite.id}>{ite.name}</h1>
      //   ))
      //   }
      // </div> */}
      // var bgColors = { "Default": "#81b71a",
      //               "color": {clr} };
      // const bgColor={clr};

  return (
    <div className="App">
      <Square clr={clr} hexValue={hexValue} isDarkClr={isDarkClr}/>
      <Box clr={clr} setClr={setClr} isDarkClr={isDarkClr} toggle={toggle} setHexValue={setHexValue}/>
    </div>
  );
}

export default App;
