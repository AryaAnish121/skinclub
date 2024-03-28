"use client";

import styles from "../../../styles/Reward.module.css";
import SidePannel from "../components/SidePannel";
import TopNav from "../components/TopNav";
import RewardContent from "../components/Reward";
import { useState } from "react";

const Reward = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        if (nav == true) setNav(false);
        else setNav(true);
    };

    return (
        <>
            <TopNav handleClick={handleClick} />
            <div className={styles.display}>
                <SidePannel nav={nav} handleClick={handleClick} />
                <RewardContent />
            </div>
        </>
    );
};

export default Reward;
