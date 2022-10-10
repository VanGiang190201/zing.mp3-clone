import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './SectionItem.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function SectionItem() {
    return (
        <div className={cx('section-item')}>
            <div className={cx('section-thumb')}>
                <Link>
                    <Image
                        src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/2/9/9/3299b789888d8f3ea2e1dcff5d7a28b3.jpg"
                        alt="image-section"
                        className={cx('image-section-item')}
                    />
                </Link>
            </div>
            <div className={cx('section-information')}>
                <Link>
                    <h4 className={cx('title')}>Nghe nhạc mỗi ngày</h4>
                </Link>
            </div>
        </div>
    );
}

export default SectionItem;
