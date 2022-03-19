
import './App.css';
import { Cardheader } from './Components/Cardheader/Cardheader';
import { Cards } from './Components/Cards/Cards';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cardheader />
      <Cards />
    </div>
  );
}

export default App;
