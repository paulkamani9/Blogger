import { getPostsMeta } from "@/lib/post";
import LIstItems from "@/app/components/LIstItems";
import Link from "next/link";

export const revalidate = 86400;

type Props = {
  params: {
    tag: string;
  };
};

export const generateStaticParams = async () => {
  const posts = await getPostsMeta();

  if (!posts) return [];

  const tags = new Set(posts.map((post) => post.tags).flat());

  return Array.from(tags).map((tag) => ({ tag }));
};

export const generateMetadata = ({ params: { tag } }: Props) => {
  return {
    title: `Posts about ${tag}`,
  };
};

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostsMeta(); // deduped

  if (!posts)
    return <p className="mt-10 text-center">Sorry, no posts found.</p>;

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">Sorry, no posts for that Keyword</p>
        <Link className="p-auto" href="/">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-3xl mt-4 mb-0">Results for: #{tag}</h2>
      <section className="mt-6 mx-auto max-w-2xl">
        <ul className="w-full list-none p-0">
          {tagPosts.map((post) => (
            <LIstItems key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
