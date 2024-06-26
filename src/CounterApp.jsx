import {useState} from 'react';


export const CounterApp = () => {
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState('black');
    const getRandomColor = () => {
        const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
        return colors[Math.floor(Math.random() * colors.length)];
    };
    const handleAdd = () => {
            setCounter(counter + 1);
            setColor(getRandomColor());
        }
    const handleSustrac = () =>{
            setCounter(counter - 1);
            setColor(getRandomColor());
        }
    const handleReset = () => {
            setCounter(0);
            setColor(getRandomColor());
        }
  return (
    <div>
      <h1>Contador</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd} style={{background: color, color: 'white'}}>+1</button>
      <button onClick={handleSustrac} style={{background: color, color: 'white'}}>-1</button>
      <button onClick={handleReset} style={{background: color, color: 'white'}}>reiniciar</button>
    </div>
  )
}

export default CounterApp
