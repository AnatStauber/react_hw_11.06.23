import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";
import Gallery from "./components/gallery";
import Colors from "./components/colors";

function App() {
 
    return (
      <div className="container">
        <h1 className='text-danger'>React</h1>
        <Counter />
        <br></br>
        <Gallery />
        <br></br>
        <Colors />
        </div>
  )
}

export default App;
