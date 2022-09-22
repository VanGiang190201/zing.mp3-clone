import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="ZingMp3" className={cx('logo-image')} />
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
