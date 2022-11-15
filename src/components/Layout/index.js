import styles from './Layout.module.scss';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
import Home from '~/components/Home';
import Profile from '~/components/Profile';
import Project from '~/components/Project';
import Blog from '~/components/Blog';
import Contact from '~/components/Contact';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function scrollT() {
    document.getElementById('imgContact').setAttribute('src', images.contact);
    document.getElementById('imgHome').setAttribute('src', images.home);
    document.getElementById('imgProfile').setAttribute('src', images.profile);
    document.getElementById('imgProject').setAttribute('src', images.project);
    document.getElementById('imgBlog').setAttribute('src', images.blog);

    let rb = document.getElementById('rightBar');
    console.log(rb.scrollTop);
    if (rb.scrollTop > 2700) {
        document.getElementById('imgContact').setAttribute('src', images.contact1);
    } else if (rb.scrollTop > 2100) {
        document.getElementById('imgBlog').setAttribute('src', images.blog1);
    } else if (rb.scrollTop > 1400) {
        document.getElementById('imgProject').setAttribute('src', images.project1);
    } else if (rb.scrollTop > 400) {
        document.getElementById('imgProfile').setAttribute('src', images.profile1);
    } else {
        document.getElementById('imgHome').setAttribute('src', images.home1);
    }
}
function Layout() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('leftbar')}>
                <Sidebar></Sidebar>
            </div>
            <div className={cx('rightbar')} id="rightBar" onScroll={scrollT}>
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
