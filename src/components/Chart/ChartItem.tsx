import styles from "./chart.module.scss";
import cn from "classnames";
import {useState} from "react";
import {IChartItem} from "@/src/components/Chart/chart.interfaces";

export function ChartItem({item}: IChartItem): JSX.Element {
    const [isHover, setIsHover] = useState(false);

    return (
        <div onMouseEnter={() => setIsHover(true)}
             onMouseLeave={() => setIsHover(false)}
             className={styles.itemWrapper}>
            {isHover && <div className={styles.hoverInfo}>${item.amount}</div>}
            <div
                className={cn(styles.chart, {[styles.isBlue]: item.amount > 50})}
                style={{height: `${item.amount * 2.9}px`}}/>
            <div className={styles.day}>{item.day}</div>
        </div>
    );
}
