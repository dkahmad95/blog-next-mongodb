"use client";
import Image from "next/image";
import styles from "./writePage.module.css";
import {  useState } from "react";



const WritePage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
    <input
      type="text"
      placeholder="Title"
      className={styles.input}

    />
    <select className={styles.select} >
      <option value="style">style</option>
      <option value="fashion">fashion</option>
      <option value="food">food</option>
      <option value="culture">culture</option>
      <option value="travel">travel</option>
      <option value="coding">coding</option>
    </select>
    <div className={styles.editor}>
      <button className={styles.button} onClick={() => setOpen(!open)}>
        <Image src="/plus.png" alt="" width={16} height={16} />
      </button>
      {open && (
        <div className={styles.add}>
          <input
            type="file"
            id="image"
            
            style={{ display: "none" }}
          />
          <button className={styles.addButton}>
            <label htmlFor="image">
              <Image src="/image.png" alt="" width={16} height={16} />
            </label>
          </button>
          <button className={styles.addButton}>
            <Image src="/external.png" alt="" width={16} height={16} />
          </button>
          <button className={styles.addButton}>
            <Image src="/video.png" alt="" width={16} height={16} />
          </button>
        </div>
      )}
     <textarea placeholder="Tell us something..." className={styles.textArea}/>
    </div>
    <button className={styles.publish}>
      Publish
    </button>
  </div>
);
};

export default WritePage