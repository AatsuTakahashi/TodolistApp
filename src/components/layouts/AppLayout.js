import { SideBar } from "./SideBar";
import styles from "../../styles/components/layouts/AppLayout.module.css";
import { Header } from "./Header";

export const AppLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.mainContents}>
        <SideBar />
        <div className={styles.layoutRight}>{children}</div>
      </div>
    </div>
  );
};
