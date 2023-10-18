import { DetailPost } from "@/components";

const Detail = ({ post, user, comment }) => {
  return <DetailPost post={post} user={user} comment={comment} />;
};

export default Detail;

export async function getStaticPaths() {
  const resPosts = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`, {
    headers: {
      Authorization:
        `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        "Content-Type": "application/json",
    },
  });
  const dataPosts = await resPosts.json();

  const allPaths = dataPosts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  const resPosts = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`, {
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
  const UserPost = dataUsers.find((user) => dataPosts.user_id === user.id);

  const resComments = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comments`);
  const dataComments = await resComments.json();
  const ComemntPost = dataComments.find(
    (comment) => dataPosts.id === comment.post_id
  );

  return {
    props: {
      post: dataPosts,
      user: UserPost || null,
      comment: ComemntPost || null,
    },
  };
}
