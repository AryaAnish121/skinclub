"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../../styles/TopNav.module.css";

const TopNav = ({handleClick}) => {
    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const date = new Date();
        const options = { weekday: "long", day: "numeric", month: "long" };
        const formattedDate = date.toLocaleDateString("en-US", options);
        setCurrentDate(formattedDate);

        const updateClock = () => {
            const date = new Date();
            const hours = date.getHours() % 12 || 12; // Convert to 12-hour format
            const minutes = date.getMinutes();
            const ampm = date.getHours() < 12 ? "AM" : "PM";
            const formattedTime = `${hours}:${
                minutes < 10 ? "0" : ""
            }${minutes} ${ampm}`;
            setCurrentTime(formattedTime);
        };

        // Call updateClock initially
        updateClock();

        // Update the time every minute
        const intervalId = setInterval(updateClock, 60000);

        // Cleanup interval when component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.nav}>
            <div className={`${styles.icon} ${styles.hamburger}`} onClick={handleClick}>
                <Image
                    src="/icons/hamburger.svg"
                    alt="hamburger"
                    width={16}
                    height={16}
                />
            </div>
            <div className={styles.logo_outer}>
                <Image
                    src="/icons/logo.svg"
                    alt="logo"
                    width={125}
                    height={125}
                    priority
                />
            </div>
            <div className={styles.info}>
                <p>{currentDate}</p>
                <p>{currentTime}</p>
                <div className={styles.icon}>
                    <Image
                        src="/icons/bell.svg"
                        alt="bell icon"
                        width={16}
                        height={16}
                    />
                </div>
            </div>
        </div>
    );
};

export default TopNav;
