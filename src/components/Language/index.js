import styles from './Language.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';

const cx = classNames.bind(styles);

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        color: '#c8d6e5',
        padding: '0',
        marginTop: '10px',
        zIndex: 999,
        overflow: 'hidden',
        backgroundColor: '#01a3a4',
        borderColor: '#01a3a4',
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(82, 82, 82,0.4)',
        zIndex: 999,
    },
};

Modal.setAppElement('#root');
function Languages() {
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.Language.lan);
    const [leftCheck, setleftcheck] = useState(lan === 'vi' ? 'checked' : 'unchecked');
    const [rightCheck, setrightcheck] = useState(lan === 'en' ? 'checked' : 'unchecked');

    const [modalIsOpen, setIsOpen] = useState(window.innerWidth < 830 ? true : false);
    console.log(window.innerWidth + '----------');

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className={cx('wrapper')}>
            <span
                className={cx('left', leftCheck)}
                onClick={() => {
                    dispatch({ type: 'TO_VI' });
                    setleftcheck('checked');
                    setrightcheck('unchecked');
                }}
            >
                VI
            </span>
            <span
                className={cx('right', rightCheck)}
                onClick={() => {
                    dispatch({ type: 'TO_EN' });
                    setleftcheck('unchecked');
                    setrightcheck('checked');
                }}
            >
                ENG
            </span>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                <div
                    style={{
                        padding: '0 10px',
                        margin: '5px 0',
                        lineHeight: '20px',
                        width: '100%',
                        textAlign: 'justify',
                    }}
                >
                    <h3 style={{ display: 'inline', fontSize: '18px' }}>Khuyến nghị</h3>
                    <FontAwesomeIcon
                        icon={faXmark}
                        style={{ display: 'inline', float: 'right', fontSize: '18px' }}
                        onClick={closeModal}
                    ></FontAwesomeIcon>
                    <h4 style={{ marginTop: '7px', fontSize: '15px' }}>
                        Bạn nên sử dụng PC/laptop để trải nghiệm web một cách tốt nhất
                        <br />
                        You should use a PC/laptop for the best web experience
                    </h4>
                    <span
                        style={{
                            float: 'right',
                            padding: '4px 10px',
                            backgroundColor: 'white',
                            fontSize: '15px',
                            borderRadius: '5px',
                            color: '#01a3a4',
                            marginBottom: '5px',
                            cursor: 'pointer',
                        }}
                        onClick={closeModal}
                    >
                        OK
                    </span>
                </div>
            </Modal>
        </div>
    );
}

export default Languages;
