import Image from "next/image";
import Link from "next/link";
import React from "react";

interface memes {
  id: string;
  url: string;
  name: string;
  box_count : number
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
                <div 
                    key={item.id}
                className=" transition-all flex justify-center items-center flex-col card bg-zinc-800 shadow-zinc-600 shadow-lg p-8 hover:bg-zinc-900 ">
                  <h2 className="card-title mb-5">{item.name}</h2>
                  <figure>
                    <Image
                      src={item.url}
                      width={200}
                      height={300}
                      alt="meme template"
                      />
                      </figure>
                    <Link href={{
                      pathname: 'creatememe',
                      query : {
                        url : item.url,
                        id : item.id,
                        textField : item.box_count
                        
                      }
                     
                    }}>
                      <button className="mt-3 btn btn-sm hover:bg-zinc-800" >Genrate Meme</button>
                    </Link>
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
