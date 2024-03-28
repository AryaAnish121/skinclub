"use client";

import Image from "next/image";
import styles from "../../../../styles/tabs.module.css";
import { useState } from "react";

const Transactions = ({ data }) => {
    const [pV, setPV] = useState(null);

    const make_visible = (i) => {
        if (i == pV) setPV(null);
        else setPV(i);
    };

    return (
        <>
            <table cellSpacing={0} className={styles.table}>
                <tbody>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Procedure Notes</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Amount</th>
                        <th>Payment By</th>
                        <th className={styles.align_center}>Payment</th>
                        <th className={styles.align_center}>Action</th>
                    </tr>
                    {data.map((transaction, i) => {
                        return (
                            <tr key={i} className={styles.table_data}>
                                <td>
                                    <input
                                        type="checkbox"
                                        id={transaction.transactionID}
                                        value={transaction.transactionID}
                                        className={styles.check_box}
                                    />
                                    <label htmlFor={transaction.transactionID}>
                                        {transaction.transactionID}
                                    </label>
                                </td>
                                <td>
                                    <p>{transaction.procedureNotes}</p>
                                </td>
                                <td>
                                    <p>
                                        {transaction.date}
                                    </p>
                                </td>
                                <td>
                                    <p>{transaction.time}</p>
                                </td>
                                <td>
                                    <p>{transaction.amount}</p>
                                </td>
                                <td>
                                    <p>{transaction.paymentBy}</p>
                                </td>
                                <td>
                                    <div className={styles.center}>
                                        <div
                                            className={`${styles.status} ${
                                                transaction.payment.toLowerCase() ==
                                                "pending"
                                                    ? styles.yellow
                                                    : styles.green
                                            }`}
                                        >
                                            <p>{transaction.payment}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.action_button}>
                                        <button
                                            onClick={() => {
                                                make_visible(i);
                                            }}
                                            className={styles.action_button}
                                        >
                                            <Image
                                                width={15}
                                                height={16}
                                                alt="action"
                                                src="/icons/dots.svg"
                                            />
                                        </button>
                                        <div
                                            className={`${styles.popup} ${
                                                pV == i
                                                    ? styles.p_v
                                                    : styles.p_nv
                                            }`}
                                        >
                                            <div>
                                                <Image
                                                    src="/icons/detail.svg"
                                                    width={18}
                                                    height={18}
                                                    alt="detail"
                                                />
                                                <span>Detail</span>
                                            </div>
                                            <hr className={styles.line} />
                                            <div>
                                                <Image
                                                    src="/icons/remove.svg"
                                                    width={18}
                                                    height={18}
                                                    alt="remove"
                                                />
                                                <span>Remove</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className={styles.more}>
                <p>View More</p>
            </div>
        </>
    );
};

export default Transactions;
