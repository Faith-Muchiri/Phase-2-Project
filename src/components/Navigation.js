import { NavLink } from 'react-router-dom';
import { Nav} from "react-bootstrap"
import { useContext } from 'react';
import { CartContext } from '../CartContext';

const Navigation = () => {
    const cartStyle = {
      background: '#F59E0D',
      display: 'flex',
      padding: '6px 12px',
      borderRadius: '50px'
    }
    const { cart } = useContext(CartContext);

    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4">
                    <Nav.Link to="/">
                        <img style={{ height: 45 }} src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80" alt="logo" />
                    </Nav.Link>
                    <ul className="flex items-center">
                        <li><Nav.Link to="/" as={NavLink}>Home</Nav.Link></li>
                        <li className="ml-6"><Nav.Link to="/about" as={NavLink}>About</Nav.Link></li>
                        <li className="ml-6"><Nav.Link to="/products" as={NavLink}>Products</Nav.Link></li>
                        <li className="ml-6">
                            <Nav.Link to="/cart" as={NavLink}>
                                <div style={cartStyle}>
                                    <span>{ cart.totalItems ? cart.totalItems : 0 }</span>
                                    <img className="ml-2" src="/images/cart.png" alt="cart-icon" />
                                </div>
                            </Nav.Link>
                        </li>
                    </ul>
            </nav>
        </>
    )
}

export default Navigation;