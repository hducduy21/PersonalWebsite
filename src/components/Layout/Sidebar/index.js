import styles from './Sidebar.module.scss';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import Icon from '~/components/Layout/Icon';
import { useState } from 'react';

import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function Sidebar() {
    const [img, setImg] = useState([images.home1, images.profile, images.project, images.blog, images.contact]);
    let imgs = [images.home, images.profile, images.project, images.blog, images.contact];
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
                        <tr
                            onClick={(e) => {
                                window.location.href = '#home';
                                let tempState = imgs;
                                tempState[0] = images.home1;
                                setImg(tempState);
                            }}
                        >
                            <td className={cx('icon-page')}>
                                <img src={img[0]} alt="" id="imgHome"></img>
                            </td>
                            <td>
                                <p>Home</p>
                            </td>
                        </tr>
                        <tr
                            onClick={(e) => {
                                window.location.href = '#profile';
                                let tempState = imgs;
                                tempState[1] = images.profile1;
                                setImg(tempState);
                            }}
                        >
                            <td className={cx('icon-page')}>
                                <img src={img[1]} alt="" id="imgProfile"></img>
                            </td>
                            <td>
                                <p>Profile</p>
                            </td>
                        </tr>
                        <tr
                            onClick={(e) => {
                                window.location.href = '#project';
                                let tempState = imgs;
                                tempState[2] = images.project1;
                                setImg(tempState);
                            }}
                        >
                            <td className={cx('icon-page')}>
                                <img src={img[2]} alt="" id="imgProject"></img>
                            </td>
                            <td>
                                <p>Project</p>
                            </td>
                        </tr>
                        <tr
                            onClick={(e) => {
                                window.location.href = '#blog';
                                let tempState = imgs;
                                tempState[3] = images.blog1;
                                setImg(tempState);
                            }}
                        >
                            <td className={cx('icon-page')}>
                                <img src={img[3]} alt="" id="imgBlog"></img>
                            </td>
                            <td>
                                <p>Blog</p>
                            </td>
                        </tr>
                        <tr
                            onClick={(e) => {
                                window.location.href = '#contact';
                                let tempState = imgs;
                                tempState[4] = images.contact1;
                                setImg(tempState);
                            }}
                        >
                            <td className={cx('icon-page')}>
                                <img src={img[4]} alt="" id="imgContact"></img>
                            </td>
                            <td>
                                <p>Contact</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={cx('menu-social')}>
                <Icon ic={faFacebook} Size="xl" to="https://www.facebook.com/hducduy21" />
                <Icon ic={faInstagram} Size="xl" to="" />
                <Icon ic={faLinkedin} Size="xl" to="https://www.linkedin.com/in/hducduy21/" />
                <Icon ic={faGithub} Size="xl" to="https://github.com/hducduy21" />
            </div>
        </div>
    );
}

export default Sidebar;
