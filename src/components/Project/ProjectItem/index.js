import styles from './ProjectItem.module.scss';
import classNames from 'classnames/bind';
import Modal from 'react-modal';
import React from 'react';
const cx = classNames.bind(styles);

const color = ['#87C691', '#C687BF', '#C68787', '#C6BF87', '#828BDA', '#4F8EC9'];

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        color: '#000000',
        padding: 0,
        marginTop: '10px',
        zIndex: 999,
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(209, 209, 209,0.4)',
        zIndex: 999,
    },
};
Modal.setAppElement('#root');

function ProjectItem({ project }) {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapperContent')} onClick={() => openModal()}>
                <div>
                    <img src={project.img} alt="Project"></img>
                </div>
                <div className={cx('title')} style={{ background: color[Math.floor(Math.random() * 6)] }}>
                    <p>{project.title}</p>
                </div>
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                <div>
                    <img src={project.img} alt="Project" style={{ width: '400px', margin: '0 0 20px 0 ' }}></img>
                </div>
                <div style={{ margin: '0 0 20px 10px ', lineHeight: '20px', width: '380px', textAlign: 'justify' }}>
                    <h3>{project.title}</h3>
                    <i>
                        Partner: {project.partner}
                        <br />
                        <br />
                    </i>
                    <table>
                        <tr>
                            <td>Front-End:</td>
                            <td>{project.front}</td>
                        </tr>
                        <tr>
                            <td>Back-End:</td>
                            <td>{project.back}</td>
                        </tr>
                        <tr>
                            <td>Orther:</td>
                            <td>{project.orther}</td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td style={{ fontSize: '10px' }}>{project.desc}</td>
                        </tr>
                        <tr>
                            <td>Github:</td>
                            <td>{project.github}</td>
                        </tr>
                        <tr>
                            <td>Link:</td>
                            <td>{project.deploy}</td>
                        </tr>
                    </table>
                </div>
            </Modal>
        </div>
    );
}

export default ProjectItem;
