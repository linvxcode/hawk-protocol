
  const Breakline = ({ className = '', ...others }) => {
    return (
      <div
        className={`border-t border-[#3d3d3db7] w-full  ${className}`}
        {...others}
      ></div>
    );
  };
  
  export default Breakline;
  