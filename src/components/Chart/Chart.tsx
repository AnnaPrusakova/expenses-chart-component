import data from '../../data/data.json';
import styles from './chart.module.scss';
import cn from 'classnames';

export function Chart(): JSX.Element {
    return (
        <div className={styles.wrapper}>
            {data.map((item) => (
                <div key={item.amount}>
                    <div
                        className={cn(styles.chart, {[styles.isBlue]: item.amount > 50})}
                        style={{height: `${item.amount * 2.9}px`}}/>
                    <div className={styles.day}>{item.day}</div>
                </div>
            ))}
        </div>
    );
}
