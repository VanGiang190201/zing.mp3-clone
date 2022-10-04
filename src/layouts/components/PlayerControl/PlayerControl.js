import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import * as request from '~/utils/request';
import styles from './PlayerControl.module.scss';
import SongInformation from './components/SongInformation';
import SongControl from './components/SongControl';
import OutsideControlSong from './components/OutsideControlSong';

const cx = classNames.bind(styles);
function PlayerControl() {
    const [song, setSong] = useState({});

    useEffect(() => {
        request.get('/song/Z6I76BBO').then((res) => setSong(res.data));
    }, []);

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
