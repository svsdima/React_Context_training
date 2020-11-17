import './App.css';
import Wrapper from './Components/Wrapper';
import MyContext from './Components/Context';

function App() {
  return (
    <div className="App">
      <MyContext.Provider value={{
        name: 'Дмитрий',
        age: 25
      }}>
        <Wrapper/>
      </MyContext.Provider>


      
    </div>
  );
}

export default App;
