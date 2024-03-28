"use client";

import Image from "next/image";
import styles from "../../../../styles/tabs.module.css";
import { useState } from "react";

const Users = ({ data }) => {
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
                        <th>Role</th>
                        <th>Member since</th>
                        <th>Last Active</th>
                        <th className={styles.align_center}>Status</th>
                        <th className={styles.align_center}>Action</th>
                    </tr>
                    {data.map((user, i) => {
                        return (
                            <tr key={i} className={styles.table_data}>
                                <td>
                                    <input
                                        type="checkbox"
                                        id={user.userID}
                                        value={user.userID}
                                        className={styles.check_box}
                                    />
                                    <label htmlFor={user.userID}>
                                        {user.userID}
                                    </label>
                                </td>
                                <td>
                                    <p>{user.name}</p>
                                </td>
                                <td>
                                    <p>
                                        <select defaultValue={user.role}>
                                            <option>{user.role}</option>
                                        </select>
                                    </p>
                                </td>
                                <td>
                                    <p>{user.memberSince}</p>
                                </td>
                                <td>
                                    <p>{user.lastActive}</p>
                                </td>
                                <td>
                                    <div className={styles.center}>
                                        <div
                                            className={`${styles.status} ${
                                                user.status.toLowerCase() ==
                                                "active"
                                                    ? styles.green
                                                    : styles.red
                                            }`}
                                        >
                                            <p>{user.status}</p>
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
                                                <span>User info</span>
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

export default Users;
