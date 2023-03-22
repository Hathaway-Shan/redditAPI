export async function fetchPosts() {
  const response = await fetch(`https://www.reddit.com/r/business/new.json`);

  const data = await response.json();

  return data.children;
}
