import React from "react";
import styles from "./Testimonials.module.css";
import DisplayTitle from "../../components/typography/DisplayTitle";
import TestimonialCard from "../../components/testimonialCard/TestimonialCard";
import { reviews } from "../../mocks/reviews";

const Testimonials = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <DisplayTitle>Testimonials</DisplayTitle>
        </div>

        <div className={styles.cardsContainer}>
          {reviews.map((review) => {
            return (
              <TestimonialCard
                key={review.id}
                name={review.name}
                image={review.image}
                description={review.description}
                rating={review.rating}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
