import styles from "./chart.module.scss";
import cn from "classnames";
import {useState} from "react";
import {IChartItem} from "@/src/components/Chart/chart.interfaces";
import {motion, AnimatePresence} from "framer-motion"

export function ChartItem({item}: IChartItem): JSX.Element {
    const [isHover, setIsHover] = useState(false);

    return (
        <AnimatePresence>
            <div onMouseEnter={() => setIsHover(true)}
                 onMouseLeave={() => setIsHover(false)}
                 className={styles.itemWrapper}>
                {isHover && <div className={styles.hoverInfo}>${item.amount}</div>}
                <motion.div
                    layout
                    whileHover={{scale: 1.05}}
                    initial={{ height: 0 }}
                    animate={{ height: `${item.amount * 2.9}px`, rotateX: 180}}
                    transition={{ duration: 0.5 }}
                    exit={{ height: 0 }}
                    style={{height: `${item.amount * 2.9}px`}}
                    className={cn(styles.chart, {[styles.isBlue]: item.amount > 50})}
                />
                <div className={styles.day}>{item.day}</div>
            </div>
        </AnimatePresence>
    );
}
