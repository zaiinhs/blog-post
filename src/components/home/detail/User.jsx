const User = ({ user }) => {
  return (
    <>
      {user ? (
        <span className=" text-slate-800 underline underline-offset-8">
          Created by <span className="font-bold">{user?.name}</span>
        </span>
      ) : (
        <span className=" text-slate-800 underline underline-offset-8">
          Author <span className="font-bold">@anonymous</span>
        </span>
      )}
    </>
  );
};

export default User;
