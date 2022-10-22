import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './SectionItem.module.scss';
import Image from '~/components/Image';
import { PlayCircleIcon } from '~/components/icons';
import { type } from '@testing-library/user-event/dist/type';
const cx = classNames.bind(styles);
function SectionItem({ data, topic }) {
    console.log(data);
    return (
        <div className={cx('section-item', topic ? 'topic' : '')}>
            <div className={cx('section-thumb')}>
                <Link to={data.link} state={{ id: data.encodeId }}>
                    <Image
                        src={type ? data.thumbnail : data.thumbnailM}
                        alt="image-section"
                        className={cx('image-section-item')}
                    />
                </Link>

                {topic && (
                    <div className={cx('subimage')}>
                        {data.playlists.map((item) => (
                            <Image src={item.thumbnail} alt="image" className={cx('image')} />
                        ))}
                    </div>
                )}
                {topic === false && <PlayCircleIcon className={cx('play-icon')} />}
            </div>
            <div className={cx('section-information')}>
                <Link to={data.link} state={{ id: data.encodeId }}>
                    <h4 className={cx('title')}>{data.title}</h4>
                </Link>
                {topic === false && data.sortDescription && <p className={cx('description')}>{data.sortDescription}</p>}
            </div>
        </div>
    );
}

SectionItem.propTypes = {
    data: PropTypes.object,
    topic: PropTypes.bool,
};
export default SectionItem;
