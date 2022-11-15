import styles from './ProjectItem.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const color = ['#87C691', '#C687BF', '#C68787', '#C6BF87', '#828BDA', '#4F8EC9'];

function ProjectItem({ img, title }) {
    return (
        <div className={cx('wrapper')}>
            <div>
                <img src={img} alt="Project"></img>
            </div>
            <div className={cx('title')} style={{ background: color[Math.floor(Math.random() * 6)] }}>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default ProjectItem;
