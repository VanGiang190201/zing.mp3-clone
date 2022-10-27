import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Category.module.scss';
import request from '~/utils/request';
import Image from '~/components/Image';
import Section from '~/components/Section';
import SectionItem from '~/components/Section/SectionItem';
import Button from '~/components/Button';
import Loading from '~/components/Loading';
const cx = classNames.bind(styles);
function Category() {
    const [data, setData] = useState({});
    const [topic, setTopic] = useState([]);
    const [titleButton, setTitleButton] = useState('TẤT CẢ');
    const [isShowAll, setIsShowAll] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    console.log(data);
    useEffect(() => {
        request.get('/category').then((res) => {
            setData(res.data.data);
            setTopic(res.data.data.topic.slice(0, 4));
            setIsLoading(false);
        });
    }, []);

    const handleShowHideTopic = () => {
        if (isShowAll) {
            setTopic(data.topic.slice(0, 4));
            setIsShowAll(!isShowAll);
            setTitleButton('TẤT CẢ');
        } else {
            setTopic(data.topic);
            setIsShowAll(!isShowAll);
            setTitleButton('ẨN BỚT');
        }
    };
    return isLoading ? (
        <Loading />
    ) : (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('banner')}>
                    {data.banners && (
                        <Image src={data.banners[1].cover} alt="image-banner" className={cx('image-banner')} />
                    )}
                </div>
                <div className={cx('content')}>
                    <div className={cx('topic')}>
                        <Section title="Tâm trạng và hoạt động" topic>
                            {topic.map((item) => (
                                <SectionItem key={item.encodeId} data={item} topic />
                            ))}
                        </Section>
                        <div className={cx('show-hide-btn')}>
                            <Button outline className={cx('btn')} onClick={handleShowHideTopic}>
                                {titleButton}
                            </Button>
                        </div>
                    </div>
                    <div className={cx('genre')}>
                        {data.genre.map((list) => (
                            <Section key={list.encodeId} title={list.title}>
                                {list.playlists.map((item) => (
                                    <SectionItem key={item.encodeId} data={item} />
                                ))}
                            </Section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
