import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//icon
import { FaShoppingBasket } from "react-icons/fa";

//context
import { Cart_context } from "../../Context/CartContextProvider";

export default function Navbar() {
    const cart_data = useContext(Cart_context);
    const { state } = cart_data;
    return (
        <Container>
            <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" enableBackground="new 0 0 100 100" version="1.1" viewBox="0 0 100 100" xmlSpace="preserve">
                    <path
                        d="M61 44.6c0 5.9-5 10.8-11 10.8s-11-4.9-11-10.8v-5.4c0-5.9 5-10.8 11-10.8 3 0 5.8 1.2 7.8 3.2 2 1.9 3.3 4.6 3.3 7.6v5.4zm38.6-18.3c-.1-.3-.3-.6-.5-.9-1.4-2.8-3.1-5.4-5-7.8-.3-.4-.7-.9-1-1.3-2.1-2.6-5.4-4.1-8.7-4.1h-51c-6.1 0-11 4.9-11 10.8v32.4c0 5.9-5 10.8-11 10.8H5.5c-3 0-5.5 2.4-5.5 5.4 0 .8.2 1.5.4 2.1.1.3.3.6.5.9 1.4 2.8 3.1 5.4 5 7.8.3.4.7.9 1 1.3 2.1 2.6 5.4 4.1 8.7 4.1h17.8c6.1 0 11-4.9 11-10.8 0-3 2.5-5.4 5.5-5.4s5.5 2.4 5.5 5.4c0 3 1.2 5.7 3.3 7.6 2 2 4.7 3.2 7.8 3.2H72c6.1 0 11-4.9 11-10.8V44.6c0-5.9 5-10.8 11-10.8h.3c3 0 5.5-2.4 5.5-5.4.2-.8 0-1.5-.2-2.1z"
                        className="st0" fill="#235fff"
                    ></path>
                </svg>
            </Link>
            <Link to="/cart">
                <Cart_button>
                    <FaShoppingBasket />
                    <span>{state.products_count}</span>
                </Cart_button>
            </Link>
        </Container>
    );
}

//styling
const Container = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    height: 4rem;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    box-shadow: 0 0 5px 5px silver;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    overflow: hidden;
    > a {
        text-decoration: none;
    }
    a > svg {
        width: 2rem;
        height: 2rem;
        overflow: hidden;
    }
`;
const Cart_button = styled.button`
    height: 3rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: bolder;
    > svg {
        font-size: 2rem;
        margin-right: 0.5rem;
        color: #ff0059;
    }
    color: #235fff;
    display: flex;
    align-items: center;
    border-radius: 2rem;
    padding: 1rem;
    &:hover {
        background: radial-gradient(silver, transparent);
    }
`;
