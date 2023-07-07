import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import { AppLayout } from '../components/layouts/AppLayout'
import Main from "../components/Main";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const onClickAdd = () => {
    alert('');
     
  }

  return (
    
      
      <AppLayout>

      <div className={styles.homeContainer}>
          
          <h1 className={styles.homeTodoTitle}>TODO</h1>
            <div className={styles.inputContent}>
              <input placeholder='TODOを入力' className={styles.inputText}></input>
              <button className={styles.AddButton} onClick={()=> onClickAdd()}>追加</button>
            </div>
  
      </div>
      <Main />

      </AppLayout>
    
  )
}
