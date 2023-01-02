import styles from './Profile.module.scss';
import classNames from 'classnames/bind';
import HistoryEvent from './HistoryEvent';
import { useSelector } from 'react-redux';
const cx = classNames.bind(styles);

function Profile() {
    const context = useSelector((state) => state.Language.profile);
    return (
        <div className={cx('wrapper', 'rightBarItem')} id="profile">
            <h1 className={cx('title')}>{context.title}</h1>
            <div>
                <table>
                    <tr>
                        <td style={{ width: '15%' }}>{context.lan === 'vi' ? 'Tên:' : 'Name:'}</td>
                        <td style={{ width: '35%' }}>{context.name}</td>
                        <td style={{ width: '20%' }}>{context.lan === 'vi' ? 'Ngày sinh:' : 'Date of birth:'}</td>
                        <td style={{ width: '35%' }}>{context.BD}</td>
                    </tr>
                    <tr>
                        <td>{context.lan === 'vi' ? 'Địa chỉ:' : 'Address:'}</td>
                        <td colSpan="3">{context.address}</td>
                    </tr>
                    <tr>
                        <td>{context.lan === 'vi' ? 'Ngành:' : 'Profession:'}</td>
                        <td>{context.profession}</td>
                        <td>{context.lan === 'vi' ? 'Đại học:' : 'University'}</td>
                        <td>{context.university}</td>
                    </tr>
                    <tr>
                        <td>Front-End:</td>
                        <td>Bootstrap,React</td>
                        <td>Back-End:</td>
                        <td>PhP,NodeJs</td>
                    </tr>
                    <tr>
                        <td>{context.lan === 'vi' ? 'Sở thích:' : 'Hobby:'}</td>
                        <td>{context.hobby}</td>
                    </tr>
                </table>
            </div>
            <div className={cx('content')}>
                <HistoryEvent date="21/02/2002" title={context.timeline1}></HistoryEvent>
                <HistoryEvent date="2013" title={context.timeline2}></HistoryEvent>
                <HistoryEvent date="2017" title={context.timeline3}></HistoryEvent>
                <HistoryEvent date="03/04/2018" title={context.timeline4}></HistoryEvent>
                <HistoryEvent date="2020" title={context.timeline5}></HistoryEvent>
                <HistoryEvent date="2022" title={context.timeline6}></HistoryEvent>
                <div className={cx('Last')}>{context.lan === 'vi' ? 'Còn tiếp ...' : 'To be continue...'}</div>
            </div>
        </div>
    );
}

export default Profile;
