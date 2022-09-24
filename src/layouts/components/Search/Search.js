import { faChartLine, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless';
import { useState } from 'react';

import Button from '~/components/Button';
import styles from './Search.module.scss';
import Popper from '~/components/Popper';

const cx = classNames.bind(styles);
function Search() {
    const [showResultSearch, setShowResultSearch] = useState(false);
    return (
        <div className={cx('search')}>
            <Button noneborder>
                <FontAwesomeIcon icon={faSearch} className={cx('icon-search')} />
            </Button>
            <TippyHeadless
                interactive
                visible={showResultSearch}
                onClickOutside={() => setShowResultSearch(false)}
                offset={[-39, -40]}
                placement="bottom-start"
                render={(attrs) => {
                    return (
                        <Popper className={cx('search-popper')} tabIndex="-1" {...attrs}>
                            <div className={cx('search')}>
                                <Button noneborder className={cx('btn-search')}>
                                    <FontAwesomeIcon icon={faSearch} className={cx('icon-search')} />
                                </Button>
                                <input
                                    className={cx('search-input')}
                                    spellCheck={false}
                                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                                />
                            </div>
                            <div className={cx('search-result')}>
                                <div className={cx('result-list')}>
                                    <p className={cx('search-tittle')}>Đề xuất cho bạn</p>
                                    <div className={cx('search-item')}>
                                        <FontAwesomeIcon icon={faChartLine} className={cx('icon-chart')} />
                                        <p className={cx('tittle-item')}>Chưa quên</p>
                                    </div>
                                    <div className={cx('search-item')}>
                                        <FontAwesomeIcon icon={faChartLine} className={cx('icon-chart')} />
                                        <p className={cx('tittle-item')}>Mono</p>
                                    </div>
                                    <div className={cx('search-item')}>
                                        <FontAwesomeIcon icon={faChartLine} className={cx('icon-chart')} />
                                        <p className={cx('tittle-item')}>Shut down</p>
                                    </div>
                                    <div className={cx('search-item')}>
                                        <FontAwesomeIcon icon={faChartLine} className={cx('icon-chart')} />
                                        <p className={cx('tittle-item')}>Karaoke</p>
                                    </div>
                                    <div className={cx('search-item')}>
                                        <FontAwesomeIcon icon={faChartLine} className={cx('icon-chart')} />
                                        <p className={cx('tittle-item')}>ngủ ngon</p>
                                    </div>
                                </div>
                            </div>
                        </Popper>
                    );
                }}
            >
                <input
                    className={cx('search-input')}
                    spellCheck={false}
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                    onClick={() => setShowResultSearch(!showResultSearch)}
                />
            </TippyHeadless>
        </div>
    );
}

export default Search;
