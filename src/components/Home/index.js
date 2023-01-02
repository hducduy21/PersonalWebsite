import styles from './Home.module.scss';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);
function Home() {
    const home = useSelector((state) => state.Language.home);
    return (
        <div className={cx('Wrapper')} id="home">
            <img className={cx('logo')} src={images.logo} alt=""></img>
            <img className={cx('background')} src={images.background} alt=""></img>
            <div className={cx('content')}>
                <h1>{home.title}</h1>
                <p>{home.slogan}</p>
            </div>
        </div>
    );
}

export default Home;
