import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = async () => {
  const data = await fetch("https://api.imgflip.com/get_memes");
  const response = await data.json();
  console.log(response.data.memes);

  return (
    <>
      <h1 className="text-center text-4xl my-4 font-bold tracking-wider">Meme maker</h1>
      <div className="grid xl:grid-cols-12 md:grid-cols-9 sm:grid-cols-7 grid-cols-1 lg:gap-3 gap-6 px-4 flex-wrap">
        {response.data.memes.map((item) => {
          return (
            <div
              key={item.id}
              className="min-h-[30rem] md:col-span-4 lg:col-span-3 sm:col-span-3 col-span-1 mx-auto"
            >
              <div className="h-[90%]">
                <Image
                  className="border border-black rounded-lg w-full h-[90%] mb-1 overflow-hidden"
                  src={item.url}
                  width={item.width}
                  height={item.height}
                  alt={item.name}
                  priority={true}
                />
                <p>{item.name.slice(0, 20)}...</p>
              </div>

              <button className="bg-blue-400 h-10 w-full rounded-lg">
                Generate this meme
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
