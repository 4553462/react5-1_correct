import React from "react";
import { Link } from "react-router-dom";
import styles from "./PhotosPage.module.css";

const PhotosPage = () => {
  return (
    <div className={styles.photosContainer}>
      <Link to="/service" className={styles.ph}>
        <div className={styles.imageWrapper}>
          <img src={`${process.env.PUBLIC_URL}/Photos/1.png`} alt="photo 1" />
        </div>
        <div className={styles.w}>
          <p align="center">loloolololo</p>
        </div>
      </Link>
      <Link to="/about" className={styles.ph}>
        <div className={styles.imageWrapper}>
          <img src={`${process.env.PUBLIC_URL}/Photos/2.png`} alt="photo 2" />
        </div>
        <div className={styles.w}>
          <p align="center">loloolololo</p>
        </div>
      </Link>
      <Link to="/contact" className={styles.ph}>
        <div className={styles.imageWrapper}>
          <img src={`${process.env.PUBLIC_URL}/Photos/3.png`} alt="photo 3" />
        </div>
        <div className={styles.w}>
          <p align="center">loloolololo</p>
        </div>
      </Link>
    </div>
  );
};

export default PhotosPage;
