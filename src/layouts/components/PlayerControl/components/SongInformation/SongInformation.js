/* eslint-disable jsx-a11y/no-distracting-elements */
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './SongInformation.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function SongInformation() {
    const inforSongPlaying = useSelector((state) => state.audio.inforSongPlaying);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('song-image')}>
                <Image src={inforSongPlaying.thumbnailM} alt="song-image" className={cx('image')} />
            </div>
            <div className={cx('song-information')}>
                <div className={cx('song-name')}>
                    <marquee>{inforSongPlaying.title}</marquee>
                </div>
                <div className={cx('sing-name')}>
                    <span>
                        {inforSongPlaying.status === 2 && (
                            <img src={images.liveLabel} alt="live-label" className={cx('live-label')} />
                        )}
                        {inforSongPlaying.status === 2
                            ? `${inforSongPlaying.activeUsers} đang nghe`
                            : inforSongPlaying.artistsNames}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SongInformation;
