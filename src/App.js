import Layout from '~/components/Layout';
import styles from './App.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function App() {
    return (
        <div className={cx('wrapper')}>
            <Layout></Layout>
        </div>
    );
}

export default App;
