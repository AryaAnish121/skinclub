import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../../../styles/SupportCard.module.css";

const inter = Inter({ subsets: ["latin"], weight: "400" });

const SupportCard = ({ icon, title, time }) => {
    return (
        <div className={styles.card}>
            <div className={styles.image_outer}>
                <Image src={icon} width={25} height={25} alt={title} />
            </div>
            <div className={styles.detail}>
                <div className={styles.detail_main}>
                    <h3>{title}</h3>
                    <p>{time}</p>
                </div>
                <button className={styles.button}>
                    <Image alt={title} src="/icons/chat.svg" width={14} height={14} />
                    <span className={inter.className}> Chat</span>
                </button>
            </div>
        </div>
    );
};

export default SupportCard;
