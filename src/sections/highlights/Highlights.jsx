import React from "react";
import styles from "./Highlights.module.css";
import DisplayTitle from "../../components/typography/DisplayTitle";
import Button from "../../components/button/Button";
import DishCard from "../../components/dishCard/DishCard";

import GreekSalad from "../../assets/images/greekSalad.jpg";
import LemonDessert from "../../assets/images/lemonDessert.jpg";
import Bruchetta from "../../assets/svg/bruchetta.svg";

const dishes = [
  {
    id: 0,
    name: "Greek salad",
    image: GreekSalad,
    description:
      "Fresh, vibrant, and full of flavor – our Greek Salad mixes crisp veggies, tangy olives, and creamy feta for a taste of the Mediterranean in every bite. A house favorite!",
    price: 15.99,
  },
  {
    id: 1,
    name: "Bruchetta",
    image: Bruchetta,
    description:
      "Crunchy, flavorful, and irresistibly fresh – our Bruschetta is topped with ripe tomatoes, basil, and a drizzle of olive oil. A classic start to your dining experience!",
    price: 5,
  },
  {
    id: 2,
    name: "Lemon dessert",
    image: LemonDessert,
    description:
      "Tangy, sweet, and refreshingly light – our Lemon Dessert is the perfect zesty finish to your meal. A citrusy delight with a buttery crust you won’t want to miss!",
    price: 10.99,
  },
];

const Highlights = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <DisplayTitle>This weeks specials!</DisplayTitle>
        </div>
        <div className={styles.btnContainer}>
          <Button text={"Online menu"} />
        </div>

        <div className={styles.cardsContainer}>
          {dishes.map((dish) => {
            return (
              <DishCard
                key={dish.id}
                name={dish.name}
                image={dish.image}
                description={dish.description}
                price={dish.price}
                onClick={() => {
                  console.log("clicked!");
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
