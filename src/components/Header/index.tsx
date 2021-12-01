import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';
import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.reduce(
    (acc, product) => {
      if (!acc.knownProductsIds.find((id) => id === product.id)) {
        acc.total += 1;
        acc.knownProductsIds.push(product.id);
        return acc;
      }

      return acc;
    },
    {
      total: 0,
      knownProductsIds: []
    } as {
      total: number;
      knownProductsIds: number[];
    }
  );

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize.total === 1
              ? `${cartSize.total} item`
              : `${cartSize.total} itens`}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default Header;
