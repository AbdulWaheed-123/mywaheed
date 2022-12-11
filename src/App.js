import './App.css';
import SubComponent from './component/SubComponent';
function App() {
    return (
    <div>
     <div  className="app-container"> 
       <h2> Hello World</h2>
       <p>My app component</p>
    </div>   
   
    <SubComponent></SubComponent>
    </div>
    );
}
export default App;