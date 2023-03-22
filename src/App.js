import './App.css';
// import { fetchPosts } from './services/reddit';
import SubHeader from './components/SubHeader/SubHeader';
// import PostCards from './components/PostCard/PostCards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SubHeader />
        <div className="posts"></div>
      </header>
    </div>
  );
}

export default App;
