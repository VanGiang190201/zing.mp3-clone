import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Radio.module.scss';
import request from '~/utils/request';
import RadioChannel from './RadioChannel';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);
function Radio() {
    const [data, setData] = useState([]);
    useEffect(() => {
        request.get('/radio').then((res) => setData(res.data.data.items[0]));
    }, []);
    return !data.items ? (
        <Loading />
    ) : (
        <div className={cx('wrapper')}>
            <div className={cx('radio-list')}>
                {data.items.map((channel) => (
                    <RadioChannel data={channel} key={channel.encodeId} />
                ))}
            </div>
        </div>
    );
}

export default Radio;
