import styles from './Project.module.scss';
import classNames from 'classnames/bind';
import ProjectItem from './ProjectItem';
import img from '~/assets/images';
const cx = classNames.bind(styles);

function Project() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>My Projects</h1>
            <div className={cx('content')}>
                <ProjectItem img={img.projectItem1} title="Digital wallet"></ProjectItem>
                <ProjectItem img={img.projectItem1} title="Digital wallet"></ProjectItem>
                <ProjectItem img={img.projectItem1} title="Digital wallet"></ProjectItem>
                <ProjectItem img={img.projectItem1} title="Digital wallet"></ProjectItem>
                <ProjectItem img={img.projectItem1} title="Digital wallet"></ProjectItem>
            </div>
        </div>
    );
}

export default Project;
