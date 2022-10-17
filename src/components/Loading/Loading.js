import classNames from 'classnames/bind';

import styles from './Loading.module.scss';

const cx = classNames.bind(styles);
function Loading() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('cube')}>
                <div className={cx('top')}>
                    <h3 className={cx('loading-title')}>Loading</h3>
                </div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default Loading;
