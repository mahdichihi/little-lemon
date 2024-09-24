import React from "react";
import styles from "./Testimonials.module.css";
import DisplayTitle from "../../components/typography/DisplayTitle";

import Profile_1 from "../../assets/images/profile_1.jpg";
import Profile_2 from "../../assets/images/profile_2.png";
import Profile_3 from "../../assets/images/profile_3.jpg";
import Profile_4 from "../../assets/images/profile_4.jpg";
import TestimonialCard from "../../components/testimonialCard/TestimonialCard";

const reviews = [
  {
    id: 0,
    name: "Sophia Mitchell",
    image: Profile_1,
    description:
      "Absolutely loved the vibe and the food – a true hidden gem! Keep shining!",
    rating: 5,
  },
  {
    id: 1,
    name: "James Carter",
    image: Profile_2,
    description:
      "Best dining experience I’ve had in a while; every dish was perfect!",
    rating: 4,
  },
  {
    id: 2,
    name: "Emma Rodriguez",
    image: Profile_3,
    description:
      "The flavors here are simply out of this world, a must-visit spot!",
    rating: 5,
  },
  {
    id: 3,
    name: "Liam Anderson",
    image: Profile_4,
    description:
      "A culinary delight – the ambiance and taste blew me away! Thank you!",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className={styles.wrapper}>
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
    </div>
  );
};

export default Testimonials;
