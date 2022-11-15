import styles from './Home.module.scss';
import images from '~/assets/images';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('Wrapper')}>
            <img className={cx('logo')} src={images.logo} alt=""></img>
            <img className={cx('background')} src={images.background} alt=""></img>
            <div className={cx('content')}>
                <h1>I’m Hoang Duc Duy</h1>
                <p>
                    "It’s better to cross the line and suffer the consequences than to just stare at the line for the
                    rest of your life"
                </p>
            </div>
        </div>
    );
}

export default Home;
