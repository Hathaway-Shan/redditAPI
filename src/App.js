import './App.css';
import Main from './components/Main/Main';
import SubHeader from './components/SubHeader/SubHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SubHeader />
        <Main />
      </header>
    </div>
  );
}

export default App;
