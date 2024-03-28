"use client";

import Image from "next/image";
import styles from "../../../../styles/tabs.module.css";
import { useState } from "react";

const Appointments = ({ data }) => {
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
                        <th>Treatment</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th>Patient</th>
                        <th>Practitioner</th>
                        <th>Studio</th>
                        <th className={styles.align_center}>Status</th>
                        <th className={styles.align_center}>Action</th>
                    </tr>
                    {data.map((appointment, i) => {
                        return (
                            <tr key={i} className={styles.table_data}>
                                <td>
                                    <p>{appointment.treatment}</p>
                                </td>
                                <td>
                                    <p>{appointment.time}</p>
                                </td>
                                <td>
                                    <p>{appointment.date}</p>
                                </td>
                                <td>
                                    <p>{appointment.patient}</p>
                                </td>
                                <td>
                                    <p>{appointment.practitioner}</p>
                                </td>
                                <td>
                                    <p>{appointment.studio}</p>
                                </td>
                                <td>
                                    <div className={styles.center}>
                                        <div
                                            className={`${styles.status} ${
                                                appointment.status.toLowerCase() ==
                                                "confirmed"
                                                    ? styles.green
                                                    : appointment.status.toLowerCase() ==
                                                      "cancelled"
                                                    ? styles.red
                                                    : styles.yellow
                                            }`}
                                        >
                                            <p>{appointment.status}</p>
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
                                                    src="/icons/info.svg"
                                                    width={18}
                                                    height={18}
                                                    alt="info"
                                                />
                                                <span>View</span>
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

export default Appointments;
