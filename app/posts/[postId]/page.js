import PostsDetails from "@/app/components/postsDetails";
import { Suspense } from "react";
import Loading from "./loading";

export default async function postsDetails({ params }) {
  const postId = params.postId;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Posts Details</h1>

      <Suspense fallback= {<Loading />}> 
        <PostsDetails postId={postId} />
      </Suspense>
    </div>
  );
}
