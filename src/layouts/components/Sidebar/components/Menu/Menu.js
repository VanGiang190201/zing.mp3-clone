import PropTypes from 'prop-types';

function Menu({ children, className }) {
    return <nav className={className}>{children}</nav>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
export default Menu;
