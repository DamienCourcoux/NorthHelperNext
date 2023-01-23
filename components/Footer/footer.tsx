import styles from './footer.module.css';

import { FaFacebook, FaSnapchatSquare, FaDiscord } from 'react-icons/fa';

export default function Footer() {
    const currentTime = new Date();
    const year = currentTime.getFullYear();

    return (
        <footer className={styles.footer}>
            <nav className={styles.resaux}>
                <ul className="reseauxList">
                    <li className="reseauxListItem"><a href="https://m.facebook.com/profile.php?id=100085589310579" target="_blank" rel="noopener noreferrer" className="facebook reseauxListItemA" title='Facebook'><FaFacebook className="reseauxListItemSvg" /></a></li>
                    <li className="reseauxListItem"><a href="https://www.snapchat.com/add/north_helper?share_id=QzUzNzZBM0ItQzM5Mi00RkU3LThGRDEtOTc3RkU0NTE4MUU1&locale=fr_FR" target="_blank" rel="noopener noreferrer" className="snapchat reseauxListItemA" title='Snapchat'><FaSnapchatSquare className="reseauxListItemSvg" /></a></li>
                    <li className="reseauxListItem"><a href="https://discord.com/invite/N4Dnf4FMnM" target="_blank" rel="noopener noreferrer" className="discord reseauxListItemA" title='Discord'><FaDiscord className="reseauxListItemSvg" /></a></li>
                </ul>
                <p className={styles.copyright}>Copyright © {year} <span className="copyright__title northhelper">North Helper</span>. Tous droits réservés.</p>
                {/* <p className={styles.damiencourcoux}>Site réalisé par <a href="https://www.damiencourcoux.me" target="_blank" rel="noopener noreferrer" className={styles.damiencourcouxLink} title="Développeur Damien Courcoux">Damien Courcoux</a></p> */}
                <p className={styles.damiencourcoux}>Site réalisé par <span className={styles.damiencourcouxLink} title="Développeur Damien Courcoux">Damien Courcoux</span></p>
            </nav>
        </footer>
    );
}