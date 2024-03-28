"use client";

import Image from "next/image";
import styles from "../../../styles/SidePannel.module.css";
import Link from "next/link";

const SidePannel = ({ nav, handleClick }) => {
    return (
        <div
            className={` ${styles.side_pannel} ${
                nav == true ? styles.nav : ""
            } `}
        >
            <div
                className={`${styles.icon} ${nav == true ? styles.cross : ""}`}
                onClick={handleClick}
            >
                <Image
                    src="/icons/cross.svg"
                    alt="cross icon"
                    width={16}
                    height={16}
                />
            </div>
            <div>
                <Link href="/">Overview</Link>
            </div>
            <div>
                <Link href="/">Profile</Link>
            </div>
            <div>
                <Link href="/">Appointments</Link>
            </div>
            <div>
                <p>History</p>
                <div>
                    <Link href="/" className={styles.sub_link}>
                        Videos
                    </Link>
                </div>

                <div>
                    <Link href="/" className={styles.sub_link}>
                        Videos Library
                    </Link>
                </div>
            </div>
            <div>
                <Link href="/">Messages</Link>
            </div>
            <div>
                <p>Support</p>
                <div>
                    <Link href="/" className={styles.sub_link}>
                        FAQ&apos;s
                    </Link>
                </div>
                <div>
                    <Link href="/" className={styles.sub_link}>
                        Procedure Information
                    </Link>
                </div>
            </div>
            <div>
                <p>Aftercare</p>
                <div>
                    <Link href="/" className={styles.sub_link}>
                        Quizzes
                    </Link>
                </div>
                <div>
                    <Link href="/" className={styles.sub_link}>
                        Health & Skin Assesment
                    </Link>
                </div>
            </div>
            <div>
                <Link href="/">Finances</Link>
            </div>
            <div className={styles.active}>
                <Link href="/">Virtual Consultation</Link>
            </div>
        </div>
    );
};

export default SidePannel;
