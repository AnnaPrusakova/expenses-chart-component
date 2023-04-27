import styles from './balance.module.scss';
import Image from "next/image";
import Logo from '../../../public/logo.svg';
import CountUp from "react-countup";
import {RefObject} from "react";

export function Balance(): JSX.Element {
    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles.title}>My balance</div>
                <CountUp start={0} end={921.48} prefix={'$'} decimals={2}>
                    {({ countUpRef }) => (
                        <div className={styles.myBalance} ref={countUpRef as RefObject<HTMLDivElement>}/>
                    )}
                </CountUp>
            </div>
            <Image src={Logo} alt={'logo'}/>
        </div>
    );
}
