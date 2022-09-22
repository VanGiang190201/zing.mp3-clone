import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Image.module.scss';
function Image({ src, alt, className, ...props }) {
    return <img className={classNames(styles.wrapper, className)} src={src} alt={alt} {...props} />;
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    classNames: PropTypes.string,
};
export default Image;
