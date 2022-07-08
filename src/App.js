// import './App.css';
import Navbar from './components/Navbar'
import User from './components/User'

function App() {
  return (
    <div className="App">
     <Navbar title="React App"/>


     <User
     name = "Aygun Salimova"
     age = "21"
     salary = "2000$"
     
     />

    <User
     name = "Mustafa Murat Coshkun"
     age = "31"
     salary = "5000$"
     
     />

    </div>
  );
}

export default App;
