import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import Slider from './Slider';
const cx = classNames.bind(styles);

function Blog() {
    return (
        <div className={cx('wrapper')} id="blog">
            <h1 className={cx('title')}>Blogs</h1>
            <div className={cx('content')}>
                <Slider></Slider>
            </div>
        </div>
    );
}
export default Blog;
