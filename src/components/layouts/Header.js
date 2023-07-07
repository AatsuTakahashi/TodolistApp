import Link from "next/link";
import styles from "../../styles/components/layouts/Header.module.css"
import Image from "next/image"; 
import { signOut } from "next-auth/react";

export const Header = () => {
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
                <p className={styles.headerContentItem}>Todo リスト</p>
            </div>   
            <div className={styles.headerLogin} onClick={() => signOut({ callbackUrl: "/sign_in" })}>
                ログアウト
            </div>
        </div>
      </header>
    )
}