import React from "react";

export default function Button({title= '', className= '', disable}) {
  return (
    <button disabled={disable} className={`
    ${disable ? 'bg-[#afafaf]' : ' bg-[#dfdfdf] transition-all duration-1000 hover:delay-75 hover:bg-[#222221] group'}
    ${className}  px-6 overflow-hidden py-2 relative rounded-full`}>
      <h1 className={`text-black transition-all duration-500 group-hover:translate-y-[-150%]`}>
        {title}
      </h1>
      <h1 className="text-white z-[99] transition-all duration-500 absolute translate-y-[10%] group-hover:translate-y-[-100%]">
        {title}
      </h1>
      <div className="w-[20%] rounded-full transition-all duration-500 bg-[#222221]  absolute h-[30px] inset-0 translate-y-[140%] group-hover:translate-y-[-50%]"></div>
      <div className="w-[30%] rounded-full transition-all duration-500 bg-[#222221] left-[30px] absolute h-[30px]  inset-0 translate-y-[140%] group-hover:translate-y-[-50%]"></div>
      <div className="w-[30%] rounded-full transition-all duration-500 bg-[#222221] left-[80px] absolute h-[30px] inset-0 translate-y-[140%] group-hover:translate-y-[-50%]"></div>
      <div className="w-[30%] rounded-full transition-all duration-500 bg-[#222221] left-[136px] absolute h-[30px] inset-0 translate-y-[140%] group-hover:translate-y-[-50%]"></div>
      <div className="w-[160%] top-[-10px] h-[50px] left-[-5px] bg-[#222221] rounded-3xl transition-all duration-500 absolute  group-hover:translate-y-[0%] translate-y-[150%]"></div>
    </button>
  );
}
