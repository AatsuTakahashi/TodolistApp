import styles from "../styles/Home.module.css";
import { AppLayout } from "../components/layouts/AppLayout";
import Main from "../components/Main";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import useFetchTodo from "../hooks/useFetchTodo";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/sign_in");
  }, [status, router]);

  const [titleText, setTitleText] = useState("");
  const { todos, mutate } = useFetchTodo(session ? session?.user.id : null);

  const createTodo = async () => {
    try {
      if (titleText === "") return;
      await axios.post("/api/todos", {
        user_id: session ? session.user.id : null,
        title: titleText,
      });
      setTitleText("");
      mutate();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppLayout>
      <div className={styles.homeContainer}>
        <h1 className={styles.homeTodoTitle}>TODO</h1>
        <div className={styles.inputContent}>
          <input
            placeholder="TODOを入力"
            className={styles.inputText}
            value={titleText}
            onChange={(event) => setTitleText(event.target.value)}
          />
          <button className={styles.AddButton} onClick={createTodo}>
            追加
          </button>
        </div>
      </div>
      {session && todos && (
        <Main user={session.user} todoData={todos.data} mutate={mutate} />
      )}
    </AppLayout>
  );
}
