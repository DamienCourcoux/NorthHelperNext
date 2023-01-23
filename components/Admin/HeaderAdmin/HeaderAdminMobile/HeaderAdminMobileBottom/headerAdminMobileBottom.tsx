import styles from './headerAdminMobileBottom.module.css';
import NavLink from '../../../../navlink';
import { useRouter } from 'next/router';

import { FaHome, FaBoxes, FaUser } from 'react-icons/fa';
import { HiClipboardList } from 'react-icons/hi';

export default function HeaderAdminMobileBottom() {
    const router = useRouter();

    return (
        <header className={styles.headerAdminMobileBottom}>
            <nav className={styles.menu}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin' ? styles.active : ''} href="/admin" title='Accueil'>
                            <FaHome />
                        </NavLink>
                        </li>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin/packs' ? styles.active : ''} href="/admin/packs" title='Packs'>
                            <FaBoxes />
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin/services' ? styles.active : ''} href="/admin/services" title='Services'>
                            <HiClipboardList />
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin/clients' ? styles.active : ''} href="/admin/clients" title='Clients'>
                            <FaUser />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}