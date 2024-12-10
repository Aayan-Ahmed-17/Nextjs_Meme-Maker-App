import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = async () => {
  const data = await fetch("https://api.imgflip.com/get_memes");
  const response = await data.json();
  // console.log();

  return (
    <>
      <h1 className="h-20 bg-cyan-900 grid items-center text-center text-4xl text-slate-100 font-bold tracking-wider mb-4 fixed top-0 w-full">
        Meme maker
      </h1>
      <div className="grid xl:grid-cols-12 md:grid-cols-9 sm:grid-cols-7 grid-cols-1 lg:gap-3 gap-6 px-4 flex-wrap mt-20 pt-5 bg-green-100">
        {response.data.memes.map((item) => {
          return (
            <div
              key={item.id}
              className="min-h-[30rem] md:col-span-4 lg:col-span-3 sm:col-span-3 col-span-1 mx-auto"
            >
              <div className="h-[90%]">
                <Image
                  className="border border-black rounded-lg w-full h-[92%] mb-1 overflow-hidden"
                  src={item.url}
                  width={item.width}
                  height={item.height}
                  alt={item.name}
                  priority={true}
                />
                <p>{item.name.slice(0, 20)}...</p>
              </div>

              <Link
                href={{
                  pathname: "creatememe",
                  query: {
                    url: item.url,
                    id: item.id,
                  },
                }}
              >
                <button className="bg-blue-700 h-10 w-full rounded-lg tracking-wide text-lg text-slate-50">
                  Generate this meme
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
