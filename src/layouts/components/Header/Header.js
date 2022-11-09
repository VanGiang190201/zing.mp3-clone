import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import Search from '../Search';
import {
    ShirtIcon,
    UploadIcon,
    DiamondIcon,
    GearIcon,
    BanIcon,
    QualityIcon,
    ChevronRightIcon,
    PlayCircleIcon,
    CircleExclamationIcon,
    PhoneIcon,
    RectangleADIcon,
    FileIcon,
    SecurityIcon,
} from '~/components/icons';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import initializeAuthentication from '~/firebase/firebase.init';
import { userSlide } from '~/redux/features/userSlide';

initializeAuthentication();

const cx = classNames.bind(styles);
const provider = new GoogleAuthProvider();

const MENU_ITEMS = [
    {
        iconLeft: <BanIcon />,
        title: 'Danh sách chặn',
    },
    {
        iconLeft: <QualityIcon />,
        title: 'Chất lượng nhạc',
        iconRight: <ChevronRightIcon />,
    },
    {
        iconLeft: <PlayCircleIcon />,
        title: 'Giao diện',
        iconRight: <ChevronRightIcon />,
    },
    {
        iconLeft: <CircleExclamationIcon />,
        title: 'Giới thiệu',
        type: 'fistFooter',
    },
    {
        iconLeft: <PhoneIcon />,
        title: 'Liên hệ',
    },
    {
        iconLeft: <RectangleADIcon />,
        title: 'Quảng cáo',
    },
    {
        iconLeft: <FileIcon />,
        title: 'Thỏa thuận người dùng',
    },
    {
        iconLeft: <SecurityIcon />,
        title: 'Chính sách bảo mật',
    },
];
function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const userActived = useSelector((state) => state.user.activeUser);
    const imageUserActive = useSelector((state) => state.user.imageThumb);
    const name = useSelector((state) => state.user.name);
    const dispatch = useDispatch();

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };
    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider).then((res) => {
            const user = res.user;
            dispatch(userSlide.actions.setUser(user));
        });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('level-left')}>
                    <Button className={cx('button-prev')} noneborder>
                        <FontAwesomeIcon icon={faArrowLeftLong} className={cx('left-arrow')} />
                    </Button>
                    <Button className={cx('button-next')} noneborder>
                        <FontAwesomeIcon icon={faArrowRightLong} className={cx('right-arrow')} />
                    </Button>
                    <Search />
                </div>
                <div className={cx('level-right')}>
                    <Tippy content="Chủ đề" placement="bottom">
                        <Button className={cx('btn')} primary>
                            <ShirtIcon className={cx('shirt-icon')} />
                        </Button>
                    </Tippy>
                    <Tippy content="Nâng cấp víp" placement="bottom">
                        <Button className={cx('btn')} primary>
                            <DiamondIcon className={cx('diamond-icon')} />
                        </Button>
                    </Tippy>
                    <Tippy content="Tải lên" placement="bottom">
                        <Button className={cx('btn')} primary>
                            <UploadIcon className={cx('upload-icon')} />
                        </Button>
                    </Tippy>
                    <Menu items={MENU_ITEMS} visible={showMenu} onClickOutside>
                        <Tippy content="Cài đặt" placement="bottom">
                            <Button className={cx('btn')} primary onClick={handleShowMenu}>
                                <GearIcon className={cx('gear-icon')} />
                            </Button>
                        </Tippy>
                    </Menu>
                    <Button className={cx('btn')} primary onClick={handleGoogleSignIn}>
                        {userActived ? (
                            <Image src={imageUserActive} alt={name} />
                        ) : (
                            <Image
                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                                alt="_BlankUser"
                            />
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
