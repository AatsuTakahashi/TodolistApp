import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/components/layouts/userProfile.module.css";
import { AppLayout } from "../components/layouts/AppLayout";
import { useSession } from "next-auth/react";

const userProfile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/sign_in");
  }, [status, router]);

  return (
    <AppLayout>
      <div className={styles.userProfileTop}>
        <div className={styles.userProfileContent}>ログイン中のユーザー</div>
        {session && (
          <div className={styles.userProfile}>
            <Image
              src={session.user.image}
              alt={session.user.name}
              width={350}
              height={350}
              className={styles.userProfileImage}
            />
            <div className={styles.userProfileEmail}>{session.user.email}</div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default userProfile;
