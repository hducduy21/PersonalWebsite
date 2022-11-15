import styles from './Layout.module.scss';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
import Home from '~/components/Home';
import Profile from '~/components/Profile';
import Project from '~/components/Project';
import Blog from '~/components/Blog';
import Contact from '~/components/Contact';

const cx = classNames.bind(styles);
function Layout() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('leftbar')}>
                <Sidebar></Sidebar>
            </div>
            <div className={cx('rightbar')}>
                <Home></Home>
                <Profile></Profile>
                <Project></Project>
                <Blog></Blog>
                <Contact></Contact>
            </div>
        </div>
    );
}

export default Layout;
