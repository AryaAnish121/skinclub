import Image from "next/image";
import styles from "../../../styles/RecentCard.module.css";

const RecentCard = ({ icon, title, time }) => {
    return (
        <div className={styles.card}>
            <div className={styles.image_outer}>
                <Image src={icon} width={25} height={25} alt={title} />
            </div>
            <div className={styles.detail}>
                <h3>{title}</h3>
                <p>{time}</p>
            </div>
        </div>
    );
};

export default RecentCard;
