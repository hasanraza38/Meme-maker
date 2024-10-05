import React from "react";

const page = async () => {
  const data = await fetch("https://api.imgflip.com/get_memes");
  const res = await data.json();

  return (
    <>
      <div className="m-5">
        <h1 className="text-center text-3xl text-white font-semibold">
          Create Meme
        </h1>
      </div>
    </>
  );
};

export default page;
