import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import HistoryEvent from './HistoryEvent';
const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper', 'rightBarItem')}>
            <h1 className={cx('title')}>Somthing about me</h1>
            <div className={cx('content')}>
                <HistoryEvent date="21/02/2002" title={'My jorney started here'}></HistoryEvent>
                <HistoryEvent date="2013" title={'Junior high school - PTDTNT Buon Ho'}></HistoryEvent>
                <HistoryEvent date="2017" title={'High school - PTDTNT No Trang Long'}></HistoryEvent>
                <HistoryEvent date="03/04/2018" title={'PVF - Nha Trang'}></HistoryEvent>
                <HistoryEvent date="2020" title={'Software engineer - TDT University'}></HistoryEvent>
                <HistoryEvent date="2022" title={'Family'}></HistoryEvent>
                <div className={cx('Last')}>To be continue...</div>
            </div>
        </div>
    );
}

export default Profile;
