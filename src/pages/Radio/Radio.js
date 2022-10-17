import classNames from 'classnames/bind';
import { useEffect } from 'react';

import styles from './Radio.module.scss';
import request from '~/utils/request';

const cx = classNames.bind(styles);
function Radio() {
    useEffect(() => {
        request.get('/radio').then((res) => console.log(res.data));
    }, []);
    return <div className={cx('wrapper')}></div>;
}

export default Radio;
