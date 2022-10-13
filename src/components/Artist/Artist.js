import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Artist.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Artist({ artist, className }) {
    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('image-thumb')}>
                <Image src={artist.thumbnailM} alt="image-artist" className={cx('image')} />
            </div>
            <div className={cx('artist-information')}>
                <p className={cx('artist-name')}>{artist.name}</p>
                <p className={cx('artist-follower')}>
                    {artist.totalFollow}
                    <span> người quan tâm</span>
                </p>
            </div>

            <Button className={cx('btn')}>QUAN TÂM</Button>
        </div>
    );
}

Artist.propTypes = {
    artist: PropTypes.object,
    className: PropTypes.string,
};
export default Artist;
