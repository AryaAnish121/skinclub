"use client";

import Image from "next/image";
import styles from "../../../../styles/tabs.module.css";
import { useState } from "react";

const PatientRecords = ({ data }) => {
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
                        <th>Treatment Success Rate</th>
                        <th>Member since</th>
                        <th>Last Active</th>
                        <th className={styles.align_center}>Status</th>
                        <th className={styles.align_center}>Action</th>
                    </tr>
                    {data.map((patient, i) => {
                        return (
                            <tr key={i} className={styles.table_data}>
                                <td>
                                    <input
                                        type="checkbox"
                                        id={patient.userID}
                                        value={patient.userID}
                                        className={styles.check_box}
                                    />
                                    <label htmlFor={patient.userID}>
                                        {patient.userID}
                                    </label>
                                </td>
                                <td>
                                    <p>{patient.name}</p>
                                </td>
                                <td>
                                    <p>{patient.treatmentSuccessRate}</p>
                                </td>
                                <td>
                                    <p>{patient.memberSince}</p>
                                </td>
                                <td>
                                    <p>{patient.lastActive}</p>
                                </td>
                                <td>
                                    <div className={styles.center}>
                                        <div
                                            className={`${styles.status} ${
                                                patient.status.toLowerCase() ==
                                                "active"
                                                    ? styles.green
                                                    : styles.red
                                            }`}
                                        >
                                            <p>{patient.status}</p>
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
                                                    src="/icons/info.svg"
                                                    width={18}
                                                    height={18}
                                                    alt="plan"
                                                />
                                                <span>Treatment Plan</span>
                                            </div>
                                            <hr className={styles.line} />
                                            <div>
                                                <Image
                                                    src="/icons/edit.svg"
                                                    width={18}
                                                    height={18}
                                                    alt="edit"
                                                />
                                                <span>Edit Details</span>
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

export default PatientRecords;
