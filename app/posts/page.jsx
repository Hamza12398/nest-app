import Link from "next/link";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts",
    {
      next: {
        revalidate: 120,
      }
    }
  );
  const posts = await response.json();
  const postsJSX = posts.map((post) => {
    return (
      <>
        <Link href={`/posts/${post.id}`}>
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
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        </Link>
      </>
    );
  });

  return (
    <>
      <div>
        <h1>Posts</h1>
        <div
          style={{
            marginLeft: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {postsJSX}
        </div>
      </div>
    </>
  );
}
