import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function MenuItem({ to, title, icon, end = false }) {
    return (
        <NavLink
            to={to}
            className={(nav) =>
                cx('menu-item', {
                    active: nav.isActive,
                })
            }
            end={end}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
            <span className={cx('live-label')}>
                {to === '/radio' ? <img src={images.liveLabel} alt="live-label" /> : ''}
            </span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};
export default MenuItem;
