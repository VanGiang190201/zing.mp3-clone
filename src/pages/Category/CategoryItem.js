import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './Category.module.scss';
import request from '~/utils/request';
import Image from '~/components/Image';
import Section from '~/components/Section';
import SectionItem from '~/components/Section/SectionItem';
import Loading from '~/components/Loading';
const cx = classNames.bind(styles);
function CategoryItem() {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    console.log(data);
    const location = useLocation();
    const { id } = location.state;
    useEffect(() => {
        request.get(`/category/${id}`).then((res) => {
            setData(res.data.data);
            setIsLoading(false);
        });
    }, [id]);
    return isLoading ? (
        <Loading />
    ) : (
        <div className={cx('category-item')}>
            <div className={cx('cover')}>
                <div className={cx('blur')}></div>
                <Image src={data.cover} alt="cover-image" className={cx('cover-image')} />
            </div>
            <div className={cx('detail-container')}>
                <Section topic={true} category>
                    {data.sections[0].items.map((item) => (
                        <SectionItem data={item} key={item.encodeId} category />
                    ))}
                </Section>
            </div>
        </div>
    );
}

export default CategoryItem;
