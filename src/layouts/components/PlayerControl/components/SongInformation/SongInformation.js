/* eslint-disable jsx-a11y/no-distracting-elements */
import classNames from 'classnames/bind';

import styles from './SongInformation.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function SongInformation() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('song-image')}>
                <Image
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/7/a/e/77aee39bbfc521a33a81013048b839ae.jpg"
                    alt="song-image"
                    className={cx('image')}
                />
            </div>
            <div className={cx('song-information')}>
                <div className={cx('song-name')}>
                    <marquee>Phác họa cuộc tình</marquee>
                </div>
                <div className={cx('sing-name')}>
                    <span>Bình Boo, HOA HỒNG DẠI MUSIC</span>
                </div>
            </div>
        </div>
    );
}

export default SongInformation;
