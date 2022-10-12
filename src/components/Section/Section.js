import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Section.module.scss';

const cx = classNames.bind(styles);
function Section({ children, title, vertical = false }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3 className={cx('title')}>{title || 'PlayList/Album'}</h3>
            </div>
            <div className={cx('section-list', vertical ? 'vertical' : '')}>{children}</div>
        </div>
    );
}
Section.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
};
export default Section;
