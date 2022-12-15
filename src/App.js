import './App.css';
import { Todolist } from './Todolist';
import todolistpict from './todolist.jpg';

function App() {
  return (
      <div className='app'>
        <div className='container'>
        <img src={todolistpict} alt="todopicture"/>  
        </div>
        <Todolist/>      
    </div>
  );
}

export default App;
