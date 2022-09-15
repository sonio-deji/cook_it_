import React from "react";
import Image from "next/image";
import Style from "./foods.module.css";

const foodList = [
  {
    id: 1,
    desc: "How to cook jollof rice",
    image: "/assets/Frame 226.jpg",
  },
  {
    id: 2,
    desc: "How to cook pasta",
    image: "/assets/Frame 227.jpg",
  },
  {
    id: 3,
    desc: "How to make oat",
    image: "/assets/Frame 228.jpg",
  },
  {
    id: 4,
    desc: "How to make toast bread",
    image: "/assets/Frame 229.jpg",
  },
  {
    id: 5,
    desc: "How to make Crispy chicken",
    image: "/assets/Frame 230.jpg",
  },
  {
    id: 6,
    desc: "How to make pizza",
    image: "/assets/Frame 231.jpg",
  },
];

function Foods() {
  return (
    <div className={Style.foodListMain}>
      <div className={`${Style.foodList}`}>
        {foodList.map((food, i) => {
          return (
            <div key={i} className={Style.food}>
              <Image
                src={food.image}
                width={"384px"}
                height={"351px"}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Foods;
