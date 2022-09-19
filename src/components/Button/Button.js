import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    href,
    to,
    children,
    primary = false,
    noneborder = false,
    outline = false,
    onClick,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        noneborder,
        outline,
    });
    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}
Button.propTypes = {
    href: PropTypes.string,
    to: PropTypes.string,
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    noneborder: PropTypes.bool,
    outline: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
};
export default Button;
