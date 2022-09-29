import classNames from 'classnames/bind';

import styles from './OutsideControlSong.module.scss';

const cx = classNames.bind(styles);
function OutsideControlSong() {
    return <div className={cx('wrapper')}></div>;
}

export default OutsideControlSong;
