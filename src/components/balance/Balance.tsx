import styles from './balance.module.scss';
import Image from "next/image";
import Logo from '../../../public/logo.svg';

export function Balance(): JSX.Element {
    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles.title}>My balance</div>
                <div className={styles.myBalance}>$921.48</div>
            </div>
            <Image src={Logo} alt={'logo'}/>
        </div>
    );
}
