import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Dekmak blog here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="/p1.jpeg"
            alt=""
            fill
            sizes="height: 500px"
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
          The Wonders of the Ocean
          </h1>
          <p className={styles.postDesc}><span>
          Dive into the mysteries of the ocean with our latest post. Discover the beauty of coral reefs, the majesty of marine life, and the importance of ocean conservation.<br/> <br/></span>
          The ocean covers over 70% of our planet's surface and is home to a diverse array of life. From the smallest plankton to the largest whales, the sea is a vital part of Earth's ecosystem. Explore the depths of the ocean and learn about the critical issues facing our marine environments today.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
