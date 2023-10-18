import { useState } from "react";
import { Form, ListPostUpdate } from "../index";

const UpdatePage = ({ users, setAllPost, allPost }) => {
  const [formUpdate, setFormUpdate] = useState(false);
  const [id, setId] = useState(0);
  const [user, setUser] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  
  const checkUser = users.find((usr) => usr.id === user);

  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`;

  const Update = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(URL, {
        method: "PUT",
        body: JSON.stringify({
          user_id: user,
          title,
          body,
        }),
        headers: {
          Authorization:
            `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          "Content-Type": "application/json",
        },
      });

      const resPosts = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`, {
        headers: {
          Authorization:
            `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          "Content-Type": "application/json",
        },
      });
      const dataPosts = await resPosts.json();
      setAllPost(dataPosts);

      setFormUpdate(false);
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10">
      {formUpdate ? (
        <Form
          Update={Update}
          checkUser={checkUser}
          users={users}
          title={title}
          setTitle={setTitle}
          setUser={setUser}
          body={body}
          setBody={setBody}
        />
      ) : (
        <ListPostUpdate
          allPost={allPost}
          setFormUpdate={setFormUpdate}
          setId={setId}
          setUser={setUser}
          setBody={setBody}
          setTitle={setTitle}
        />
      )}
    </div>
  );
};

export default UpdatePage;
