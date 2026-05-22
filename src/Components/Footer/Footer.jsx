import styles from './Footer.module.css';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { CiTwitter } from "react-icons/ci";

function Footer() {
  return (
    <div className={styles.footer}>
      <a href="#">© 2026 Estin Dojo. All rights reserved.</a>
    </div>
  );
}

export default Footer;