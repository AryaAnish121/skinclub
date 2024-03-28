"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../../../styles/RewardMain.module.css";
import CompareCard from "./CompareCard";
import RecentCard from "./RecentCard";
import RewardChart from "./RewardChart";
import Link from "next/link";
import RewardTable from "./RewardTable";

const Reward = () => {
    return (
        <div className={styles.outer}>
            <div className={styles.main}>
                <div className={styles.head}>
                    <div className={styles.title}>
                        <h1>Reward Management</h1>
                    </div>
                    <div className={styles.management}>
                        <div className={styles.select}>
                            <p>user rewards based on surveys and payments</p>
                            <Image
                                src="/icons/select.svg"
                                alt="dropdown"
                                width={10}
                                height={5}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <button>
                                <span>
                                    Filter By : <span>|</span> Weekly
                                </span>
                                <Image
                                    src="/icons/select.svg"
                                    alt="dropdown"
                                    width={10}
                                    height={5}
                                />
                            </button>
                            <button>
                                <span>
                                    Select Week: <span>|</span> This Week
                                </span>
                                <Image
                                    src="/icons/select.svg"
                                    alt="dropdown"
                                    width={10}
                                    height={5}
                                />
                            </button>
                            <button className={styles.settings}>
                                <Image
                                    src="/icons/settings.svg"
                                    alt="dropdown"
                                    width={15}
                                    height={15}
                                />
                                <span>Settings</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.graphs}>
                        <div className={styles.compare}>
                            <CompareCard
                                heading="Rewards Claimed"
                                num="5590"
                                total="945"
                                change={12}
                            />
                            <CompareCard
                                heading="Payments Done"
                                num="$240"
                                total="945"
                                change={-10}
                            />
                            <CompareCard
                                heading="Surveys Submitted"
                                num="430"
                                total="$94500"
                                change={12}
                            />
                        </div>
                        <div className={styles.reward_graphs}>
                            <h4>Payment VS Survey Reward Stastics</h4>
                            <div className={styles.chart}>
                                <RewardChart />
                            </div>
                        </div>
                    </div>
                    <div className={styles.recent}>
                        <div className={styles.recent_head}>
                            <h4>Recent Rewards</h4>
                            <h3>view all</h3>
                        </div>
                        <div className={styles.recent_cards}>
                            <RecentCard
                                icon="/icons/survey.svg"
                                title="Mike Smith - rewarded for survey completion."
                                time="2 sec ago"
                            />
                            <RecentCard
                                icon="/icons/survey.svg"
                                title="Mike Smith - rewarded for survey completion."
                                time="2 sec ago"
                            />
                            <RecentCard
                                icon="/icons/cash.svg"
                                title="Mike Smith - rewarded for making payment."
                                time="2 sec ago"
                            />
                            <RecentCard
                                icon="/icons/survey.svg"
                                title="Mike Smith - rewarded for survey completion."
                                time="2 sec ago"
                            />
                            <RecentCard
                                icon="/icons/cash.svg"
                                title="Mike Smith - rewarded for making payment."
                                time="2 sec ago"
                            />
                            <RecentCard
                                icon="/icons/cash.svg"
                                title="Mike Smith - rewarded for making payment."
                                time="2 sec ago"
                            />
                            <RecentCard
                                icon="/icons/survey.svg"
                                title="Mike Smith - rewarded for survey completion."
                                time="2 sec ago"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.table_outer}>
                    <div className={styles.table}>
                        <div className={styles.search_outer}>
                            <div className={styles.search}>
                                <input placeholder="Search items" />
                                <hr className={styles.divider} />
                                <button className={styles.search_button}>
                                    <Image
                                        src="/icons/search.svg"
                                        width={10}
                                        height={10}
                                        alt="search"
                                    />
                                </button>
                            </div>
                            <div className={styles.filter_buttons}>
                                <div className={styles.buttons}>
                                    <button className={styles.fbutton}>
                                        <span>
                                            Filter By: <span>|</span> Upcomming
                                        </span>
                                        <Image
                                            src="/icons/select.svg"
                                            alt="dropdown"
                                            width={10}
                                            height={5}
                                        />
                                    </button>
                                    <button>
                                        <span>
                                            Select Date: <span>|</span> 22 Aug
                                        </span>
                                        <Image
                                            src="/icons/select.svg"
                                            alt="dropdown"
                                            width={10}
                                            height={5}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr className={styles.line} />
                        <div className={styles.main_table}>
                            <RewardTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reward;
