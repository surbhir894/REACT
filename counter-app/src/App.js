import React,{useState ,useEffect} from 'react';
import './App.css';

function App(){
  const[count ,setCount] = useState(()=>{
    const savedCount = localStorage.getItem('count');
    return savedCount ? JSON.parse(savedCount):0;

  });

  useEffect(()=>{
    localStorage.setItem('count' ,JSON.stringify(count));

  }, [count]);

  const increment = ()=>{
    setCount(count+1);
  };

  const decrement =()=>{
    if(count>0){
    setCount(count-1);
    }
  };

  const reset =()=>{
    setCount(0);
  };

  const double =()=>{
    setCount(count *2);
  }
  const half =()=>{
    setCount(Math.floor(count/2));

  };

  const getColor =()=>
  {
    if(count>10) return 'green';
    if(count<10) return 'red';
    return 'black';
  };


  return(
    <div style={{ textAlign:'center', marginTop:'50PX'}}>
    <h1> Counter App</h1>
    <h2 style={{color:getColor()}}> {count}</h2>
    <button onClick={increment} style={{ margin:'10px' ,padding:'10px 20px'}}>Increment</button>
    <button onClick={decrement}  style={{ margin:'10px' ,padding:'10px 20px'}}> Decrement</button> 
    <button onClick={reset}style={{ margin:'10px' ,padding:'10px 20px'}}>Reset</button>
    <button onClick={double}style={{ margin:'10px' ,padding:'10px 20px'}}>Double</button>
    <button onClick={half} style={{margin:'10px', padding:'10px 20px'}}>Half</button>
    
    </div>  );
}
export default App;
