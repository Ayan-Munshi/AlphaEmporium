import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div
      id="main body"
      className="max-w-[1500px] ml-[40px] mr-[40px] grid items-center "
    >
      <img
        src="https://img.freepik.com/free-photo/fast-fashion-concept-with-full-clothing-store_23-2150871154.jpg?t=st=1709321895~exp=1709322495~hmac=43a265f1b69050b6b3e54747929364fd4c579de85a3fec9caf6e5cd6af71d1142x.webp"
        alt=""
        className="w-full filter blur-sm"
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))", // to blend the bg image with the bg color
        }}
      />

      <div
        id="productZone1"
        className="flex flex-wrap mt-[-600px] ml-[100px]  "
      >
        {" "}
        {/*flex-wrap for responsiveness*/}
        <Product
          id="1"
          pname="watch"
          image="https://media.istockphoto.com/id/1342734683/photo/an-accessory-for-men.jpg?s=612x612&w=0&k=20&c=KRrVxbNC34_dGQZmB7GmihvTB3OSIz2oKNs5RLrlsBQ="
          price={73000}
          rating={5}
        />
        <Product
          image="https://images.macrumors.com/t/TkNh1oQ0-9TnnBjDnLyuz6yLkjE=/1600x0/article-new/2023/09/iPhone-15-General-Feature-Black.jpg"
          id="2"
          pname="watch"
          price={73000}
          rating={4}
        />
        <Product
          id="1"
          pname="watch"
          image="https://a.1stdibscdn.com/pair-of-mid-century-italian-carved-painted-and-gilt-table-lamps-with-shades-for-sale-picture-4/f_9512/f_309188821666369927006/221_77_3_master.jpeg?width=768"
          price={73000}
          rating={4}
        />
        <Product
          id="1"
          pname="watch"
          image="https://media.istockphoto.com/id/1062252758/photo/old-watch-on-a-black-background.jpg?s=612x612&w=0&k=20&c=FlFstiSUPXJnmRL_68U05rGTuDDU7rxy7NvmE8aBNMI="
          price={73000}
          rating={5}
        />
      </div>

      <div id="productZone2" className="flex mt-[-120px] flex-wrap ml-[100px]">
        <Product
          id="3"
          pname="watch"
          image="https://images.hothardware.com/contentimages/newsitem/61234/content/small_Corsair_Xeneon_27_OLED_Front_Back.jpg"
          price={15000}
          rating={3}
        />
        <Product
          image="https://media.istockphoto.com/id/1292038829/photo/laptop-computer-with-blue-pink-lighting-and-blank-screen-place-on-dark-background-3d.jpg?s=612x612&w=0&k=20&c=ZhWHjvdsoFNXQLIrK8oLo6S8auPeSVFs3y5RfJyyhAU="
          id="4"
          pname="watch"
          price={73000}
          rating={5}
        />
        <Product id="5" pname="watch" price={73000} rating={5} />
        <Product
          id="1"
          pname="watch"
          image="https://m.media-amazon.com/images/I/61zgyoJ0Q7L._AC_UF1000,1000_QL80_.jpg"
          price={3000}
          rating={5}
        />
      </div>

      <div id="productZone3" className="flex  ml-[100px] flex-wrap">
        <Product
          id="9"
          pname="watch"
          image="https://i.pinimg.com/736x/39/d1/6d/39d16de84fa5368118491da2b9eb14a0.jpg"
          price={73000}
          rating={5}
        />
        <Product id="4" pname="watch" price={73000} rating={5} />
        <Product id="5" pname="watch" price={73000} rating={5} />
      </div>
    </div>
  );
}

export default Home;
