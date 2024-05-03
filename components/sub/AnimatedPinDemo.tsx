"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";

interface Props {
    title : string ;
    href : string ;
    h2Text : string ;
    imagePath : string ;
    desc : string ;
}

export function AnimatedPinDemo({ title, href, h2Text, imagePath, desc }: Props) {
  return (
    <div className="h-[10rem] w-full flex items-center justify-center">
      <a href={href} target="_blank">
        <PinContainer title={title}>
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h2 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              {h2Text}
            </h2>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">{desc}</span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-2">
              <Image src={imagePath} className="object-contain w-full" alt="demo" />
            </div>
          </div>
        </PinContainer>
      </a>
    </div>
  );
}



// export function AnimatedPinDemo({ title, href, h2Text, imagePath , desc } : Props) {
//   return (
//     <div className="h-[10rem] w-full flex items-center justify-center">
//       <PinContainer title={title} href={href} >
        
//         <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
//           <h2 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
//             {h2Text}
//           </h2>
//           <div className="text-base !m-0 !p-0 font-normal">
//             <span className="text-slate-500">
//               {desc}
//             </span>
//           </div>
//           <div className="flex flex-1 w-full rounded-lg mt-2">
//             <img src={imagePath} className="object-contain w-full" />
//           </div>
//         </div>
//       </PinContainer>
//     </div>
//   );
// }
