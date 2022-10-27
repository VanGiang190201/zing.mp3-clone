import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import * as request from '~/utils/request';
import styles from './PlayerControl.module.scss';
import SongInformation from './components/SongInformation';
import SongControl from './components/SongControl';
import OutsideControlSong from './components/OutsideControlSong';
import { audioSlice } from '~/redux/features/audioSlice';

const cx = classNames.bind(styles);
function PlayerControl() {
    const dispatch = useDispatch();

    const songId = useSelector((state) => state.audio.songId);

    useEffect(() => {
        request.get(`/song/${songId}`).then((res) => {
            try {
                dispatch(audioSlice.actions.setAudioSrc(res.data[128]));
            } catch {
                dispatch(audioSlice.actions.setIsPlay(false));
                dispatch(audioSlice.actions.setAudioSrc(''));
                alert('Tài khoản của bạn không phù hợp với bài hát này');
            }
        });
    }, [dispatch, songId]);
    useEffect(() => {
        request.get(`/song/info/${songId}`).then((res) => {
            dispatch(
                audioSlice.actions.setInforSongPlaying({
                    title: res.data.title,
                    artistsNames: res.data.artistsNames,
                    thumbnailM: res.data.thumbnailM,
                    isWorldWide: res.data.isWorldWide,
                    streamingStatus: res.data.streamingStatus,
                }),
            );
        });
    }, [dispatch, songId]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('song-information')}>
                <SongInformation />
            </div>
            <div className={cx('song-control')}>
                <SongControl />
                {/* <audio src={audio} controls className={cx('audio')} /> */}
            </div>
            <div className={cx('outside-control')}>
                <OutsideControlSong />
            </div>
        </div>
    );
}

export default PlayerControl;
