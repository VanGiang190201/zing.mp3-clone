import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import Button from '~/components/Button';
import styles from './OutsideControlSong.module.scss';
import { MiniShowIcon, VolumeIcon, ListIcon, MuteIcon } from '~/components/icons';
import { audioSlice } from '~/redux/features/audioSlice';

const cx = classNames.bind(styles);
function OutsideControlSong() {
    const [volume, setVolume] = useState(0.5);
    const dispatch = useDispatch();

    const handleChangeVolume = (e) => {
        dispatch(audioSlice.actions.setVolume(e.target.value / 100));
        setVolume(e.target.value / 100);
    };
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
                    {volume === 0 ? <MuteIcon className={cx('icon')} /> : <VolumeIcon className={cx('icon')} />}
                </Button>
                <input
                    type="range"
                    className={cx('progress-volume')}
                    min="0"
                    max="100"
                    step="1"
                    onChange={handleChangeVolume}
                />
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
