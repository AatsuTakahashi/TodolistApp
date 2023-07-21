import { useSession } from "next-auth/react";
import styles from "../../styles/components/layouts/Header.module.css";
import Image from "next/image";

export const Header = () => {
  const { data: session } = useSession();
  return (
    <header className={styles.headerItem}>
      <div className={styles.listItem}>
        <div className={styles.headerContent}>
          <Image
            src={"/logoImage.png"}
            width={30}
            height={30}
            alt={"logoIcon"}
            className={styles.headerIcon}
          />
          <p className={styles.headerContentItem}>Todo</p>
        </div>
        {session && (
          <Image
            src={session.user.image}
            alt={session.user.name}
            width={40}
            height={40}
            className={styles.headerUserIcon}
          />
        )}
      </div>
    </header>
  );
};
