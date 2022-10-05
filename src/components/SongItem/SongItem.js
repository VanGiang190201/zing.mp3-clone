import classNames from 'classnames/bind';

import styles from './SongItem.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function SongItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('song-item')}>
                <div className={cx('media')}>
                    <div className={cx('media-left')}>
                        <div className={cx('song-prefix')}>
                            <span className={cx('serial-number')}>1</span>
                        </div>
                        <div className={cx('song-thumb')}>
                            <Image
                                src="https://avatars.githubusercontent.com/u/106475471?s=400&u=04e1e88c2e7717e9f27fbc21be1d198d10c59900&v=4"
                                alt="img-thumb"
                                className={cx('song-image')}
                            />
                        </div>
                        <div className={cx('song-info')}>
                            <div className={cx('title-wrapper')}>
                                <span className={cx('song-title')}>Có chơi có chịu</span>
                            </div>
                            <div className={cx('song-artists')}>
                                <span className={cx('song-singer')}>Karik</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('media-content')}>
                        <div className={cx('album-info')}>
                            <span className={cx('album-name')}>Có chơi có chịu</span>
                        </div>
                    </div>
                    <div className={cx('media-right')}></div>
                </div>
            </div>
        </div>
    );
}

export default SongItem;
