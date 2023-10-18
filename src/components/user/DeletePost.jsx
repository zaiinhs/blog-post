import { AiOutlineDelete } from "react-icons/ai";

const DeletePost = ({ posts, allPost, setAllPost }) => {
  
  const handleDelete = async (id) => {
    try {
      const URL = `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`;
      const res = await fetch(URL, {
        method: "DELETE",
        headers: {
          Authorization:
          `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          "Content-Type": "application/json",
        },
      });
      
      setAllPost(posts.filter((post) => post.id !== id));
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10">
      {allPost.map((post) => (
        <div className="mb-10 md:text-justify" key={post.id}>
          <h1 className="mb-3 md:mb-5 text-xl  md:text-2xl font-bold text-slate-700">
            {post.title}
          </h1>
          <p>{post.body}</p>
          <div
            onClick={() => handleDelete(post.id)}
            className="flex items-center gap-1 ring-2 ring-red-600 w-[105px] px-3 rounded-md mt-4 h-8 hover:bg-red-500 hover:text-gray-50 hover:cursor-pointer"
          >
            <AiOutlineDelete size={23} />
            <p className="text-base font-bold text-slate-700 hover:text-gray-50">
              Delete
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeletePost;
