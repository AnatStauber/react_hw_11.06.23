import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";
import Gallery from "./components/gallery";

function App() {
 
    return (
      <div className="container">
        <h1 className='text-danger'>React</h1>
        <Counter />
        <br></br>
        <Gallery />
        </div>
  )
}

export default App;
