import { MdOutlinePersonPinCircle } from "react-icons/md";

const Jumbotron = () => {
  return (
    <div className=" md:px-28 text-slate-700 md:py-10 px-3 py-8 md:pb-24">
      <div className=" mt-8 md:mt-5">
        <p className="font-semibold text-lg text-justify">
        Build using JavaScript with the NEXT.js Framework and styling Framework using Tailwind CSS.
        </p>
        <div className="flex text-sky-600 items-center gap-2 py-4 md:py-0 font-semibold">
          <MdOutlinePersonPinCircle />
          <p className="underline underline-offset-4">
            <a href="https://www.linkedin.com/in/zaiinhs">
              Zainal Abidin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
