import { AllList, Jumbotron, ListPosts, ListUsers } from "@/components";
import Head from "next/head";

export default function Home({ posts, users }) {
  return (
    <>
      <Head>
        <title>Synapsis | by @zaiinhs.</title>
        <meta name="description" content="website ini untuk keperluan test teknikal frontend engineer intern di synapsis.id" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <Jumbotron />

      <div className="hidden md:flex justify-center">
        <ListPosts posts={posts} />
        <ListUsers users={users} />
      </div>

      <div className="md:hidden">
        <AllList posts={posts} users={users} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log(context.resolvedUrl);
  try {
    const resPosts = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`, {
      headers: {
        Authorization:
          `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          "Content-Type": "application/json",
      },
    });
    const dataPosts = await resPosts.json();

    const resUsers = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, {
      headers: {
        Authorization:
        `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          "Content-Type": "application/json",
      },
    });
    const dataUsers = await resUsers.json();
    return { props: { posts: dataPosts, users: dataUsers } };
  } catch (error) {
    console.log(error);
  }
}
