import Link from "next/link";
import React from "react";

export default function PostsPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Posts</h1>
        <Link href={"/articles"}>
          <button style={{ marginLeft: "50px" }}>Click Here</button>
        </Link>
      </div>
    </>
  );
}
