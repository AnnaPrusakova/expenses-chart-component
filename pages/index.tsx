import {Balance} from "@/src/components/balance/Balance";
import {Spending} from "@/src/components/spending/Spending";
import styles from '../styles/index.module.scss';


export default function Home() {
    return (
        <main className="relative">
            <div className={styles.wrapper}>
                <Balance/>
                <Spending/>
            </div>
        </main>
    )
}
