import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return response.data as Post[];
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
