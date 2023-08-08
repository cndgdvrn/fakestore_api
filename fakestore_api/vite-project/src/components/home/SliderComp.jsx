import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
  };
  // const names = ["can","ibo","zehra"]
  //img-sneaksupincommerce.mncdn.com/Content/Images/Thumbs/0073681_converse-chuck-taylor-all-star-m9697c-410.jpeg
  return (
    <div className="mt-4">
      <Slider {...settings}>
        <div>
          <div className="flex items-center space-x-4 bg-gray-100 w-full">
            <div className="space-y-4 p-4">
              <div className="text-5xl tracking-tight font-bold">
                Nike Airforce 1{" "}
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                rem necessitatibus odio veniam obcaecati nulla? Esse possimus
                quam quod doloremque! Facere accusantium molestiae nulla, sequi
                explicabo deserunt ex magni nobis.
              </p>
              <div className="border rounded-xl inline-flex  bg-candreva-red text-white p-1">
                Ürünü incele
              </div>
            </div>
            <img
              className="w-[360px] object-cover"
              src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b01c67f2-2481-45d7-b383-a1476d768f6e/air-force-1-07-next-nature-ayakkab%C4%B1s%C4%B1-lkVhs6.png"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-4 bg-gray-100 w-full">
            <div className="space-y-4 p-4">
              <div className="text-5xl tracking-tight font-bold">
                Nike Airforce 1{" "}
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                rem necessitatibus odio veniam obcaecati nulla? Esse possimus
                quam quod doloremque! Facere accusantium molestiae nulla, sequi
                explicabo deserunt ex magni nobis.
              </p>
              <div className="border rounded-xl inline-flex  bg-candreva-red text-white p-1">
                Ürünü incele
              </div>
            </div>
            <img
              className="w-[360px] object-cover"
              src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b01c67f2-2481-45d7-b383-a1476d768f6e/air-force-1-07-next-nature-ayakkab%C4%B1s%C4%B1-lkVhs6.png"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
