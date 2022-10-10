import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';

import styles from './Carousel.module.scss';
import CarouseItem from './CarouselItem';

const cx = classNames.bind(styles);

function Carousel({ data }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        swipeToSlide: true,
        styles: {
            backgroundColor: 'transparent',
        },

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: 0,
                    prevArrow: 0,
                },
            },
        ],
    };
    return (
        <div className={cx('wrapper')}>
            <Slider className={cx('carousel-list')} {...settings}>
                {data !== undefined
                    ? data.items.map((sliderItem) => {
                          return <CarouseItem data={sliderItem} key={sliderItem.encodeId} />;
                      })
                    : ''}
            </Slider>
        </div>
    );
}

Carousel.propTypes = {
    data: PropTypes.object,
};
export default Carousel;
