import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import data from '~/data';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Slider() {
    const [slide, setSlide] = useState(0);
    const curr = data[slide];
    const lan = useSelector((state) => state.Language.lan);

    // const changeSlide = (e) => {
    //     console.log(e.target.value);
    // };
    return (
        <div className={cx('wrapper', 'fade')}>
            <div className={cx('content')}>
                <h1 className={cx('title')}>{lan === 'vi' ? curr.title_vi : curr.title}</h1>
                <p className={cx('text')}>{lan === 'vi' ? curr.text_vi : curr.text}</p>
            </div>
            <div className={cx('dots')}>
                {data.map((item, index) => {
                    return (
                        <FontAwesomeIcon
                            key={index}
                            onClick={(e) => {
                                setSlide(index);
                            }}
                            icon={faCircle}
                            style={index === slide && { color: '#636e72' }}
                        ></FontAwesomeIcon>
                    );
                })}
            </div>
        </div>
    );
}

export default Slider;
