import Image from "next/image";
import Link from "next/link";
import React from "react";

interface memes {
  id: string;
  url: string;
  name: string;
}
const page = async () => {
  const data = await fetch("https://api.imgflip.com/get_memes");
  const res = await data.json();
  console.log(res.data.memes);

  return (
    <>
      <h1 className=" mt-5 text-center text-2xl font-semibold text-white">
        Choose Meme Template
      </h1>
      <div className="">
        <div className="flex justify-center items-center gap-7 flex-wrap mt-5">
          {res.data.memes.map((item: memes) => {
            return (
              <>
                <div className="flex justify-center items-center flex-col card bg-zinc-800 shadow-zinc-600 shadow-lg p-8">
                  <h2 className="card-title mb-5">{item.name}</h2>
                  <figure>
                    <Link href={"creatememe"}>
                      <Image
                        key={item.id}
                        src={item.url}
                        width={200}
                        height={300}
                        alt="meme template"
                      />
                    </Link>
                  </figure>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
