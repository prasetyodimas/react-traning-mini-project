import PropTypes from 'prop-types';

/**
 * Layout component that renders its children within a React fragment.
 *
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - The children elements to render.
 */

const Layout = ({ children }) => {
  return (
    <>{children}</>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout