// ========== App
// import all packages
import { useState } from 'react'
import Button from './components/Button';


function App() {

  const [counter, setCounter] = useState(0);

  const handleCounter = (action) => {
    switch(action) {
      case 'Increment' : 
        setCounter((value) => value + 1);
      break;

      case 'Decrement' : 
        setCounter((value) => value - 1);
      break

      case 'Reset' : 
        setCounter(0);
      break;

      default :
    }
  }

  const style = {
    margin: '0 15px'
  }

  const members = ['Sowon', 'Yerin', 'Eunha', 'Yuju', 'Sin B', 'Umji'];

  return (
    <div>
      <h1>Belajar React Js dengan WPU</h1>

      <ol>
        {
          members.map((member) => (
            <li key={member}>
              {member}
            </li>
          ))
        }
      </ol>
      
      <Button disabled={counter < 0} onClick={() => handleCounter('Decrement')}>
        -
      </Button>

      <span style={style}>{(counter < 0 || counter >= 10) ? 'done!' : counter}</span>

      <Button disabled={counter >= 10} onClick={() => handleCounter('Increment')}>
        +
      </Button>

      <Button disabled={counter === 0} style={{textAlign: 'center', marginLeft: 15, marginTop: 15, display: 'block'}} onClick={() => handleCounter('Reset')}>
        Reset
      </Button>
    </div>
  )
}

export default App
