import logo from './logo.svg';
import './App.css';
import Coin from './coin/Coin';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      console.log(window.scrollY);
    })
  })
  return (
    <div>
      <Coin />
    </div>
  );
}

export default App;
