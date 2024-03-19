export default async function PostsDetails({ postId }) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const posts = await response.json();
  return (
    <div>
      <div
        style={{
          width: "70%",
          margin: "auto",
          padding: "20px",
          color: "black",
          background: "white",
          marginTop: "20px",
          borderRadius: "20px",
        }}
      >
        <h2>{posts.title}</h2>
        <hr />
        <p>{posts.body}</p>
      </div>
    </div>
  );
}
