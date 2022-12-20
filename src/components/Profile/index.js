import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import HistoryEvent from './HistoryEvent';
const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper', 'rightBarItem')} id="profile">
            <h1 className={cx('title')}>Somthing about me</h1>
            <div>
                <table>
                    <tr>
                        <td style={{ width: '15%' }}>Name:</td>
                        <td style={{ width: '35%' }}>Hoàng Đức Duy</td>
                        <td style={{ width: '20%' }}>Date of birth:</td>
                        <td style={{ width: '35%' }}>03/04/2002</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td colSpan="3">Binh Thuan, Buon Ho, Dak Lak - Tan Phong, D.7, TP. HCM</td>
                    </tr>
                    <tr>
                        <td>Profession:</td>
                        <td>Web Developer</td>
                        <td>University:</td>
                        <td>Ton Duc Thang University</td>
                    </tr>
                    <tr>
                        <td>Front-End:</td>
                        <td>Bootstrap,React</td>
                        <td>Back-End:</td>
                        <td>PhP,NodeJs</td>
                    </tr>
                    <tr>
                        <td>Hobby:</td>
                        <td>FootBall, Sing, Piano</td>
                    </tr>
                </table>
            </div>
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
