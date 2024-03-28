"use client";

import Image from "next/image";
import styles from "../../../../styles/tabs.module.css";
import { useState } from "react";

const Inventory = ({ data }) => {
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
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Discounted Price</th>
                        <th className={styles.align_center}>Status</th>
                        <th className={styles.align_center}>Action</th>
                    </tr>
                    {data.map((inventory, i) => {
                        console.log(inventory.category);
                        return (
                            <tr key={i} className={styles.table_data}>
                                <td>
                                    <input
                                        type="checkbox"
                                        id={inventory.productID}
                                        value={inventory.productID}
                                        className={styles.check_box}
                                    />
                                    <label htmlFor={inventory.productID}>
                                        {inventory.productID}
                                    </label>
                                </td>
                                <td>
                                    <p>{inventory.name}</p>
                                </td>
                                <td>
                                    <p>{inventory.category}</p>
                                </td>
                                <td>
                                    <p>{inventory.quantity}</p>
                                </td>
                                <td>
                                    <p>{inventory.price}</p>
                                </td>
                                <td>
                                    <p>{inventory.dPrice}</p>
                                </td>
                                <td>
                                    <div className={styles.center}>
                                        <div
                                            className={`${styles.status} ${
                                                inventory.status.toLowerCase() ==
                                                "low stock"
                                                    ? styles.yellow
                                                    : inventory.status.toLowerCase() ==
                                                      "in stock"
                                                    ? styles.green
                                                    : styles.red
                                            }`}
                                        >
                                            <p>{inventory.status}</p>
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
                                            <hr className={styles.line} />
                                            <div>
                                                <Image
                                                    src="/icons/info.svg"
                                                    width={18}
                                                    height={18}
                                                    alt="info"
                                                />
                                                <span>Order info</span>
                                            </div>
                                            <hr className={styles.line} />
                                            <div>
                                                <Image
                                                    src="/icons/remove.svg"
                                                    width={18}
                                                    height={18}
                                                    alt="remove"
                                                />
                                                <span>Delete</span>
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

export default Inventory;
