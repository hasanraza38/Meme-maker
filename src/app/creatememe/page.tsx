"use client"

import Image from "next/image";
import React, { useRef, useState } from "react";

const CreateMeme = ({
  searchParams,
}: {
  searchParams: { id: string; url: string }
}) => {

const [meme,setMeme] = useState<string | null>(null)  
const text1 = useRef<HTMLInputElement>(null)
const text2 = useRef<HTMLInputElement>(null)


const sendAndRecieveDataToApi = async (event : React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
console.log(text1.current?.value)
console.log(text2.current?.value)

const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=mimi38&password=123&text0=Hey there&text1=hello world`);
  const res = await data.json();
}

  return (
    <>
<div className="mx-10">
     <h1 className="text-center text-4xl font-semibold mt-4">Create Meme </h1>
     <div className="flex justify-center items-center mt-5">
      <div className="flex flex-col justify-center items-center gap-5">
        <figure className="rounded-2xl overflow-hidden">
        <Image src={searchParams.url} width={500} height={300} alt="Meme Image"/>
        </figure>
          <form onSubmit={sendAndRecieveDataToApi}>
        <div className="w-[27rem] px-4 flex flex-col gap-2 justify-center items-center">
        <input ref={text1} type="text" placeholder="Type here" className="input input-bordered w-full" />
        <input ref={text2} type="text" placeholder="Type here" className="input input-bordered w-full" />
        <button className="btn" type="submit">Create</button>


        </div>
        </form>
      </div>

     </div>
<div className="mt-5">

        <h1 className="text-4xl font-semibold">Meme:</h1>
</div>

</div>
    </>
  )
};

export default CreateMeme;
