import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import styles from './SongItem.module.scss';
import Image from '~/components/Image';
import { PLayNormalIcon, PauseNormalIcon } from '~/components/icons';
import { audioSlice } from '~/redux/features/audioSlice';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function SongItem({ data, index, onDoubleClick, horizontal, playlist }) {
    const dispatch = useDispatch();
    const songId = useSelector((state) => state.audio.songId);
    const isPlay = useSelector((state) => state.audio.isPlay);
    const top = (top) => {
        if (top === 0) {
            return 'top-1';
        } else if (top === 1) {
            return 'top-2';
        } else if (top === 2) {
            return 'top-3';
        } else return;
    };

    const handlePlaySong = () => {
        if (data.streamingStatus === 1 && data.isWorldWide) {
            dispatch(audioSlice.actions.setSongId(data.encodeId));
            dispatch(audioSlice.actions.setIsPlay(true));

            let listSongCanPlay = [];
            for (let i = 0; i < playlist.length; i++) {
                listSongCanPlay.push(playlist[i]);
            }
            dispatch(audioSlice.actions.setPlaylistSong(listSongCanPlay));
            dispatch(audioSlice.actions.setCurrentIndexSong(index));
        } else {
            alert('Dành cho tài khoản vip');
        }
    };

    const handlePauseSong = () => {
        dispatch(audioSlice.actions.setIsPlay(false));
    };
    return (
        <div className={cx('wrapper', horizontal ? 'horizontal' : '')}>
            <div className={cx('song-item', songId === data.encodeId && 'playing')}>
                <div className={cx('media')} onDoubleClick={onDoubleClick}>
                    <div className={cx('media-left')}>
                        {index + 1 ? (
                            <div className={cx('song-prefix')}>
                                <span className={cx('serial-number', top(index))}>{index + 1}</span>
                            </div>
                        ) : (
                            ''
                        )}
                        <div className={cx('song-thumb')}>
                            <Image src={data.thumbnailM} alt={data.alias} className={cx('song-image')} />
                            <div className={cx('play-action')}>
                                {isPlay && songId === data.encodeId ? (
                                    <button className={cx('btn-play')} onClick={handlePauseSong}>
                                        <PauseNormalIcon className={cx('icon-pause')} />
                                    </button>
                                ) : (
                                    <button className={cx('btn-play')} onClick={handlePlaySong}>
                                        <PLayNormalIcon className={cx('icon-pause')} />
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className={cx('song-info')}>
                            <div className={cx('title-wrapper')}>
                                <span className={cx('song-title')}>{data.title}</span>
                                {data.streamingStatus === 1 && data.isWorldWide ? (
                                    ''
                                ) : (
                                    <span className={cx('vip-label')}>
                                        <img src={images.vipLabel} alt="vip-label" />
                                    </span>
                                )}
                            </div>
                            <div className={cx('song-artists')}>
                                <span className={cx('song-singer')}>{data.artistsNames}</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('media-content')}>
                        <div className={cx('album-info')}>
                            <span className={cx('album-name')}>{data.album ? data.album.title : ''}</span>
                        </div>
                    </div>
                    <div className={cx('media-right')}>
                        <div className={cx('action-item')}>
                            <span className={cx('duration-item')}>
                                {`${
                                    Math.floor(data.duration / 60) < 10
                                        ? '0' + Math.floor(data.duration / 60)
                                        : Math.floor(data.duration / 60)
                                }`}
                                :
                                {`${
                                    Math.floor(data.duration % 60) < 10
                                        ? '0' + Math.floor(data.duration % 60)
                                        : Math.floor(data.duration % 60)
                                }`}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

SongItem.propTypes = {
    data: PropTypes.object,
    index: PropTypes.number,
    onDoubleClick: PropTypes.func,
};
export default SongItem;
