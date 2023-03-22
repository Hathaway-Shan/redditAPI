import { usePosts } from '../../hooks/usePosts';
import PostCard from '../PostCard/PostCard';
import './Main.css';

export default function Main() {
  const { posts, error, loading } = usePosts();
  return (
    <div className="main">
      <span>{error.length === 0 ? <>{error}</> : <></>}</span>
      <span>{loading ? <h2>Loading...</h2> : <></>}</span>
      <div className="post-box">
        {posts.map((post) => (
          <PostCard key={post.data.id} {...post.data} />
        ))}
      </div>
    </div>
  );
}
