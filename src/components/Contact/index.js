import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import Icon from '~/components/Layout/Icon';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Contact() {
    const template =
        'Chào Duy, \n   Tôi tên là: \n   Tôi và bạn có mối quan hệ: \n   Liệu bạn có biết tôi không? \n   Tôi viết cái này để nói với bạn một điều là:   \n   Đùa thôi, xóa viết lại đeeee! :))\nTrân trọng. :) <3';

    return (
        <div className={cx('wrapper')} id="contact">
            <h1 className={cx('title')}>Contact</h1>
            <div className={cx('content')}>
                <h2>Please contact me by:</h2>
                <div className={cx('menu-social')}>
                    <Icon ic={faFacebook} Size="2x" to="https://www.facebook.com/hducduy21" />
                    <Icon ic={faInstagram} Size="2x" to="" />
                    <Icon ic={faLinkedin} Size="2x" to="https://www.linkedin.com/in/hducduy21/" />
                    <Icon ic={faGithub} Size="2x" to="https://github.com/hducduy21" />
                </div>
                <h2>Or leave me a message:</h2>
                <div className={cx('sendMess')}>
                    <textarea id="areatext" defaultValue={template}></textarea>
                    <div
                        className={cx('sendSubmit')}
                        onClick={() => {
                            emailjs
                                .send(
                                    'service_h472use',
                                    'template_b8yyhho',
                                    {
                                        message: document.getElementById('areatext').value,
                                    },
                                    'FGqWBNzBFfLbhqofZ',
                                )
                                .then(
                                    (response) => {
                                        toast('Gửi thành công');
                                    },
                                    (error) => {
                                        toast('Gửi thất bại');
                                    },
                                );
                        }}
                    >
                        <FontAwesomeIcon icon={faPaperPlane} size="2x" className={cx('icon')} />
                    </div>
                </div>
                <h1 className={cx('sayBye')}>Thanks for coming here!</h1>
                <h6>by hducduy21</h6>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Contact;
