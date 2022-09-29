import classNames from 'classnames/bind';

import styles from './SongControl.module.scss';
import Button from '~/components/Button';
import { RandomIcon, PrevIcon, NextIcon, PauseIcon, LoopIcon } from '~/components/icons';

const cx = classNames.bind(styles);
function SongControl() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('action')}>
                <Button noneborder className={cx('btn')}>
                    <RandomIcon className={cx('icon')} />
                </Button>
                <Button noneborder className={cx('btn')}>
                    <PrevIcon className={cx('icon')} />
                </Button>
                <Button noneborder className={cx('btn')}>
                    <PauseIcon className={cx('icon')} />
                </Button>
                <Button noneborder className={cx('btn')}>
                    <NextIcon className={cx('icon')} />
                </Button>
                <Button noneborder className={cx('btn')}>
                    <LoopIcon className={cx('icon')} />
                </Button>
            </div>
            <div className={cx('range')}>
                <span className={cx('time')}>00:00</span>
                <input type="range" className={cx('progress')} />
                <span className={cx('time')}>04:52</span>
            </div>
        </div>
    );
}

export default SongControl;
