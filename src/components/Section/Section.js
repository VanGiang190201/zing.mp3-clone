import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Section.module.scss';

const cx = classNames.bind(styles);
function Section({ children, title, vertical = false, topic, category }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                {category ? '' : <h3 className={cx('title')}>{title ? title : 'PlayList/Album'}</h3>}
            </div>
            <div className={cx('section-list', vertical ? 'vertical' : '', topic ? 'topic' : '')}>{children}</div>
        </div>
    );
}
Section.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    topic: PropTypes.bool,
    category: PropTypes.bool,
};
export default Section;
