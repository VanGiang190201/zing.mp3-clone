import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './NewMusic.module.scss';
import request from '~/utils/request';
import SongItem from '~/components/SongItem';
import Button from '~/components/Button';
import { PlayIcon } from '~/components/icons';
import { audioSlice } from '~/redux/features/audioSlice';
const cx = classNames.bind(styles);
function NewMusic() {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    useEffect(() => {
        request.get('/chart/new-release').then((res) => setData(res.data.data));
    }, []);

    const handlePlaySong = (song, playlist, index) => {
        dispatch(audioSlice.actions.setSongId(song.encodeId));
        dispatch(audioSlice.actions.setIsPlay(true));

        const listSongCanPlay = [];
        for (let i = 0; i < playlist.length; i++) {
            listSongCanPlay.push(playlist[i]);
        }
        dispatch(audioSlice.actions.setPlaylistSong(listSongCanPlay));
        dispatch(audioSlice.actions.setCurrentIndexSong(index));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('container')}>
                    <div className={cx('header')}>
                        <span className={cx('title')}>Nhạc Mới</span>
                        <Button primary className={cx('play-btn')}>
                            <PlayIcon className={cx('play-icon')} />
                        </Button>
                    </div>
                    <div className={cx('list-item')}>
                        {data.items &&
                            data.items.map((item, index) => {
                                return (
                                    <SongItem
                                        key={index}
                                        data={item}
                                        index={index}
                                        onDoubleClick={() => handlePlaySong(item, data.items, index)}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewMusic;
