import './App.css';
import SidePanel from "./components/SidePanel";
import Home from './components/Home';

function App() {
  return (
      <div className="container-fluid">
        <div className='row width-fit-content'>
          <div className='col-xxl-3 col-xl-3 col-lg-3 bgBlack displaySetting1'><SidePanel /></div>
          <div className='col-xxl-9 col-xl-9 col-lg-9 displaySetting2 pdright0 pdleft0'><Home /></div>
        </div>
      </div>
  );
}

export default App;
