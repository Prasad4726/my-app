import './App.css';
import statue from './statue.png';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@uidotdev/usehooks";

function App() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [showInfo, setShowInfo] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const toggleInfo = () => {
    setShowInfo(prevShowInfo => !prevShowInfo);
  };

  const toggleDescription = () => {
    setShowFullDescription(prevShowFullDescription => !prevShowFullDescription);
  };

  useEffect(() => {
    if (isSmallDevice) {
      setShowInfo(isSmallDevice)
    }
  }, [isSmallDevice])

  const sidebarDesktopVariant = {
    close: {
      width: 0,
      opacity: 0
    },
    open: {
      width: 360,
      opacity: 1,
    }
  }

  const sidebarMobileVariant = {
    close: null,
    open: {
      width: '100%'
    }
  }

  return (
    <div className="Product-section">
      <div className={`product-container ${showInfo ? '' : 'full-view'}`}>
        <AnimatePresence>
          {showInfo && (
            <motion.div
              key="product-info-container"
              className="container"
              variants={isSmallDevice ? sidebarMobileVariant : sidebarDesktopVariant}
              initial="close"
              animate="open"
              exit="close"
              transition={{ ease: "easeOut", duration: 0.5 }}
            >

              <div class="product-info">
                <div className="back-button" onClick={toggleInfo}>
                  <i className="ri-arrow-left-s-line"></i>
                </div>
                <h1>MAITREYA BUDDHA IN GESTURE OF FEARLESSNESS (ABHAYA MUDRA)</h1>
                <div className="icons">
                  <div className="icon-item">
                    <i className="ri-heart-line"></i>
                    <p>0</p>
                  </div>
                  <div className="icon-item">
                    <i className="ri-share-line"></i>
                    <p>120</p>
                  </div>
                  <div className="icon-item">
                    <i className="ri-eye-line"></i>
                    <p>27</p>
                  </div>
                </div>
                <div className="product-specifications">
                  <p>Dynasty: <strong>Ahichchhatra</strong></p>
                  <p>Period: <strong>200 CE</strong></p>
                  <p>Material: <strong>Sandstone</strong></p>
                  <p>Location: <strong>National Museum</strong></p>
                </div>
                <div className="product-description">
                  <h2>Description:</h2>
                  <motion.p>Maitreya, the future Buddha to be, resides in the Tushita heaven as a bodhisattva waiting to
                    redeem humanity. In Buddhism, Maitreya is the eighth Buddha, a successor of the seven historical
                    Buddhas (sapta-manushi Buddhas). The Digha Nikaya mentions, Maitreya Buddha will be born in
                    Ketumati, in present-day Varanasi, Uttar Pradesh. As a bodhisattva, Maitreya wears a heavily
                    adorned with earrings, wristlets, necklaces, and an amulet.</motion.p>
                </div>
                <button className="read-more" onClick={toggleDescription}><i className="ri-arrow-right-line"></i> {showFullDescription ? 'Read Less' : 'Read More'}</button>
                <div className="cta-buttons">
                  <button className="cta" type="button">Add to Collection</button>
                  <button className="cta btn-outline" type="button">Souvenir</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className={`product-img ${showInfo ? '' : 'full-image'}`} >
          <img src={statue} alt="Buddha" width={150} />
          <div className="toggle-button" onClick={toggleInfo}>
            <i className={`ri-arrow-${showInfo ? 'left' : 'right'}-double-line`}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
