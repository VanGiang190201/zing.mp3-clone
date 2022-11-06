import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './ZingChart.module.scss';
import request from '~/utils/request';
import ChartItem from '~/components/ChartItem';
import Button from '~/components/Button';
import { PlayIcon } from '~/components/icons';
import SongItem from '~/components/SongItem';
import Loading from '~/components/Loading';
import { audioSlice } from '~/redux/features/audioSlice';
import WeekChartItem from '~/components/WeekChartItem';

const cx = classNames.bind(styles);
function ZingChart() {
    const [data, setData] = useState({});
    console.log(data.weekChart);
    const [isAll, setIsAll] = useState(false);
    const [loading, setLoading] = useState(true);
    const [topSong, setTopSong] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        request.get('/chart/home').then((res) => {
            setData(res.data.data);
            setTopSong(res.data.data.RTChart.items.slice(0, 10));
            setLoading(false);
        });
    }, []);

    const handleShowHideAll = () => {
        if (!isAll) {
            setIsAll(!isAll);
            setTopSong(data.RTChart.items);
        }
    };

    const handlePlaySong = (song, playlist, index) => {
        if (song.streamingStatus === 1 && song.isWorldWide) {
            dispatch(audioSlice.actions.setIsPlayRadio(false));
            dispatch(audioSlice.actions.setRadioSrc(''));
            dispatch(audioSlice.actions.setSongId(song.encodeId));
            dispatch(audioSlice.actions.setIsPlay(true));

            const listSongCanPlay = [];

            for (let i = 0; i < playlist.length; i++) {
                listSongCanPlay.push(playlist[i]);
            }
            dispatch(audioSlice.actions.setPlaylistSong(listSongCanPlay));
            dispatch(audioSlice.actions.setCurrentIndexSong(index));
        } else {
            alert('Dành cho tài khoản vip');
        }
    };
    return loading ? (
        <Loading />
    ) : (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <span className={cx('title')}>#zingchart</span>
                <Button className={cx('btn')}>
                    <PlayIcon className={cx('icon')} />
                </Button>
            </div>
            <div className={cx('chart')}>
                <ChartItem data={data.RTChart} className={cx('chart-item')} />
            </div>
            <div className={cx('top100')}>
                {topSong.map((item, index) => (
                    <SongItem
                        key={index}
                        index={index}
                        data={item}
                        playlist={topSong}
                        onDoubleClick={() => handlePlaySong(item, topSong, index)}
                    />
                ))}

                {!isAll && (
                    <Button onClick={handleShowHideAll} outline className={cx('btn-show')}>
                        Xem top 100
                    </Button>
                )}
            </div>
            <div className={cx('week-chart')}>
                <div className={cx('header')}>
                    <p className={cx('title')}>Bảng Xếp Hàng Tuần</p>
                </div>
                <div className={cx('week-chart-list')}>
                    {Object.keys(data?.weekChart).map((key, index) => (
                        <WeekChartItem key={index} data={data.weekChart[key]} title={key} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ZingChart;
