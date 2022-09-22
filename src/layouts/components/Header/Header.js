import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import Search from '../Search';
import { ShirtIcon, UploadIcon, DiamondIcon, GearIcon } from '~/components/icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Header() {
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
                    <Tippy content="Cài đặt" placement="bottom">
                        <Button className={cx('btn')} primary>
                            <GearIcon className={cx('gear-icon')} />
                        </Button>
                    </Tippy>
                    <Button className={cx('btn')} primary>
                        <Image src="https://avatars.githubusercontent.com/u/106475471?v=4" alt="VanGiang" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
