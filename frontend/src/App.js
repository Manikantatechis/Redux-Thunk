import logo from './logo.svg';
import './App.css';
import Routers from './Router'
import Home from "./containers/Landing";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/Signup";

function App() {
  return (
    <div className="App">
				<Routers />
      {/* <Home /> */}
    </div>
  );
}

export default App;
