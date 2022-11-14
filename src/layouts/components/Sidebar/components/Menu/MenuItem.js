import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function MenuItem({ to, title, icon, end, button, onClick }) {
    let Comp = NavLink;
    if (button) {
        Comp = 'button';
    }
    return (
        <Comp
            to={to}
            className={
                button
                    ? cx('button')
                    : (nav) =>
                          cx('menu-item', {
                              active: nav.isActive,
                          })
            }
            end={end}
            onClick={onClick}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('title')}>{title}</span>
            <span className={cx('live-label')}>
                {to === '/radio' ? <img src={images.liveLabel} alt="live-label" /> : ''}
            </span>
        </Comp>
    );
}

MenuItem.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};
export default MenuItem;
