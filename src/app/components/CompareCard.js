import Image from "next/image";
import { PT_Serif } from "next/font/google";
import styles from "../../../styles/CompareCard.module.css";

const pt_serif = PT_Serif({ subsets: ["latin"], weight: "400" });

const CompareCard = ({ heading, num, total, change }) => {
    return (
        <div className={styles.card}>
            <h2>{heading}</h2>
            <div className={styles.data}>
                <div className={styles.numbers}>
                    <h3>{num}</h3>
                    <h4 className={pt_serif.className}>
                        <span>Total: </span>
                        {total}
                    </h4>
                </div>
                <div className={styles.graph}>
                    <Image
                        src={change > 0 ? "/icons/up.svg" : "/icons/down.svg"}
                        width={115}
                        height={47}
                        alt="change graph"
                        className={styles.change_graph}
                    />
                </div>
            </div>
            <p className={`${styles.change} ${pt_serif.className}`}>
                <span
                    className={change > 0 ? styles.positive : styles.negative}
                >
                    <Image
                        src={
                            change > 0
                                ? "/icons/up_arrow.svg"
                                : "/icons/down_arrow.svg"
                        }
                        width={20}
                        height={20}
                        alt="graph"
                    />
                    {change > 0 ? ` +${change}%` : ` ${change}%`}
                </span>{" "}
                than the last month
            </p>
        </div>
    );
};

export default CompareCard;
