import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './SectionItem.module.scss';
import Image from '~/components/Image';
import { PlayCircleIcon } from '~/components/icons';
const cx = classNames.bind(styles);
function SectionItem({ data }) {
    return (
        <div className={cx('section-item')}>
            <div className={cx('section-thumb')}>
                <Link to={data.link} state={{ id: data.encodeId }}>
                    <Image src={data.thumbnailM} alt="image-section" className={cx('image-section-item')} />
                </Link>

                <PlayCircleIcon className={cx('play-icon')} />
            </div>
            <div className={cx('section-information')}>
                <Link to={data.link} state={{ id: data.encodeId }}>
                    <h4 className={cx('title')}>{data.title}</h4>
                </Link>
                {data.sortDescription && <p className={cx('description')}>{data.sortDescription}</p>}
            </div>
        </div>
    );
}

SectionItem.propTypes = {
    data: PropTypes.object,
};
export default SectionItem;
