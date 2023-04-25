import styles from './spending.module.scss';
import {Chart} from "@/src/components/Chart/Chart";

export function Spending(): JSX.Element {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Spending - Last 7 days</div>
            <Chart/>
            <div className={styles.divider}/>
            <div className={styles.infoWrapper}>
                <div>
                    <div className={styles.text}>Total this month</div>
                    <div className={styles.totalMonth}>$478.33</div>
                </div>
                <div className={styles.last}>
                    <div className={styles.lastMonth}>+2.4%</div>
                    <div className={styles.text}>from last month</div>
                </div>
            </div>
        </div>
    );
}
