import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Sidebar from '~/layouts/components/Sidebar';
import Header from '~/layouts/components/Header';
import PlayerControl from '~/layouts/components/PlayerControl';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('page')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
                <div className={cx('container')}>
                    <Header />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
            <div className={cx('play-control')}>
                <PlayerControl />
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
