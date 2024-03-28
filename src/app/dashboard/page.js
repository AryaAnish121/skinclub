"use client";

import styles from "../../../styles/Dashboard.module.css";
import SidePannel from "../components/SidePannel";
import TopNav from "../components/TopNav";
import Content from "../components/Content";
import { useState } from "react";

const Dashboard = () => {
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
                <Content />
            </div>
        </>
    );
};

export default Dashboard;
