import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import * as request from '~/utils/request';
import styles from './PlayerControl.module.scss';
import SongInformation from './components/SongInformation';
import SongControl from './components/SongControl';
import OutsideControlSong from './components/OutsideControlSong';
import { audioSlice } from '~/redux/features/audioSlice';

const cx = classNames.bind(styles);
function PlayerControl() {
    const [song, setSong] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        request.get('/song/Z6I76BBO').then((res) => setSong(res.data));
    }, []);
    useEffect(() => {
        request.get('/song/info/Z6I76BBO').then((res) => {
            dispatch(
                audioSlice.actions.setInforSongPlaying({
                    title: res.data.title,
                    artistsNames: res.data.artistsNames,
                    thumbnailM: res.data.thumbnailM,
                }),
            );
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [song]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('song-information')}>
                <SongInformation data={song} />
            </div>
            <div className={cx('song-control')}>
                <SongControl data={song} />
                {/* <audio src={audio} controls className={cx('audio')} /> */}
            </div>
            <div className={cx('outside-control')}>
                <OutsideControlSong />
            </div>
        </div>
    );
}

export default PlayerControl;
