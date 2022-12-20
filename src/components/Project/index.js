import styles from './Project.module.scss';
import classNames from 'classnames/bind';
import project from '~/assets/images/project';
import ProjectItem from './ProjectItem';

const cx = classNames.bind(styles);

function Project() {
    return (
        <div className={cx('wrapper')} id="project">
            <h1 className={cx('title')}>My Projects</h1>
            <div className={cx('content')}>
                <ProjectItem project={project.project1}></ProjectItem>
                <ProjectItem project={project.project1}></ProjectItem>
                <ProjectItem project={project.project1}></ProjectItem>
                <ProjectItem project={project.project1}></ProjectItem>
                <ProjectItem project={project.project1}></ProjectItem>
            </div>
        </div>
    );
}

export default Project;
