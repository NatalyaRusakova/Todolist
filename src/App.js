import './App.css';
import { Todolist } from './Todolist';
import todolistpict from './todolist.jpg';

function App() {
  return (
      <div className='app'>
        <div className='container'>
        <img src={todolistpict} alt="todopicture"/>  
        </div>
        <div className="container">
          <h1>To do list</h1>
        </div>
        <Todolist/>      
    </div>
  );
}

export default App;
