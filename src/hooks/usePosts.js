import { useEffect, useState } from 'react';
import { fetchPosts } from '../services/reddit';

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetchPosts();
        setPosts(response.data.children);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return { posts, error, loading };
}
