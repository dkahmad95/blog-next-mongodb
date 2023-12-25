import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                width={50}
                height={50}
                alt=""
                className={styles.avatar}
              />
            </div>

            <div className={styles.userTextContainer}>
              <span className={styles.username}>Ahmad dekmak</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
         <Image src='/p1.jpeg' alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"   className={styles.image}/>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ex
            aperiam provident ad ducimus numquam. Vero eum quo ullam soluta qui
            ab voluptatum molestiae cum distinctio! Soluta ad quaerat ratione.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ex
            aperiam provident ad ducimus numquam. Vero eum quo ullam soluta qui
            ab voluptatum molestiae cum distinctio! Soluta ad quaerat ratione.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ex
            aperiam provident ad ducimus numquam. Vero eum quo ullam soluta qui
            ab voluptatum molestiae cum distinctio! Soluta ad quaerat ratione.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ex
            aperiam provident ad ducimus numquam. Vero eum quo ullam soluta qui
            ab voluptatum molestiae cum distinctio! Soluta ad quaerat ratione.
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
