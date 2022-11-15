import styles from './HistoryEvent.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function HistoryEvent({ date, title, children = '' }) {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon icon={faCircle} className={cx('circle')} size="1x"></FontAwesomeIcon>
            <div className={cx('eventInfo')}>
                <div className={cx('eventDate')}>{date}:</div>
                <div className={cx('eventTitle')}>{title}</div>
            </div>
            <div className={cx('eventContent')}>{children}</div>
        </div>
    );
}

export default HistoryEvent;
