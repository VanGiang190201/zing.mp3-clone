import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './OutsideControlSong.module.scss';
import { MiniShowIcon, VolumeIcon, ListIcon } from '~/components/icons';

const cx = classNames.bind(styles);
function OutsideControlSong() {
    return (
        <div className={cx('wrapper')}>
            <Tippy content="Chế độ cửa sổ" placement="top" offset={[0, 0]}>
                <div className={cx('mini-show')}>
                    <Button primary noneborder className={cx('btn')}>
                        <MiniShowIcon className={cx('icon')} />
                    </Button>
                </div>
            </Tippy>
            <div className={cx('volume')}>
                <Button primary noneborder className={cx('btn')}>
                    <VolumeIcon className={cx('icon')} />
                </Button>
                <input type="range" className={cx('progress-volume')} />
            </div>
            <Tippy content="Danh sách phát" placement="top" offset={[0, 0]}>
                <div className={cx('playlist')}>
                    <Button primary noneborder className={cx('btn')}>
                        <ListIcon className={cx('icon')} />
                    </Button>
                </div>
            </Tippy>
        </div>
    );
}

export default OutsideControlSong;
