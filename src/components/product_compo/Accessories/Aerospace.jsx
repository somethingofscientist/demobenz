import React from 'react'
import styles from './Aerospace.module.css';
import engine from '../../images/engine.svg';
import Slider from '../horizontal_slider/Slider';
import { Link } from 'react-router-dom';

const Aerospace = () => {
    const arr = [
        {
            number: "1",
            heading: "ACCESSORIES",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life."
        },
        {
            number: "2 ",
            heading: "INNER PACKAGING",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life."
        },
        {
            number: "3",
            heading: "OUTER PACKAGING",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life."
        },
        {
            number: "4",
            heading: "LOAD SECURING",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life."
        },
        {
            number: "5",
            heading: "HEAVY MACHINE PACKAGING",
            image: engine,
            isSlider: false,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life."
        },
        {
            number: "6",
            heading: "CONTRACT PACKAGING",
            image: engine,
            isSlider: false,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life."
        },
    ]
    return (
        <>
            {
                arr.map((item) => (
                    <div className={styles.automobile_container} id='section3'>
                        <div className={styles.auto_heading}>
                            <div className={styles.auto_number}>{item.number}</div>
                            <div className={styles.auto_letter}>{item.heading} </div>
                        </div>

                        <div className={styles.auto_img_container}>
                            <div className={styles.auto_img}>
                                <img src={item.image} alt="engine" />

                                <Link to="/descicants">
                                    <div className={styles.auto_pack}>
                                        Pack With Us
                                    </div>
                                </Link>
                            </div>
                            <div className={styles.auto_img_text}>{item.content}</div>
                        </div>

                        {
                            item.isSlider && <Slider />
                        }
                    </div>
                ))
            }
        </>
    )
}

export default Aerospace