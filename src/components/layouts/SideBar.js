import styles from "../../styles/components/layouts/SideBar.module.css"

export const SideBar = () => {
    return (
        <div className={styles.container}>
            <li>ユーザー情報</li>
            <li>Eメール</li>
            <li>電話番号</li>
            <li>グループ化して家族間で共有できるようにする</li>
        </div>
    )
}