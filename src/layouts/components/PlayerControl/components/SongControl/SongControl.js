import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useDispatch, useSelector } from 'react-redux';
import ReactHlsPlayer from 'react-hls-player';

import styles from './SongControl.module.scss';
import Button from '~/components/Button';
import { RandomIcon, PrevIcon, NextIcon, PauseIcon, LoopIcon, PlayIcon } from '~/components/icons';
import { audioSlice } from '~/redux/features/audioSlice';

const cx = classNames.bind(styles);
function SongControl() {
    const audioRef = useRef();
    const radioRef = useRef();
    const progressRef = useRef();
    const isPlay = useSelector((state) => state.audio.isPlay);
    const volume = useSelector((state) => state.audio.volume);
    const audioSrc = useSelector((state) => state.audio.audioSrc);
    const playlistSong = useSelector((state) => state.audio.playlistSong);
    let currentIndexSong = useSelector((state) => state.audio.currentIndexSong);
    const isLoop = useSelector((state) => state.audio.isLoop);
    const radioSrc = useSelector((state) => state.audio.radioSrc);
    const isPlayRadio = useSelector((state) => state.audio.isPlayRadio);
    const inforSongPlaying = useSelector((state) => state.audio.inforSongPlaying);
    const dispatch = useDispatch();
    const [currentTime, setCurrentTime] = useState('00:00');

    const audio = audioRef.current;
    if (audio) {
        audio.volume = volume;
    }
    if (radioRef.current) {
        radioRef.current.volume = volume;
    }
    const progressRange = progressRef.current;

    const handleProgressSong = () => {
        const progressCurrentTime = Math.floor((audio.currentTime / audio.duration) * 100);
        progressRange.value = progressCurrentTime;
        setCurrentTime(audio.currentTime);
    };
    const handlePlaySong = () => {
        if (isPlay) {
            dispatch(audioSlice.actions.setIsPlay(false));
            if (audio) {
                audio.pause();
            }
        } else {
            dispatch(audioSlice.actions.setIsPlay(true));
            if (audio) {
                audio.play();
            }
        }
    };
    const handleNextSong = () => {
        dispatch(audioSlice.actions.setCurrentIndexSong((currentIndexSong += 1)));
        dispatch(audioSlice.actions.setIsPlay(true));
        if (currentIndexSong > playlistSong.length - 1) {
            dispatch(audioSlice.actions.setCurrentIndexSong((currentIndexSong = 0)));
        }
        if (playlistSong.length !== 0) {
            dispatch(audioSlice.actions.setSongId(playlistSong[currentIndexSong].encodeId));
        }
    };

    const handlePrevSong = () => {
        dispatch(audioSlice.actions.setCurrentIndexSong((currentIndexSong -= 1)));

        dispatch(audioSlice.actions.setIsPlay(true));
        if (currentIndexSong < 0) {
            dispatch(audioSlice.actions.setCurrentIndexSong(currentIndexSong));
        }
        if (playlistSong.length !== 0) {
            dispatch(audioSlice.actions.setSongId(playlistSong[currentIndexSong].encodeId));
        }
    };

    const handleLoop = () => {
        if (isLoop) {
            dispatch(audioSlice.actions.setIsLoop(false));
        } else {
            dispatch(audioSlice.actions.setIsLoop(true));
        }
    };
    useEffect(() => {
        if (audioSrc !== '') {
            isPlay ? audio.play() : audio.pause();
        }
    }, [audioSrc, isPlay, audio]);
    useEffect(() => {
        if (radioSrc !== '') {
            isPlayRadio ? radioRef.current.play() : radioRef.current.pause();
        }
    }, [radioSrc, isPlayRadio]);

    const handlePlayRadio = () => {
        if (isPlayRadio) {
            dispatch(audioSlice.actions.setIsPlayRadio(false));
            if (radioRef) {
                radioRef.current.pause();
            }
        } else {
            dispatch(audioSlice.actions.setIsPlayRadio(true));
            if (radioRef) {
                radioRef.current.play();
            }
        }
    };

    const handleChangeProgressSong = (value) => {
        const seekTime = (audioRef.current.duration / 100) * value;
        audioRef.current.currentTime = seekTime;
    };

    const handleSongEnded = () => {
        if (!isLoop) {
            setCurrentTime('00:00');
            dispatch(audioSlice.actions.setCurrentIndexSong((currentIndexSong += 1)));
            dispatch(audioSlice.actions.setIsPlay(true));
            if (currentIndexSong > playlistSong.length - 1) {
                dispatch(audioSlice.actions.setCurrentIndexSong((currentIndexSong = 0)));
            }
            if (playlistSong.length !== 0) {
                dispatch(audioSlice.actions.setSongId(playlistSong[currentIndexSong].encodeId));
            }
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('action')}>
                <Tippy content="Bật phát ngẫu nhiên" placement="top" offset={[0, 0]}>
                    <Button noneborder primary className={cx('btn', inforSongPlaying.status === 2 ? 'radio' : '')}>
                        <RandomIcon className={cx('icon')} />
                    </Button>
                </Tippy>
                <Button
                    noneborder
                    primary
                    className={cx('btn', inforSongPlaying.status === 2 ? 'radio' : '')}
                    onClick={handlePrevSong}
                >
                    <PrevIcon className={cx('icon')} />
                </Button>
                {inforSongPlaying.status === 2 ? (
                    <Button noneborder primary className={cx('btn')} onClick={handlePlayRadio}>
                        {isPlayRadio ? <PauseIcon className={cx('icon')} /> : <PlayIcon className={cx('icon')} />}
                    </Button>
                ) : (
                    <Button noneborder primary className={cx('btn')} onClick={handlePlaySong}>
                        {isPlay ? <PauseIcon className={cx('icon')} /> : <PlayIcon className={cx('icon')} />}
                    </Button>
                )}
                <Button
                    noneborder
                    primary
                    className={cx('btn', inforSongPlaying.status === 2 ? 'radio' : '')}
                    onClick={handleNextSong}
                >
                    <NextIcon className={cx('icon')} />
                </Button>
                <Tippy content={isLoop ? 'Tắt phát lại' : 'Bật phát lại tất cả'} placement="top" offset={[0, 0]}>
                    <Button
                        noneborder
                        primary
                        className={cx('btn', inforSongPlaying.status === 2 ? 'radio' : '')}
                        onClick={handleLoop}
                    >
                        <LoopIcon className={cx('icon', isLoop && 'loop')} />
                    </Button>
                </Tippy>
            </div>
            {inforSongPlaying.status === 2 ? (
                ''
            ) : (
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
                        step="1"
                        min="0"
                        max="100"
                        ref={progressRef}
                        onChange={(e) => handleChangeProgressSong(e.target.value)}
                    />
                    <audio
                        src={audioSrc}
                        onTimeUpdate={handleProgressSong}
                        ref={audioRef}
                        loop={isLoop}
                        onEnded={handleSongEnded}
                    />
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
            )}
            <ReactHlsPlayer hidden src={radioSrc} playerRef={radioRef} />
        </div>
    );
}

export default SongControl;
