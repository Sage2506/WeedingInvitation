import castle from './assets/disney_castle.png';
import './App.css';
//<img src={castle} className="App-logo" alt="logo" />
/*<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
></a>*/

function App() {
  return (
    <div className="App">
      <div class="castle-container">
        <img class="middle zoom-animation " src={castle} alt="Castle" />
        <div class="middle">
          <p class="castle-text">Texto de invitacion</p>
        </div>
      </div>
    </div>
  );
}

export default App;
