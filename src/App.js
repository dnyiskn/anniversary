import './App.css';
import newImg from '../src/image/IMG-4422.png'
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>55 Years</h1>
         
      <img src={newImg} alt="Works only on Computer"/>
      
        <div>
          <ul className='instructions'><li><h2>Computer only</h2></li>
          <li>Click " <em>Download</em> "</li>
          <li>Click " <em>Download Anway</em> "</li>
          <li>Wait for Download to begin</li></ul>
        </div>
        <button>
          <a href="https://drive.google.com/uc?export=download&id=1fDiK41VicGfSCYS_eAj_muuGhDvLhgeh" download="anniversary">Download</a>
        </button>
      </div>
      </div>
  );
}

export default App;
// https://drive.google.com/file/d/1Mr_bvVo52_Al6Et_skOmcLsADEBPKiEu/view?usp=sharing
// https://drive.google.com/file/d/1Mr_bvVo52_Al6Et_skOmcLsADEBPKiEu/view