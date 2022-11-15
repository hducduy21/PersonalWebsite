import styles from './Sidebar.module.scss';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import Icon from '~/components/Layout/Icon';

import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu_info')}>
                <img src={images.circle_logo} alt="duy"></img>
                <h3>D U C&ensp;D U Y&ensp;H O A N G</h3>
                <p>Software engineer</p>
            </div>
            <div className={cx('menu-body')}>
                <table>
                    <tbody>
                        <tr href="#home">
                            <td className={cx('icon-page')}>
                                <img src={images.home1} alt=""></img>
                            </td>
                            <td>
                                <p>Home</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('icon-page')}>
                                <img src={images.profile} alt=""></img>
                            </td>
                            <td>
                                <p>Profile</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('icon-page')}>
                                <img src={images.project} alt=""></img>
                            </td>
                            <td>
                                <p>Project</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('icon-page')}>
                                <img src={images.blog} alt=""></img>
                            </td>
                            <td>
                                <p>Blog</p>
                            </td>
                        </tr>
                        <tr>
                            <td className={cx('icon-page')}>
                                <img src={images.contact} alt=""></img>
                            </td>
                            <td>
                                <p>Contact</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={cx('menu-social')}>
                <Icon ic={faFacebook} Size="xl" />
                <Icon ic={faInstagram} Size="xl" />
                <Icon ic={faLinkedin} Size="xl" />
                <Icon ic={faGithub} Size="xl" />
            </div>
        </div>
    );
}

export default Sidebar;
