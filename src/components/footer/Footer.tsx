import FacebookVector from '../../assets/FacebookVector.svg';
import InstaVector from '../../assets/instaVector.svg';
import LinkedinVector from '../../assets/linkedinVector.svg';
import TwitterVector from '../../assets/twitterVector.svg';
import styles from './Footer.module.css'; // Importando o módulo CSS

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerContent}>
        <div className={styles.section}>
          <div className={styles.leftColumn}>
            <h2 className={styles.heading}>Funiro.</h2>
            <p className={styles.address}>
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
            <div className={styles.socialMedia}>
              <ul className={styles.socialMediaList}>
                <li className={styles.socialMediaItem}>
                  <img src={FacebookVector} alt="Facebook" className="w-4 h-4" />
                </li>
                <li className={styles.socialMediaItem}>
                  <img src={InstaVector} alt="Instagram" className="w-4 h-4" />
                </li>
                <li className={styles.socialMediaItem}>
                  <img src={TwitterVector} alt="Twitter" className="w-4 h-4" />
                </li>
                <li className={styles.socialMediaItem}>
                  <img
                    src={LinkedinVector}
                    alt="LinkedIn"
                    className="w-4 h-4"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <div className="flex justify-between w-[353px] h-[312px]">
              <div className={styles.linksColumn}>
                <p className="mb-[55px] text-gray50">Links</p>
                <ul className={styles.linksList}>
                  <li>
                    <a href="" className="font-bold">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="" className="font-bold">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="" className="font-bold">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="" className="font-bold">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.helpColumn}>
                <p className="mb-[55px] text-gray50">Help</p>
                <ul className={styles.helpList}>
                  <li>
                    <a href="" className="font-bold">
                      Payment Options
                    </a>
                  </li>
                  <li>
                    <a href="" className="font-bold">
                      Returns
                    </a>
                  </li>
                  <li>
                    <a href="" className="font-bold">
                      Privacy Policies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.newsletterColumn}>
              <p className="text-gray50">Newsletter</p>
              <div className="flex items-center gap-4">
                <div className="flex-1 border-b border-gray-400">
                  <input
                    type="text"
                    placeholder="Enter Your Email Address"
                    className={styles.newsletterInput}
                  />
                </div>
                <button className={styles.newsletterButton}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className="border-t border-gray-300 mb-[35px]"></div>
          <p>2023 Furino. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
