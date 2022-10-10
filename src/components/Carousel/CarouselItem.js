import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Carousel.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function CarouseItem({ data }) {
    return (
        <div className={cx('carousel-item')}>
            <Link to={data.link} state={{ id: data.encodeId }} className={cx('image-wrapper')}>
                <Image src={data.banner} alt="carouse-img" className={cx('carousel-image')} />
            </Link>
        </div>
    );
}

CarouseItem.propTypes = {
    data: PropTypes.object,
};
export default CarouseItem;
