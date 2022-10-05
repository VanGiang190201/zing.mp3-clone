import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './NewMusic.module.scss';
import request from '~/utils/request';
import SongItem from '~/components/SongItem';
const cx = classNames.bind(styles);
function NewMusic() {
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        request.get('/chart/new-release').then((res) => setData(res.data));
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('container')}>
                    <SongItem />
                    <SongItem />
                </div>
            </div>
        </div>
    );
}

export default NewMusic;
