import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import request from '~/utils/request';
import styles from './PlayList.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { PLayNormalIcon } from '~/components/icons';
import SongItem from '~/components/SongItem';
import { audioSlice } from '~/redux/features/audioSlice';
import Artist from '~/components/Artist';

const cx = classNames.bind(styles);
function PlayList() {
    const [data, setData] = useState({});
    console.log(data);
    const dispatch = useDispatch();
    const isPlay = useSelector((state) => state.audio.isPlay);
    const location = useLocation();

    const { id } = location.state;

    useEffect(() => {
        request.get(`/playlist/${id}`).then((res) => setData(res.data.data));
    }, [id]);
    const handlePlaySong = (song, playlist, index) => {
        dispatch(audioSlice.actions.setSongId(song.encodeId));
        dispatch(audioSlice.actions.setIsPlay(true));
        let listSongCanPlay = [];
        for (let i = 0; i < playlist.length; i++) {
            listSongCanPlay.push(playlist[i]);
        }
        dispatch(audioSlice.actions.setPlaylistSong(listSongCanPlay));
        dispatch(audioSlice.actions.setCurrentIndexSong(index));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('playlist-detail')}>
                    <div className={cx('playlist-header')}>
                        <div className={cx('img-thumb', isPlay ? 'playing' : '')}>
                            <Image src={data.thumbnailM} alt="playlist-thumb" className={cx('image')} />
                        </div>
                        <div className={cx('playlist-information')}>
                            <h3 className={cx('title')}>{data.title}</h3>
                            <p className={cx('release')}>Cập nhât : {data.releaseDate}</p>
                            <p className={cx('artists')}>{data.artistsNames}</p>
                            <p className={cx('quantity-listen')}>{data.like} người yêu thích</p>
                        </div>
                        <div className={cx('action')}>
                            <Button className={cx('btn')}>
                                <PLayNormalIcon className={cx('icon')} />
                                PHÁT NGẪU NHIÊN
                            </Button>
                        </div>
                    </div>
                    <div className={cx('playlist-content')}>
                        <p className={cx('description')}>
                            <span>Lời tựa </span>
                            {data.description}
                        </p>
                        <div className={cx('song-list')}>
                            <div className={cx('header-subject')}>
                                <div className={cx('media-left')}>BÀI HÁT</div>
                                <div className={cx('media-content')}>ALBUM</div>
                                <div className={cx('media-right')}>THỜI GIAN</div>
                            </div>
                            <div className={cx('songs')}>
                                {data.song
                                    ? data.song.items.map((song, index) => (
                                          <SongItem
                                              key={song.encodeId}
                                              data={song}
                                              onDoubleClick={() => handlePlaySong(song, data.song.items, index)}
                                          />
                                      ))
                                    : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('playlist-artists')}>
                    <h3 className={cx('title-artists')}>Nghệ Sĩ Tham Gia</h3>
                    <div className={cx('artist-list')}>
                        {data.artists
                            ? data.artists.map((artist, index) => (
                                  <Artist key={index} artist={artist} className={cx('artist-item')} />
                              ))
                            : ''}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayList;
