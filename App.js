import "./App.css";
import Header from "./components/Header";
import Information from "./components/Information";
import 'bootstrap/dist/css/bootstrap.min.css';
import MayLike from "./components/MayLike";
import Profile from "./components/Profile";
import Hire from "./components/Hire";
import Display from "./components/Display";

function App() {
  return (
    <div className="App">
      <Header />
      <Display />
      <Information />
      <Hire />
      <Profile />
      <MayLike />
      
    
    
     
    </div>
  );
}

export default App;
