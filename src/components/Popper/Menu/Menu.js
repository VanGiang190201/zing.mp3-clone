import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import styles from './Menu.module.scss';
import Popper from '~/components/Popper';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);
function Menu({ children, items = [], visible = false }) {
    const [showMenu, setShowMenu] = useState(visible);
    useEffect(() => {
        setShowMenu(visible);
    }, [visible]);

    const renderItem = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    const renderMenu = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <Popper className={cx('menu-wrapper')}>
                <div className={cx('menu-detail')}>{renderItem()}</div>
            </Popper>
        </div>
    );
    const handleCloseMenu = () => {
        if (showMenu) {
            setShowMenu(false);
        }
    };
    return (
        <Tippy
            interactive
            visible={showMenu}
            placement="bottom-end"
            render={renderMenu}
            onClickOutside={handleCloseMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    visible: PropTypes.bool,
};
export default Menu;
