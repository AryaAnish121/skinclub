"use client";

import Image from "next/image";
import styles from "../../../../styles/tabs.module.css";
import { useState } from "react";

const DoctorPerformance = ({ data }) => {
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
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Revenue</th>
                        <th>Rating</th>
                        <th>Member since</th>
                        <th>Last Active</th>
                        <th className={styles.align_center}>Status</th>
                        <th className={styles.align_center}>Action</th>
                    </tr>
                    {data.map((docPfm, i) => {
                        return (
                            <tr key={i} className={styles.table_data}>
                                <td>
                                    <input
                                        type="checkbox"
                                        id={docPfm.docPfmID}
                                        value={docPfm.docPfmID}
                                        className={styles.check_box}
                                    />
                                    <label htmlFor={docPfm.docPfmID}>
                                        {docPfm.docPfmID}
                                    </label>
                                </td>
                                <td>
                                    <p>{docPfm.name}</p>
                                </td>
                                <td>
                                    <p>{docPfm.revenue}</p>
                                </td>
                                <td>
                                    <p>{docPfm.rating}</p>
                                </td>
                                <td>
                                    <p>{docPfm.memberSince}</p>
                                </td>
                                <td>
                                    <p>{docPfm.lastActive}</p>
                                </td>
                                <td>
                                    <div className={styles.center}>
                                        <div
                                            className={`${styles.status} ${
                                                docPfm.status.toLowerCase() ==
                                                "active"
                                                    ? styles.green
                                                    : styles.red
                                            }`}
                                        >
                                            <p>{docPfm.status}</p>
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
                                                    alt="info"
                                                />
                                                <span>Treatment Outcome</span>
                                            </div>
                                            <hr className={styles.line} />
                                            <div>
                                                <Image
                                                    src="/icons/edit.svg"
                                                    width={18}
                                                    height={18}
                                                    alt="edit"
                                                />
                                                <span>Edit Detail</span>
                                            </div>
                                            <hr className={styles.line} />
                                            <div>
                                                <Image
                                                    src="/icons/star.svg"
                                                    width={18}
                                                    height={18}
                                                    alt="Patient Feedbacks"
                                                />
                                                <span>Patient Feedbacks</span>
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

export default DoctorPerformance;
