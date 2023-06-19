import React from 'react'
import styles from './Submit.module.css';
import { HiOutlineDownload } from 'react-icons/hi';


const Submit = () => {
    return (
        <>
            <div className={styles.submit_container}>
                <div className={styles.submit_heading}>
                    Order a free consultation - our experts will select the most effective solution
                </div>
                <div className={styles.submit_flex_box}>
                    <div className={styles.input_email}>
                        <input
                            type="text"
                            placeholder='Phone number or email*'
                        />
                    </div>
                    <div className={styles.download}>
                        <HiOutlineDownload size={20} />
                        <div className={styles.d_para}>Download Broucher</div>
                    </div>
                </div>
                <div className={styles.submit_btn}>
                    Submit
                </div>
            </div>
        </>
    )
}

export default Submit