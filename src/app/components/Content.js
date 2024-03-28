"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../../../styles/Content.module.css";
import CompareCard from "./CompareCard";
import RecentCard from "./RecentCard";
import SupportCard from "./SupportCard";
import Chart from "./Chart";
import Link from "next/link";
import Table from "./Table";

const Content = () => {
    const [data, setData] = useState({
        users: [
            {
                userID: "#4589",
                name: "John Doe",
                role: "Patient",
                memberSince: "21 Aug, 2023",
                lastActive: "2 months ago",
                status: "inactive",
            },
            {
                userID: "#4590",
                name: "Doctor",
                role: "Staff",
                memberSince: "21 Aug, 2023",
                lastActive: "3 mins ago",
                status: "active",
            },
            {
                userID: "#4589",
                name: "John Doe",
                role: "Patient",
                memberSince: "21 Aug, 2023",
                lastActive: "A month ago",
                status: "inactive",
            },
        ],
        appointments: [
            {
                treatment: "PRP Injections",
                time: "09:00 - 10:30",
                date: "21 Aug,2023",
                patient: "John Doe",
                practitioner: "Dr. Vihang",
                studio: "Toorak",
                status: "Cancelled",
            },
            {
                treatment: "PRP Injections",
                time: "09:00 - 10:30",
                date: "21 Aug,2023",
                patient: "John Doe",
                practitioner: "Dr. Vihang",
                studio: "Toorak",
                status: "Confirmed",
            },
            {
                treatment: "PRP Injections",
                time: "09:00 - 10:30",
                date: "21 Aug,2023",
                patient: "John Doe",
                practitioner: "Dr. Vihang",
                studio: "Toorak",
                status: "In Progress",
            },
        ],
        transactions: [
            {
                transactionID: "#4589",
                procedureNotes: "View Notes",
                date: "25/08/23",
                time: "09:00AM",
                amount: "$500.00",
                paymentBy: "Vihang Sharma",
                payment: "Pending",
            },
            {
                transactionID: "#4590",
                procedureNotes: "View Notes",
                date: "26/08/23",
                time: "09:00AM",
                amount: "$500.00",
                paymentBy: "Vihang Sharma",
                payment: "Pending",
            },
            {
                transactionID: "#4589",
                procedureNotes: "View Notes",
                date: "25/08/23",
                time: "09:00AM",
                amount: "$500.00",
                paymentBy: "Vihang Sharma",
                payment: "Pending",
            },
            {
                transactionID: "#4590",
                procedureNotes: "View Notes",
                date: "26/08/23",
                time: "09:00AM",
                amount: "$500.00",
                paymentBy: "Vihang Sharma",
                payment: "Pending",
            },
        ],
        inventory: [
            {
                productID: "#4589",
                name: "AHA Deep Clean Exfoliator",
                category: "Botox",
                quantity: "2",
                price: "$90.00",
                dPrice: "$69.00",
                status: "Low Stock",
            },
            {
                productID: "#4590",
                name: "AHA Deep Clean Exfoliator",
                category: "Profilo",
                quantity: "2",
                price: "$150.00",
                dPrice: "$119.00",
                status: "In Stock",
            },
            {
                productID: "#4590",
                name: "AHA Deep Clean Exfoliator",
                category: "Botox",
                quantity: "30ml",
                price: "$90.00",
                dPrice: "$69.00",
                status: "Out of Stock",
            },
        ],
        patientRecords: [
            {
                userID: "#4589",
                name: "John Doe",
                treatmentSuccessRate: "60%",
                memberSince: "21 Aug, 2023",
                lastActive: "2 months ago",
                status: "inactive",
            },
            {
                userID: "#4590",
                name: "John Doe",
                treatmentSuccessRate: "60%",
                memberSince: "21 Aug, 2023",
                lastActive: "3 mins ago",
                status: "active",
            },
        ],
        doctorPerformance: [
            {
                docPfmID: "#4589",
                name: "John Doe",
                revenue: "$1000.00",
                rating: "8.7/10",
                memberSince: "21 Aug, 2023",
                lastActive: "2 months ago",
                status: "inactive",
            },
            {
                docPfmID: "#4590",
                name: "John Doe",
                revenue: "$1000.00",
                rating: "8.7/10",
                memberSince: "21 Aug, 2023",
                lastActive: "3 mins ago",
                status: "active",
            },
        ],
    });

    const [tab, setTab] = useState("users");

    const handleClick = (e) => {
        setTab(e);
    };

    return (
        <div className={styles.outer}>
            <div className={styles.main}>
                <div className={styles.head}>
                    <div className={styles.title}>
                        <h1>Admin Dashboard</h1>
                    </div>
                    <div className={styles.management}>
                        <div className={styles.select}>
                            <p>Appointment management</p>
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
                                heading="Active Users"
                                num={430}
                                total="945"
                                change={12}
                            />
                            <CompareCard
                                heading="Appointments"
                                num={240}
                                total="945"
                                change={-10}
                            />
                            <CompareCard
                                heading="Revenue"
                                num={430}
                                total="$94500"
                                change={12}
                            />
                        </div>
                        <div className={styles.stats_and_support}>
                            <div className={styles.stats}>
                                <div className={styles.stats_head}>
                                    <h4>Active Users Statistics</h4>
                                    <div className={styles.buttons}>
                                        <button>
                                            <span>
                                                Select Week: <span>|</span> This
                                                Week
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
                                <Chart styles={styles} />
                            </div>
                            <div className={styles.support}>
                                <div className={styles.support_head}>
                                    <h4>Customer Support</h4>
                                    <h3>view all</h3>
                                </div>
                                <div className={styles.support_cards}>
                                    <SupportCard
                                        icon="/icons/problem.svg"
                                        title="A person reported a problem."
                                        time="2 sec ago"
                                    />
                                    <SupportCard
                                        icon="/icons/help.svg"
                                        title="A person Needs Help."
                                        time="2 sec ago"
                                    />
                                    <SupportCard
                                        icon="/icons/feedback.svg"
                                        title="A feedback left by a person."
                                        time="2 sec ago"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.recent}>
                        <div className={styles.recent_head}>
                            <h4>Recent Activity</h4>
                            <h3>view all</h3>
                        </div>
                        <div className={styles.recent_cards}>
                            <RecentCard
                                icon="/icons/account.svg"
                                title="New User registered."
                                time="2 sec ago"
                            />
                            <RecentCard
                                icon="/icons/stock_update.svg"
                                title="A product stock has been updated."
                                time="2 sec ago"
                            />
                            <RecentCard
                                icon="/icons/cash.svg"
                                title="A Payment has been done."
                                time="2 sec ago"
                            />
                            <RecentCard
                                icon="/icons/out_of_stock.svg"
                                title="A product is out of stock."
                                time="2 sec ago"
                            />
                            <RecentCard
                                icon="/icons/appointment.svg"
                                title="An appointment confirmed."
                                time="2 sec ago"
                            />
                            <RecentCard
                                icon="/icons/account.svg"
                                title="New User registered."
                                time="2 sec ago"
                            />
                            <RecentCard
                                icon="/icons/out_of_stock.svg"
                                title="A product is out of stock."
                                time="2 sec ago"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.table_outer}>
                    <div className={styles.table}>
                        <div className={styles.table_head}>
                            <div className={styles.options}>
                                <p
                                    onClick={() => {
                                        handleClick("users");
                                    }}
                                    className={tab == "users" ? styles.active : ""}

                                >
                                    Users
                                </p>
                                <p
                                    onClick={() => {
                                        handleClick("appointments");
                                    }}
                                    className={tab == "appointments" ? styles.active : ""}
                                >
                                    Appointments
                                </p>
                                <p
                                    onClick={() => {
                                        handleClick("transactions");
                                    }}
                                    className={tab == "transactions" ? styles.active : ""}
                                >
                                    Transactions
                                </p>
                                <p
                                    onClick={() => {
                                        handleClick("inventory");
                                    }}
                                    className={tab == "inventory" ? styles.active : ""}
                                >
                                    Inventory
                                </p>
                                <p
                                    onClick={() => {
                                        handleClick("patientRecords");
                                    }}
                                    className={tab == "patientRecords" ? styles.active : ""}
                                >
                                    Patient Records
                                </p>
                                <p
                                    onClick={() => {
                                        handleClick("doctorPerformance");
                                    }}
                                    className={tab == "doctorPerformance" ? styles.active : ""}
                                >
                                    Doctor&apos;s Performance
                                </p>
                            </div>
                            <div className={styles.export}>
                                <Link href="/">
                                    <Image
                                        src="/icons/export.svg"
                                        alt="export"
                                        width={12}
                                        height={12}
                                    />
                                    <span> Export CSV</span>
                                </Link>
                            </div>
                        </div>
                        <hr className={styles.line} />
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
                            <Table tab={tab} data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
