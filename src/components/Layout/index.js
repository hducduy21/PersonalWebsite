import styles from './Layout.module.scss';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Layout() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('leftbar')}>
                <Sidebar></Sidebar>
            </div>
            <div className={cx('rightbar')}></div>
        </div>
    );
}

export default Layout;
