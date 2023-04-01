"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import iphoneherophoto from "../public/iphoneherophoto.jpeg";
import iphoneherophoto2 from "../public/iphoneherophoto2.jpeg";
import flowergirl from "../public/flowergirl.jpeg"
import iphonechip from "../public/iphonechip.jpeg"
import bg from "../public/basketballGirl.jpg";
import alwaysOnDisplay from "../public/alwaysOnDisplay.jpeg"
import tiltedPhone from "../public/tiltedphone.jpeg"
import waterResistance from "../public/waterResistance.jpeg"
import cameraGuy from "../public/cameraGuy.jpeg"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className={styles.navbar}>
        <div>iPhone 14 pro</div>
        <div className={styles.navlinks}>
          <span>Overview</span>
          <span>Switch from Android to iPhone</span>
          <span>Specs</span>
          <span
            style={{
              backgroundColor: "#0071E3",
              width: "50px",
              height: "20px",
              textAlign: "center",
              borderRadius: "20px",
            }}
          >
            Buy
          </span>
        </div>
      </div>
      <div className={styles.weed}></div>
      <div className={styles.proBeyond}>
        <div>Pro.Beyond.</div>
        <div></div>
      </div>
      <div className={styles.miniScreen}>
        <motion.video
          transition={{
            duration: 1,
            delay: 3,
          }}
          initial={{
            opacity: 1

          }}
          animate={{
            opacity: 0

          }}
          autoPlay muted>
          <source src="/smallerScreenIphone.mp4" type="video/mp4" />
        </motion.video>
        <motion.div
          transition={{
            duration: 1,
            delay: 3,
          }}
          initial={{
            zIndex: -1

          }}
          animate={{
            zIndex: 2

          }} className={styles.miniIphone}>
          <Image src={iphoneherophoto} className={styles.miniIphoneImage} />
        </motion.div>
      </div>
      <div className={styles.heroScreen}>
        <motion.div
          transition={{
            duration: 1,
            delay: 4,
          }}
          initial={{
            opacity: 0,
            y: 100,
            x: 280,
          }}
          animate={{
            opacity: 1,
            y: 0,
            x: 280,
          }}
        >
          <Image
            src={iphoneherophoto}
            alt="Picture of the author"
            className={styles.photo}
          />
        </motion.div>

        <motion.video
          transition={{
            duration: 1,
            delay: 3,
          }}
          initial={{
            opacity: 1

          }}
          animate={{
            opacity: 0

          }}
          autoPlay muted className={styles.video}>
          <source src="/iphoneherovideo.mp4" type="video/mp4" />
        </motion.video>
      </div>
      <div className={styles.secondScreen}>
        <div className={styles.boxOne}>
          <span className={styles.spanOne}> iPhone 14 Pro and iPhone 14 Pro Max</span>
          <span className={styles.spanTwo}>From $999 or $41.62/mo. for 24 mo. before trade‑in*</span>
          <span className={styles.spanThree}>Buy</span>
        </div>
        <div className={styles.boxTwo}>
          <div className={styles.colOne}>
            <div className={styles.card}>
              <div>
                <span style={{ color: "#E28AFF" }}>Meet</span>
                <span style={{ color: "#C45EFF" }}>Dynamic Island</span>
              </div>
              <motion.div
                transition={{
                  duration: 1,
                  // delay: 4,
                }}
                initial={{
                  y: 100,
                  opacity: 0.5
                }}
                whileInView={{
                  y: 0,
                  opacity: 1
                }} viewport={{ once: true }}>
                <Image src={iphoneherophoto2} />

              </motion.div>
            </div>
          </div>
          <div className={styles.colTwo}>
            <div className={styles.cardOne}>
              <motion.div
                transition={{
                  duration: 1,
                  // delay: 4,
                }}
                initial={{
                  y: 100,
                  opacity: 0.5
                }}
                whileInView={{
                  y: 0,
                  opacity: 1
                }} viewport={{ once: true }}>
                <Image src={flowergirl} className={styles.flowerGirl} />

              </motion.div>
              <div className={styles.cameraDeets}>
                <span>48MP Main camera.</span>
                <span> Mind-blowing detail.</span>

              </div>
            </div>
            <div className={styles.cardOne}>

              <motion.div transition={{
                duration: 1,
                // delay: 4,
              }}
                initial={{
                  x: 20,
                  zIndex: 2
                }}
                whileInView={{
                  y: 180
                }} viewport={{ once: true }}
                >
                <Image src={iphonechip} className={styles.iphoneChip} />
              </motion.div>
              <div className={styles.chipDeets}>
                <span style={{ color: "#F5A6FF" }}>The</span>
                <span style={{ color: "#D679FF" }}>mastermind</span>
                <span style={{ color: "#BF56FF" }}>behind it all.</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxFour}>
          <div className={styles.colOne}>
            <div className={styles.card}>
                <span>a battery that's</span>
                <div>
                  <span>all in,</span>
                  <span style={{margin:20}}>all day.</span>
                </div>
            </div>
          </div>
          <div className={styles.colTwo}>
            <div className={styles.card}>

            </div>
          </div>
        </div>
        <div className={styles.boxThree}>
          <div className={styles.colOne}>
            <div className={styles.cardOne} style={{ backgroundImage: `url(${bg.src})` }}>
              <motion.video

                autoPlay muted className={styles.basketballVideo}>
                <source src="/basketball.mp4" type="video/mp4" />
              </motion.video>

            </div>
          </div>
          <div className={styles.colTwo}>
            <div className={styles.card}>

              <div className={styles.alwaysOnDeets}>
                <span style={{ color: "#E28AFF" }}>Always-On display.</span>
                <span style={{ color: "#E28AFF" }}>
                  A subtle way to stay
                </span>
                <span style={{ color: "#E28AFF" }}>in the know.
                </span>
              </div>
              <motion.div  
              transition={{
                duration: 1,
                // delay: 4,
              }}
                initial={{
                  y:200,
                  zIndex: 2
                }}
                whileInView={{
                  y: 30
                }} viewport={{ once: true }}
              className={styles.alwaysOnDisplay} style={{ backgroundImage: `url(${alwaysOnDisplay.src})` }}>

              </motion.div>
            </div>

          </div>
        </div>
        <div className={ styles.boxFive}>
                <div  className={styles.colOne}>
                  <div className={styles.card}>
                    <div className={styles.text}>
                        <span>Cermaic Shield</span>
                        <span style={{fontSize:"200%"}}>Tougher than any</span>
                        <span style={{fontSize:"200%"}}> smartphone glass.</span>
                    </div>
                    <motion.div 
                    transition={{
                duration: 1,
                // delay: 4,
              }}
                initial={{
                  y:200,
                  zIndex: 2
                }}
                whileInView={{
                  y: 50
                }} viewport={{ once: true }}
              className={styles.tiltedPhone} style={{ backgroundImage: `url(${tiltedPhone.src})` }}></motion.div>
                  </div>
                </div>
                <div className={styles.colTwo}>
                  <div className={styles.cardOne}>
                    <motion.div 
                    style={{ backgroundImage: `url(${waterResistance.src})` }} className={styles.waterResistance}></motion.div>
                  </div>
                  <div className={styles.cardTwo}>
                    <div>A camera in a class by itselfie.</div>
                  <motion.div 
                  transition={{
                    duration: 1,
                    // delay: 4,
                  }}
                    initial={{
                      x:200,
                      y:15,
                      zIndex: 2
                    }}
                    whileInView={{
                      x: 50
                    }} viewport={{ once: true }}
                    style={{ backgroundImage: `url(${cameraGuy.src})` }} className={styles.cameraGuy}></motion.div>
                  </div>
                </div>
        </div>
      </div>
    </main>
  );
}
