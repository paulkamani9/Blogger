import { getPostsMeta } from "@/lib/post";
import LIstItems from "./LIstItems";

const Posts = async () => {
  const posts = await getPostsMeta();

  if(!posts){
return <p className="mt-10 text-center">Sorry, no posts available</p>
  }
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold text-white/90">Blog</h2>
      <ul className="w-full list-none p-0">{posts.map((post) => <LIstItems post = {post} key={post.id}/>)}</ul>
    </section>
  );
};
export default Posts;
