import React from 'react'
import styles from './Distributor.module.css';
import top1 from '../../images/top1.svg';
import bottom1 from '../../images/bottom1.svg';

const Distributor = () => {

    return (
        <>
            <div className={styles.d_container} id='section4'>
                <div className={styles.d_left}>
                    <div className={styles.d_left_heading}>Become a Distributor</div>
                    <div className={styles.d_left_content}>
                        BENZ Packaging is the leading manufacturer and supplier of Industrial Supplies & Packaging products including Tapes, Strapping Solutions, and Sealing & Wrapping Machines.
                        <br /><br />
                        BENZ Packaging is the leading manufacturer and supplier of Industrial Supplies & Packaging products including Tapes, Strapping Solutions, and Sealing & Wrapping Machines.
                        <br /><br />
                        BENZ Packaging is the leading manufacturer and supplier of Industrial Supplies & Packaging products including Tapes, Strapping Solutions, and Sealing & Wrapping Machines.
                    </div>
                </div>
                <div className={styles.d_right}>
                    <div className={styles.top_img}>
                        <img src={top1} alt="" />
                    </div>
                    <div className={styles.bottom_img}>
                        <img src={bottom1} alt="" />
                    </div>
                    <div className={styles.join}>
                        Join Our Team
                    </div>
                </div>


                <div className={styles.d_mobile_right}>
                    <div className={styles.top_mobile_img}>
                        <img src={top1} alt="" />
                    </div>
                    <div className={styles.mobile_join}>
                        Join Our Team
                    </div>
                    <div className={styles.bottom_mobile_img}>
                        <img src={bottom1} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Distributor