import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    return (
        <div className={cx('search')}>
            <Button noneborder>
                <FontAwesomeIcon icon={faSearch} className={cx('icon-search')} />
            </Button>
            <input
                className={cx('search-input')}
                spellCheck={false}
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            />
        </div>
    );
}

export default Search;
