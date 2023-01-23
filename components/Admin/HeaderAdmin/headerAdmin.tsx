import styles from './headerAdmin.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NavLink from '../../navlink';
import { useDispatch } from 'react-redux';

import { createHandleLogout } from '../../../redux/reducer/reducerAdmin';

import petitBonhommeSolo from '../../../public/petitBonhommeSolo.png';

import { FaHome, FaBoxes, FaUser, FaUserTimes } from 'react-icons/fa';
import { HiClipboardList } from 'react-icons/hi';

export default function HeaderAdmin() {
    const pseudo = sessionStorage.getItem("pseudo");

    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(createHandleLogout());
        router.push('/');
    }

    return (
        <header className={styles.headerAdmin}>
            <div className={styles.profil}>
                <div className={styles.profilAvatar}>
                    <Image className={styles.avatar} src={petitBonhommeSolo} alt="avatar de l'admin du site North Helper" />
                </div>
                <p className={`${styles.pseudo} northhelper`}>Bienvenue <br />{pseudo}</p>
            </div>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin' ? styles.active : ''} href="/admin" title="Accueil">
                            <span>
                                Accueil <FaHome />
                            </span>
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin/packs' ? styles.active : ''} href="/admin/packs" title="Packs">
                            <span>
                                Packs <FaBoxes />
                            </span>
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin/services' ? styles.active : ''} href="/admin/services" title="Services">
                            <span>
                                Services <HiClipboardList />
                            </span>
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin/clients' ? styles.active : ''} href="/admin/clients" title="Clients">
                            <span>
                                Clients <FaUser />
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className={styles.logoutList}>
                    <li className={styles.logoutListItem}>
                        <p onClick={handleLogout} title="Déconnexion">Déconnexion <FaUserTimes /></p>
                    </li>
                </ul>
            </nav>
        </header>
    )
}