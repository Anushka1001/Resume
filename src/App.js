import './App.css';
import SidePanel from "./components/SidePanel";
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <div className="container-fluid">
        <div className='row' >
          <div className='col-lg-3 bgBlack displaySetting1'><SidePanel /></div>
          <div className='col-lg-9 displaySetting2 pdright0 pdleft0'><Home /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
