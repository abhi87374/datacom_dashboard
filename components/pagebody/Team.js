import React from 'react'
import { AiOutlinePhone, AiOutlineMessage } from "react-icons/ai";
import Image from 'next/image';
const Team = () => {
  const member=(name,imgUrl)=>{
     return (
       <div className="flex gap-4  w-full">
         <div className='rounded-full overflow-hidden w-11'>
            <Image

              src={imgUrl}
              alt="Picture of the author"
              width={50}
              height={50}
              className=""
            />

         </div>
         <div className='grow px-2'>
           <h3>{name}</h3>
         </div>
         <div >
           <AiOutlineMessage />
         </div>
         <div >
           <AiOutlinePhone />
         </div>
       </div>
     );
  }
  return (

    <div className="grid py-5 font-bold px-6 mt-6 rounded-3xl bg-yellow-200 dark:bg-yellow-950 w-max pr-10 ">
      <h3 className="w-full ">Team</h3>
      <div className="grid gap-2 mt-3 mr-5 py-2">
        {member('Rohan Srivastav','/rohan.jpeg')}
        {member('Piyush Joshi','/piyush.webp')}
        {member('Sreeja Maheshwari','/sreeja.jpg')}
        {member('Neha Trivedi','/neha.jpg')}
      </div>
      <button className="bg-black text-yellow-200 text-sm mt-4 p-2 px-8 w-max  rounded-full">
        Add Member
      </button>
    </div>
  );
}

export default Team
