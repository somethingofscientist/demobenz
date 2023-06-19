import React, { useState } from "react";
import styles from "./Why.module.css";
import team from "../../images/team.svg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Why = () => {
  const [counter1, setCounter1] = useState(false);
  const [counter2, setCounter2] = useState(false);
  const [counter3, setCounter3] = useState(false);
  const [counter4, setCounter4] = useState(false);

  return (
    <>
      <div className={styles.right}>
        <div className={styles.map}>
          <div className={styles.map_flexbox}>
            <div className={styles.map_heading}>Why to choose us.</div>
            <div className={styles.map_sub_heading}>
              Choosing our packaging means making a positive contribution to the planet. We believe in the power of collective action, and by opting for our eco-friendly materials, you join us in reducing waste and preserving natural resources. Together, we can create a more sustainable future.
            </div>
          </div>
          <div className={styles.global_container}>
            <div className={styles.global_image_text_container}>
              <p>
              At BENZ Packaging, we believe in fostering a culture of growth and development. We provide ample opportunities for professional advancement, encouraging our team members to expand their knowledge, skills, and expertise. As we continue to explore new avenues in the packaging industry, your contributions will play a vital role in shaping the future of our organization.
              </p>

              <div className={styles.pack_button}>JOIN OUR TEAM</div>
            </div>
            <div className={styles.global_image_container}>
              <img src={team} alt="man" />
            </div>
          </div>
          <div className={styles.why_para}>
            Our team members work tirelessly alongside our clients, partners,
            and subcontractors to push the boundaries of the packaging industry.
            We appreciate every opportunity we're given to take on a new project
            and bring it to life.
          </div>

          <div className={styles.counter_section}>
            <div className={styles.counter}>
              <div className={styles.counter_subheading}>
                <ScrollTrigger
                  onEnter={() => setCounter1(true)}
                  onExit={() => setCounter1(false)}
                >
                  <h1>
                    {counter1 && (
                      <CountUp start={0} end={1} duration={0} delay={0} />
                    )}{" "}
                    +
                  </h1>
                </ScrollTrigger>
                <div className={styles.counter_heading}>
                  Manufacturing Units
                </div>
                <p>
                  Manufacturing units play a vital role in creating products
                  that cater to the needs of consumers
                </p>
              </div>
            </div>
            <div className={styles.counter2}>
              <div className={styles.counter_subheading}>
                <ScrollTrigger
                  onEnter={() => setCounter2(true)}
                  onExit={() => setCounter2(false)}
                >
                  <h1>
                    {counter2 && (
                      <CountUp start={0} end={1} duration={1} delay={0} />
                    )}{" "}
                    +
                  </h1>
                </ScrollTrigger>
                <div className={styles.counter_heading}>Warehouses</div>
                <p>
                  Warehouses are essential facilities for storing and organizing
                  goods before they are distributed to customers.
                </p>
              </div>
            </div>
            <div className={styles.counter}>
              <div className={styles.counter_subheading}>
                <ScrollTrigger
                  onEnter={() => setCounter3(true)}
                  onExit={() => setCounter3(false)}
                >
                  <h1>
                    {counter3 && (
                      <CountUp start={0} end={500} duration={1} delay={0} />
                    )}{" "}
                    +
                  </h1>
                </ScrollTrigger>
                <div className={styles.counter_heading}>Happy Customers</div>
                <p>
                  Happy customers are the lifeblood of any successful business.
                </p>
              </div>
            </div>
            <div className={styles.counter2}>
              <div className={styles.counter_subheading}>
                <ScrollTrigger
                  onEnter={() => setCounter4(true)}
                  onExit={() => setCounter4(false)}
                >
                  <h1>
                    {counter4 && (
                      <CountUp start={0} end={50} duration={1} delay={0} />
                    )}{" "}
                    +
                  </h1>
                </ScrollTrigger>
                <div className={styles.counter_heading}>Products</div>
                <p>
                  Products are goods or services that are created and offered
                  for sale to meet the needs and wants of customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
