import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './SectionItem.module.scss';
import Image from '~/components/Image';
import { PlayCircleIcon } from '~/components/icons';
import { type } from '@testing-library/user-event/dist/type';
const cx = classNames.bind(styles);
function SectionItem({ data, topic, category }) {
    return (
        <div className={cx('section-item', topic ? 'topic' : '', category ? 'category' : '')}>
            <div className={cx('section-thumb')}>
                <Link to={data.link} state={{ id: data.encodeId }}>
                    <Image
                        src={type ? data.thumbnail : data.thumbnailM}
                        alt="image-section"
                        className={cx('image-section-item')}
                    />
                </Link>

                {topic === true && (
                    <div className={cx('subimage')}>
                        {data.playlists
                            ? data.playlists.map((item, index) => (
                                  <Image src={item.thumbnail} key={index} alt="image" className={cx('image')} />
                              ))
                            : ''}
                    </div>
                )}
                {topic ? '' : <PlayCircleIcon className={cx('play-icon')} />}
            </div>
            <div className={cx('section-information')}>
                <Link to={data.link} state={{ id: data.encodeId }}>
                    <h4 className={cx('title')}>{data.title}</h4>
                </Link>
                {category ? (
                    <p className={cx('artist')}>
                        {data.artists.map((artist, index) => (
                            <span key={index}> {`${artist.name}, `}</span>
                        ))}
                    </p>
                ) : (
                    ''
                )}
                {!category ? <p className={cx('description')}>{data.sortDescription}</p> : ''}
            </div>
        </div>
    );
}

SectionItem.propTypes = {
    data: PropTypes.object,
    topic: PropTypes.bool,
};
export default SectionItem;
