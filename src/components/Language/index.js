import styles from './Language.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const cx = classNames.bind(styles);
function Languages() {
    const dispatch = useDispatch();
    const lan = useSelector((state) => state.Language.lan);
    const [leftCheck, setleftcheck] = useState(lan === 'vi' ? 'checked' : 'unchecked');
    const [rightCheck, setrightcheck] = useState(lan === 'en' ? 'checked' : 'unchecked');
    return (
        <div className={cx('wrapper')}>
            <span
                className={cx('left', leftCheck)}
                onClick={() => {
                    dispatch({ type: 'TO_VI' });
                    setleftcheck('checked');
                    setrightcheck('unchecked');
                }}
            >
                VI
            </span>
            <span
                className={cx('right', rightCheck)}
                onClick={() => {
                    dispatch({ type: 'TO_EN' });
                    setleftcheck('unchecked');
                    setrightcheck('checked');
                }}
            >
                ENG
            </span>
        </div>
    );
}

export default Languages;
