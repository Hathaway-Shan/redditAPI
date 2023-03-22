import { usePosts } from '../../hooks/usePosts';
import PostCard from '../PostCard/PostCard';
import './Main.css';

export default function Main() {
  const { posts, error, loading } = usePosts();
  return (
    <div className="main">
      <span>{error && <p className="error-message">{error}</p>}</span>
      <span>{loading && <h2 className="loading">Loading...</h2>}</span>
      <div className="post-box">
        {posts.map(({ data }) => (
          <PostCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}
