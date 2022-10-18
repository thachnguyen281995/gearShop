import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
        <div className="home__container">
         <div className="home__image">
         <img
            src="https://images.unsplash.com/photo-1619170743049-4688803388b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className=""
          />
         </div>
          <div className="home__row">
            <Product
              id="12321321"
              title='Màn hình Dell UltraSharp U2422HE 24" IPS USBC RJ45'
              price="8000000"
              rating={5}
              image="https://product.hstatic.net/1000026716/product/dell_u2422he_gearvn_8f08f2b6fb304651a5427da7f8cb0485.jpg"
            />
            <Product
              id="13213412"
              title="Tai nghe Apple Airpods 3"
              price="4990000"
              rating={3}
              image="https://product.hstatic.net/1000026716/product/3570_untitled_1_ce35a56eb2c745c8b4b156361eddbb52.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="32132"
              title="Apple Watch Series 8"
              price="10990000"
              rating={5}
              image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71uOgDy40BL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
            />
            <Product
              id="12341"
              title="Chuột Corsair M55 RGB Pro White"
              price="790000"
              rating={2}
              image="https://product.hstatic.net/1000026716/product/corsair-m55-rgb-gearvn-1_ae4723703730444899cb2c6c13e8ad1b.jpg"
            />
            <Product
              id="132141"
              title="MSI GeForce RTX 4090 GAMING TRIO 24G"
              price="49990000"
              rating={4}
              image="https://product.hstatic.net/1000026716/product/1024_0_50a0a48513944c45b6fd56f2ea71eb21.jpg"
            />
            
          </div>
          <div className="home__row">
            <Product
              id="321412"
              title="MacBook Air M1 7GPU 8GB 256GB - Gold"
              price="22890000"
              rating={3}
              image="https://product.hstatic.net/1000026716/product/com_image_2020_11_apple-m1-macbook-air-pro-mini-one-more-thing-event-5_8637fbe114ea42b7a7e351afd8fdeefd.jpg"
            />
          </div>
        </div>
      </div>
    )
}

export default Home
