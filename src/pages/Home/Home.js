import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from './Home.module.scss';
import Carousel from '~/components/Carousel';
import request from '~/utils/request';
import SectionItem from '~/components/Section/SectionItem';
import Section from '~/components/Section';
import SongItem from '~/components/SongItem';
import { audioSlice } from '~/redux/features/audioSlice';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);
function Home() {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        request.get('/home').then((res) => {
            setIsLoading(false);
            if (res.data.data.items) {
                setData(res.data.data.items);
            }
        });
    }, []);

    const handlePlaySong = (song, playlist, index) => {
        if (song.streamingStatus === 1 && song.isWorldWide) {
            dispatch(audioSlice.actions.setAudioSrc(''));
            dispatch(audioSlice.actions.setIsPlayRadio(false));
            dispatch(audioSlice.actions.setSongId(song.encodeId));
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
    return isLoading ? (
        <Loading />
    ) : (
        <div className={cx('wrapper')}>
            <div className={cx('gallery')}>
                <Carousel data={data[0]} />
                {data.map(
                    (playlist, index) =>
                        playlist.sectionType === 'new-release' && (
                            <Section key={index} title={playlist.title} vertical>
                                {playlist.items.vPop.map((item, index) => (
                                    <SongItem
                                        key={item.encodeId}
                                        data={item}
                                        index={index}
                                        playlist={playlist.items.vPop}
                                        horizontal
                                        onDoubleClick={() => handlePlaySong(item, playlist.items[0].song, index)}
                                        hideIndex
                                    />
                                ))}
                            </Section>
                        ),
                )}
                {data.map(
                    (playlist, index) =>
                        playlist.sectionType === 'playlist' && (
                            <Section key={index} title={playlist.title}>
                                {playlist.items.map((item) => (
                                    <SectionItem key={item.encodeId} data={item} />
                                ))}
                            </Section>
                        ),
                )}
            </div>
        </div>
    );
}

export default Home;
