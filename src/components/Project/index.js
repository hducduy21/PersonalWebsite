import styles from './Project.module.scss';
import classNames from 'classnames/bind';
import project from '~/assets/images/project';
import ProjectItem from './ProjectItem';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Project() {
    const context = useSelector((state) => state.Language.project);
    return (
        <div className={cx('wrapper')} id="project">
            <h1 className={cx('title')}>{context.title}</h1>
            <div className={cx('content')}>
                <ProjectItem project={context.lan === 'vi' ? project.project1_vi : project.project1}></ProjectItem>
                <ProjectItem project={context.lan === 'vi' ? project.project1_vi : project.project1}></ProjectItem>
                <ProjectItem project={context.lan === 'vi' ? project.project1_vi : project.project1}></ProjectItem>
                <ProjectItem project={context.lan === 'vi' ? project.project1_vi : project.project1}></ProjectItem>
                <ProjectItem project={context.lan === 'vi' ? project.project1_vi : project.project1}></ProjectItem>
            </div>
        </div>
    );
}

export default Project;
