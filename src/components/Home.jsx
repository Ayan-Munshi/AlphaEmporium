import React from "react";

function Home() {
  return (
    <div id="main body" className="max-w-[1500px] ml-[70px] mr-[70px]">
      <img
        src="https://png.pngtree.com/background/20231101/original/pngtree-d-illustration-of-an-online-shopping-theme-in-shades-of-blue-picture-image_5839942.jpg"
        alt=""
        className="w-[100%]  filter blur-sm "
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />
    </div>
  );
}

export default Home;
