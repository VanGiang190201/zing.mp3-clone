import classNames from 'classnames/bind';

import styles from './Section.module.scss';

const cx = classNames.bind(styles);
function Section({ children, title }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3 className={cx('title')}>Nhạc của tôi</h3>
            </div>
            <div className={cx('section-list')}>{children}</div>
        </div>
    );
}

export default Section;
