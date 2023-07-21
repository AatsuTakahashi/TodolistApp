import React from "react";
import styles from "../../styles/components/layouts/SideBar.module.css";
import { SideBarData } from "./SideBarData";
import { Link } from "@mui/material";

export const SideBar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.SideBarList}>
        {SideBarData.map((value, key) => {
          return (
            <Link key={key} className={styles.row} href={value.link}>
              <div id="icon" className={styles.SideBarIcon}>
                {value.icon}
              </div>
              <div id="title" className={styles.SideBarTitle}>
                {value.title}
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
