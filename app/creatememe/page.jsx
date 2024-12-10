"use client";

import React, { useRef, useState } from "react";

const Creatememe = ({ searchParams }) => {
  const [img, setImg] = useState("");
  const { url, id } = React.use(searchParams);
  const text1 = useRef();
  const text2 = useRef();

  const handleCreateMeme = async (event) => {
    event.preventDefault();
    // console.log(text1?.current?.value);
    // console.log(text2?.current?.value);

    const data = await fetch(
      `https://api.imgflip.com/caption_image?template_id=${id}&username=Aayan_Ahmed&password=ragosir383@lofiey.com123&text0=${text1.current?.value}&text1=${text2.current?.value}`,
      {
        method: "POST",
      }
    );
    const response = await data.json();
    // console.log(response);
    setImg(response?.data?.url);
  };
 

  return (
    <>
      <div className="min-h-screen bg-green-100 grid grid-cols-4 ">
        {/* //* Header */}
        <div className="bg-cyan-900 grid items-center text-center text-4xl text-slate-100 font-bold tracking-wider fixed top-0 w-full h-16">
          Create Your Meme
        </div>

        {/* //* Main content */}
        <div className="h-4/5 col-span-2 grid grid-cols-5 gap-4 mt-20 px-4 border-black border-2 mx-5 py-4">
          <div className="col-span-3 h-[99%] bg-cover rounded-lg">
            <img
              className="h-full w-full overflow-hidden bg-cover rounded-lg border border-black"
              src={url}
              alt="meme-image"
            />
          </div>

          <form
            onSubmit={handleCreateMeme}
            className="col-span-2 flex flex-wrap gap-1 items-center h-1/3 place-self-center"
          >
            <input
              type="text"
              placeholder="enter text 1"
              ref={text1}
              className="text-lg px-3 py-1 border border-black"
            />
            <input
              type="text"
              placeholder="enter text 2"
              ref={text2}
              className="text-lg px-3 py-1 border border-black"
            />
            <button
              type="submit"
              className="text-lg px-5 py-2 bg-blue-700 text-slate-100"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              create meme
            </button>
          </form>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal overflow-hidden w-[80rem]">
        <div className="modal-box pb-6 w-full">
          {img ? (
            <img src={img} alt="final image" className="w-full"/>
          ) : (
            <div className=" text-center w-full">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          )}{" "}
          <div className="modal-action">
            <form method="dialog"  className="-mt-3">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" type="submit">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Creatememe;
