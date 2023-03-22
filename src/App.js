import './App.css';
import Main from './components/Main/Main';
// import { fetchPosts } from './services/reddit';
import SubHeader from './components/SubHeader/SubHeader';
// import PostCards from './components/PostCard/PostCards';

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
