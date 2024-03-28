import { useState } from "react";
import styles from "../../../styles/tabs.module.css";
import Image from "next/image";

const RewardTable = () => {
    const [data, setData] = useState([
        {
            userID: "#4589",
            name: "John Doe",
            tRewards: "3900 Points",
            sRewards: "1900 Points",
            pRewards: "2000 Points",
            status: "Rejected",
        },
        {
            userID: "#4590",
            name: "John Doe",
            tRewards: "2400 Points",
            sRewards: "1800 Points",
            pRewards: "600 Points",
            status: "Approved",
        },
        {
            userID: "#4589",
            name: "John Doe",
            tRewards: "200 Points",
            sRewards: "100 Points",
            pRewards: "100 Points",
            status: "Approved",
        },
        {
            userID: "#4590",
            name: "John Doe",
            tRewards: "200 Points",
            sRewards: "100 Points",
            pRewards: "100 Points",
            status: "Approved",
        },
        {
            userID: "#4590",
            name: "John Doe",
            tRewards: "200 Points",
            sRewards: "100 Points",
            pRewards: "100 Points",
            status: "Rejected",
        },
    ]);

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
                        <th>Total Rewards</th>
                        <th>Payment Rewards</th>
                        <th>Survey Rewards</th>
                        <th className={styles.align_center}>Status</th>
                        <th className={styles.align_center}>Action</th>
                    </tr>
                    {data.map((reward, i) => {
                        return (
                            <tr key={i} className={styles.table_data}>
                                <td>
                                    <input
                                        type="checkbox"
                                        id={reward.userID}
                                        value={reward.userID}
                                        className={styles.check_box}
                                    />
                                    <label htmlFor={reward.userID}>
                                        {reward.userID}
                                    </label>
                                </td>
                                <td>
                                    <p>{reward.name}</p>
                                </td>
                                <td>
                                    <p>{reward.tRewards}</p>
                                </td>
                                <td>
                                    <p>{reward.pRewards}</p>
                                </td>
                                <td>
                                    <p>{reward.sRewards}</p>
                                </td>
                                <td>
                                    <div className={styles.center}>
                                        <div
                                            className={`${styles.status} ${
                                                reward.status.toLowerCase() ==
                                                "approved"
                                                    ? styles.green
                                                    : styles.red
                                            }`}
                                        >
                                            <p>{reward.status}</p>
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
                                                <span>View reward</span>
                                            </div>
                                            <hr className={styles.line} />
                                            <div>
                                                <Image
                                                    src="/icons/remove.svg"
                                                    width={18}
                                                    height={18}
                                                    alt="remove"
                                                />
                                                <span>Remove user</span>
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

export default RewardTable;
