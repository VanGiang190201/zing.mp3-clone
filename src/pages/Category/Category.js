import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Category.module.scss';
import request from '~/utils/request';
import Image from '~/components/Image';
import Section from '~/components/Section';
import SectionItem from '~/components/Section/SectionItem';
const cx = classNames.bind(styles);
function Category() {
    const [data, setData] = useState({});
    const [topic, setTopic] = useState([]);
    console.log(topic);
    useEffect(() => {
        request.get('/category').then((res) => {
            setData(res.data.data);
            setTopic(res.data.data.topic.slice(0, 4));
        });
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('banner')}>
                    {data.banners && (
                        <Image src={data.banners[1].cover} alt="image-banner" className={cx('image-banner')} />
                    )}
                </div>
                <div className={cx('content')}>
                    <div className={cx('topic')}>
                        <Section title="Tâm trạng và hoạt động">
                            {topic.map((item) => (
                                <SectionItem key={item.encodeId} data={item} topic />
                            ))}
                        </Section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
