import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Home.module.scss';
import Carousel from '~/components/Carousel';
import request from '~/utils/request';
import SectionItem from '~/components/Section/SectionItem';
import Section from '~/components/Section';

const cx = classNames.bind(styles);
function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        request.get('/home').then((res) => {
            if (res.data.data.items) {
                setData(res.data.data.items);
            }
        });
    });
    return (
        <div className={cx('wrapper')}>
            <div className={cx('gallery')}>
                <Carousel data={data[0]} />
                <Section>
                    <SectionItem />
                    <SectionItem />
                    <SectionItem />
                    <SectionItem />
                </Section>
                <Section>
                    <SectionItem />
                </Section>
            </div>
        </div>
    );
}

export default Home;
