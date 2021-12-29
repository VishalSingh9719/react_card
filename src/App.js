import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>React Project</h1>
    <Mobile />
    </div>
  );
}
function Mobile(){
  return (
    <div>
    <h2 >Mobile operating System</h2>
    <ul>
        <li>Blackberry</li>
        <li>Windows phone</li>
        <li>Android</li>
        <li>Iphone</li>
    </ul>
    <h2 >Mobile Manufacturers</h2>
    <ul>
        <li>samsung</li>
        <li>htc</li>
        <li>micromax</li>
        <li>Apple</li>
    </ul>
    
    </div>
  )
}

export default App;
