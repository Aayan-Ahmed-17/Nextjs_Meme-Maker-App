"use client";

import React, { useRef, useState } from "react";

const Creatememe = ({ searchParams }) => {
  const [img, setImg] = useState("");
  const { url, id } = React.use(searchParams);
  const text1 = useRef();
  const text2 = useRef();
  const text3 = useRef();
  

  // https://api.imgflip.com/caption_image?template_id=<memeId>&username=<imgflipusername>&password=<imgflippassword>&text0=<text1FromUser>&text1=<text2FromUser&gt
  const handleCreateMeme = async (event) => {
    event.preventDefault();
    console.log(text1?.current?.value);
    console.log(text2?.current?.value);

    const data = await fetch(
      `https://api.imgflip.com/caption_image?template_id=${id}&username=Aayan_Ahmed&password=ragosir383@lofiey.com123&text0=${text1.current?.value}&text1=${text2.current?.value}`,
      {
        method: "POST",
      }
    );
    const response = await data.json();
    console.log(response);
    setImg(response?.data?.url);
  };
  return (
    <>
      <div className="min-h-screen bg-green-100 grid grid-rows-8">
        {/* //* Header */}
        <div className="bg-cyan-900 grid items-center text-center text-4xl text-slate-100 font-bold tracking-wider row-span-1">
          Create Your Meme
        </div>

        {/* //* Main content */}
        <div className="row-span-7 grid grid-cols-5 place-items-center">
          <div className="col-span-2 border-black border-2 h-5/6 bg-cover">
            <img className="h-full w-full overflow-hidden bg-cover" src={url} alt="meme-image" />
          </div>

          <form onSubmit={handleCreateMeme} className="col-span-1 bg-green-600 flex flex-wrap gap-3 items-center h-1/3">
            <input type="text" placeholder="enter text 1" ref={text1} />
            <input type="text" placeholder="enter text 2" ref={text2} />
            <input type="text" placeholder="enter text 2" ref={text3} />
            <button type="submit">create meme</button>
          </form>
        </div>
      </div>

      {img && <img src={img} alt="final meme" />}
    </>
  );
};

// export default Creatememe;

// 'use client'
// import React, { useRef, useState } from 'react'
// import { useSearchParams } from 'next/navigation';

// const Creatememe = ({ searchParams }) => {
//     //   const [img, setImg] = useState("");
//       const { url , id} = React.use(searchParams);
//       const text1 = useRef();
//       const text2 = useRef();

//     // const searchParams = useSearchParams(); // Hook to access search parameters
//     // const url = searchParams.get('url'); // Replace 'url' with your query parameter key
//     // const id = searchParams.get('id'); // Replace 'url' with your query parameter key

//     React.useEffect(() => {
//         if (url && id) {
//           console.log(`URL Param: ${url}`);

//           console.log(`URL Param: ${id}`);
//           // Add your logic here
//         }
//       }, [url]);
// const [img,setImg]=  useState('')

// const generateMemes= async (e)=>{
//  e.preventDefault()
//     console.log(text1.current.value,text2.current.value)

// const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${id}&username=MuhammadHaris2&password=qureshi12&text0=${text1.current?.value}&text1=${text2.current?.value}` ,
//     {
//     method: 'POST'
// })
// const response = await data.json()
// console.log(response.data.url);
// setImg(response.data.url)

// }

//     return (
//         <div className=''>
//             <br />
//             <div className="card lg:card-side bg-base-100  my-5 m-auto  w-[60%] shadow-xl">
//                 <figure style={{ width: "40%" , }}>
//                     <img src={url}
//                         alt="Album" />
//                 </figure>
//                 <div className="card-body">
//                     <form action="" onSubmit={generateMemes} className='m-auto text-center '>
//                         <input type="text" placeholder="Enter your Memes Text? " ref={text1} className="input input-bordered m-2 w-full max-w-xs" />
//                         <input type="text" placeholder="Enter your Memes Text? " ref={text2} className="input input-bordered m-2 w-full max-w-xs" />
//                         <br />
//                         <button className="btn btn-neutral m-2" onClick={()=>document.getElementById('my_modal_1').showModal()}>Generate</button>

//                     </form>
//                 </div>
//             </div>

//             <p></p>

// <dialog id="my_modal_1" className="modal">
//   <div className="modal-box">
//  { img ? <img src={img}
//    alt="meme generated image" />  : <div className=' text-center'>
// <span className="loading loading-spinner loading-lg"></span>
//    </div>

//  }   <div className="modal-action">
//       <form method="dialog">
//         {/* if there is a button in form, it will close the modal */}
//         <button className="btn">Close</button>
//       </form>
//     </div>
//   </div>
// </dialog>
//         </div>
//     )

// }

export default Creatememe;
