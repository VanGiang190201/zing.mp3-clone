import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

import styles from './Sidebar.module.scss';
import images from '~/assets/images';
import Menu from './components/Menu';
import MenuItem from './components/Menu/MenuItem';
import config from '~/config';
import {
    BoxIcon,
    RecordIcon,
    ChartIcon,
    RadioIcon,
    DocumentIcon,
    MusicIcon,
    WolfIcon,
    StarIcon,
} from '~/components/icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Sidebar() {
    const activeUser = useSelector((state) => state.user.activeUser);
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="ZingMp3" className={cx('logo-image')} />
                </div>
                <div className={cx('menu')}>
                    <Menu>
                        <MenuItem to={config.myMusic} title="Cá nhân" icon={<BoxIcon />} />
                        <MenuItem to={config.home} title="Khám phá" icon={<RecordIcon />} end />
                        <MenuItem to={config.zingChart} title="#zingchart" icon={<ChartIcon />} />
                        <MenuItem to={config.radio} title="Radio" icon={<RadioIcon />} />
                        <MenuItem to={config.follow} title="Theo dõi" icon={<DocumentIcon />} />
                    </Menu>
                </div>
                <div className={cx('menu-roll')}>
                    <Menu>
                        <MenuItem to={config.newMusic} title="Nhạc mới" icon={<MusicIcon />} />
                        <MenuItem to={config.category} title="Thể loại" icon={<WolfIcon />} />
                        <MenuItem to={config.topMusic} title="Top 100" icon={<StarIcon />} />
                        {!activeUser ? (
                            <div className={cx('login-discover')}>
                                <p className={cx('description')}>Đăng nhập để khám phá playlist dành riêng cho bạn</p>
                                <Button outline className={cx('login-btn')}>
                                    Đăng nhập
                                </Button>
                            </div>
                        ) : (
                            <div className={cx('vip-banner')}>
                                <p className={cx('title-vip')}>Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
                                <Button outline className={cx('vip-btn')}>
                                    Nâng cấp VIP
                                </Button>
                            </div>
                        )}
                        {!activeUser && (
                            <div className={cx('vip-banner')}>
                                <p className={cx('title-vip')}>Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
                                <Button outline className={cx('vip-btn')}>
                                    Nâng cấp VIP
                                </Button>
                            </div>
                        )}
                    </Menu>
                </div>
                <div className={cx('add-new-playlist')}>
                    <Button className={cx('add-playlist-btn')}>
                        <FontAwesomeIcon icon={faPlus} />
                        <span>Tạo playlist mới</span>
                    </Button>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
