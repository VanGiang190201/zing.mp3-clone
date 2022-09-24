import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);
function MenuItem({ data }) {
    return (
        <div className={cx('menu-item')}>
            {data.type === 'fistFooter' ? <hr className={cx('line')} /> : true}
            <Button className={cx('btn-item')}>
                <p className={cx('left-icon')}>{data.iconLeft}</p>
                <p className={cx('btn-tittle')}>{data.title}</p>
                <p className={cx('right-icon')}>{data.iconRight ? data.iconRight : true}</p>
            </Button>
        </div>
    );
}

export default MenuItem;
