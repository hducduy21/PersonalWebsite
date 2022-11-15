import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import data from '~/data';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Slider() {
    const [slide, setSlide] = useState(0);
    const curr = data[slide];
    console.log('slide: ' + slide);
    // const changeSlide = (e) => {
    //     console.log(e.target.value);
    // };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h1 className={cx('title')}>{curr.title}</h1>
                <p className={cx('text')}>{curr.text}</p>
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
