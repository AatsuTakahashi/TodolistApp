import { signIn, signOut, useSession } from "next-auth/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const SignIn = () => {
  const { data: session } = useSession();
  if (session) {
    signOut();
  }
  return (
    <>
      <div className={styles.signInHome}>
        <Image src={"/sign_in.png"} width={1420} height={800} />
        <div className={styles.signInItem}>
          <Image
            src={"/logoImage.png"}
            width={110}
            height={110}
            alt={"logoIcon"}
            className={styles.signInLogo}
          />
          <h1 className={styles.signInTitle}>Todoアプリ へようこそ！</h1>
          <button
            className={styles.signInButton}
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            SignIn With Google
          </button>
          <p className={styles.signInContent}>
            Googleアカウントを使って、サインインして下さい。
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
