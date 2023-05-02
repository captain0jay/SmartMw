import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard'
function App() {
  return (
    <>
    <Navbar/>
    {localStorage.getItem("access_tokenn")?
        <>
        <Dashboard/>
        </>
        :
        <>
        <Landing/>
        </>}
    </>
  );
}

export default App;
