import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './SongControl.module.scss';
import Button from '~/components/Button';
import { RandomIcon, PrevIcon, NextIcon, PauseIcon, LoopIcon } from '~/components/icons';

const cx = classNames.bind(styles);
function SongControl({ src }) {
    const audioRef = useRef();
    const progressRef = useRef();

    const [currentTime, setCurrentTime] = useState();
    const audio = audioRef.current;

    const progressRange = progressRef.current;

    const handleProgressSong = () => {
        const progressCurrentTime = Math.floor((audio.currentTime / audio.duration) * 100);
        progressRange.value = progressCurrentTime;
        setCurrentTime(audio.currentTime);
    };
    const handlePlaySong = () => {
        audioRef.current.play();
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('action')}>
                <Tippy content="Bật phát ngẫu nhiên" placement="top" offset={[0, 0]}>
                    <Button noneborder primary className={cx('btn')}>
                        <RandomIcon className={cx('icon')} />
                    </Button>
                </Tippy>
                <Button noneborder primary className={cx('btn')}>
                    <PrevIcon className={cx('icon')} />
                </Button>
                <Button noneborder primary className={cx('btn')} onClick={handlePlaySong}>
                    <PauseIcon className={cx('icon')} />
                </Button>
                <Button noneborder primary className={cx('btn')}>
                    <NextIcon className={cx('icon')} />
                </Button>
                <Tippy content="Bật phát lại tất cả" placement="top" offset={[0, 0]}>
                    <Button noneborder primary className={cx('btn')}>
                        <LoopIcon className={cx('icon')} />
                    </Button>
                </Tippy>
            </div>
            <div className={cx('range')}>
                <span className={cx('time')}>
                    {audio
                        ? `${
                              Math.floor(currentTime / 60) < 10
                                  ? '0' + Math.floor(currentTime / 60)
                                  : Math.floor(currentTime / 60)
                          } : ${
                              Math.floor(currentTime % 60) < 10
                                  ? '0' + Math.floor(currentTime % 60)
                                  : Math.floor(currentTime % 60)
                          }`
                        : '00:00'}
                </span>
                <input
                    type="range"
                    className={cx('progress')}
                    defaultValue="0"
                    step="1"
                    min="0"
                    max="100"
                    ref={progressRef}
                />
                <audio src={src} onTimeUpdate={handleProgressSong} ref={audioRef} />
                <span className={cx('time')}>
                    {audio
                        ? `${
                              Math.floor(audio.duration / 60) < 10
                                  ? '0' + Math.floor(audio.duration / 60)
                                  : Math.floor(audio.duration / 60)
                          } : ${
                              Math.floor(audio.duration % 60) < 10
                                  ? '0' + Math.floor(audio.duration % 60)
                                  : Math.floor(audio.duration % 60)
                          }`
                        : '00:00'}
                </span>
            </div>
        </div>
    );
}

export default SongControl;
