import React from "react";
import styles from "./Highlights.module.css";
import DisplayTitle from "../../components/typography/DisplayTitle";
import Button from "../../components/button/Button";
import DishCard from "../../components/dishCard/DishCard";
import { dishes } from "../../mocks/dishes";

const Highlights = () => {
  return (
    <section id="menu" className={styles.wrapper}>
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
    </section>
  );
};

export default Highlights;
