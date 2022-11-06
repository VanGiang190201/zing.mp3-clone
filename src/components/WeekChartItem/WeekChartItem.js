import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import styles from './WeekChartItem.module.scss';
import Button from '../Button';
import { PlayIcon } from '../icons';
import SongItem from '../SongItem';
import { audioSlice } from '~/redux/features/audioSlice';

const cx = classNames.bind(styles);
function WeekChartItem({ data, title }) {
    console.log(data);
    const dispatch = useDispatch();
    const titleItem = () => {
        if (title === 'vn') {
            return 'Việt Nam';
        }
        if (title === 'us') {
            return 'US-UK';
        }
        if (title === 'korea') {
            return 'K-Pop';
        }
    };

    const handlePlaySong = (song, playlist, index) => {
        dispatch(audioSlice.actions.setRadioSrc(''));
        dispatch(audioSlice.actions.setIsPlayRadio(false));
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
                <div className={cx('header')}>
                    <span className={cx('title')}>{titleItem()}</span>
                    <Button className={cx('btn')}>
                        <PlayIcon className={cx('icon')} />
                    </Button>
                </div>
                <div className={cx('song-list')}>
                    {data.items.map((item, index) => (
                        <SongItem
                            data={item}
                            key={item.encodeId}
                            index={index}
                            playlist={data.items}
                            horizontal
                            onDoubleClick={() => handlePlaySong(item, data.items, index)}
                            hideIndex
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

WeekChartItem.propTypes = {
    data: PropTypes.object,
    title: PropTypes.string,
};
export default WeekChartItem;
