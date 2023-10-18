import { UserPage } from "@/components";

const User = ({ users, posts }) => {
  return <UserPage users={users} posts={posts} />;
};

export default User;

export async function getServerSideProps() {
  const resUsers = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, {
    headers: {
      Authorization:
        `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        "Content-Type": "application/json",
    },
  });
  const dataUsers = await resUsers.json();

  const resPosts = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`, {
    headers: {
      Authorization:
        `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        "Content-Type": "application/json",
    },
  });
  const dataPosts = await resPosts.json();

  return {
    props: { users: dataUsers, posts: dataPosts },
  };
}
