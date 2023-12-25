import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt=""  fill sizes=" height: 350px" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>

          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href='/post/slug'>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          corrupti, deserunt molestias voluptatum culpa doloribus exercitationem
          eius nisi nulla natus excepturi, vero sit! Quas quam delectus ad nemo
          odio reprehenderit.
        </p>
        <Link href='/post/slug' className={styles.link} >
        Read More
      </Link>
      </div>
    </div>
  );
};

export default Card;
