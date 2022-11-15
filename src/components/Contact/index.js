import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import Icon from '~/components/Layout/Icon';

import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper')} id="contact">
            <h1 className={cx('title')}>Contact</h1>
            <div className={cx('content')}>
                <h2>Please contact me by:</h2>
                <div className={cx('menu-social')}>
                    <Icon ic={faFacebook} Size="2x" />
                    <Icon ic={faInstagram} Size="2x" />
                    <Icon ic={faLinkedin} Size="2x" />
                    <Icon ic={faGithub} Size="2x" />
                </div>
                <h2>Or leave me a message:</h2>
                <div className={cx('sendMess')}>
                    <textarea></textarea>
                    <button>
                        <Icon ic={faPaperPlane} Size="2x" className={cx('icon')} />
                    </button>
                </div>
                <h1 className={cx('sayBye')}>Thanks for coming here!</h1>
                <h6>by hducduy21</h6>
            </div>
        </div>
    );
}

export default Contact;
