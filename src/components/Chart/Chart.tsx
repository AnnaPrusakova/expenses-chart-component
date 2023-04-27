import data from '../../data/data.json';
import styles from './chart.module.scss';
import {ChartItem} from "@/src/components/Chart/ChartItem";

export function Chart(): JSX.Element {
    return (
        <div className={styles.wrapper}>
            {data.map((item, key) => (
                <ChartItem item={item} key={key}/>
            ))}
        </div>
    );
}
