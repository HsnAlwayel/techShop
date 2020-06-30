import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


const Title = styled.h1`
  text-align: center;
  color: blue;
`;
const Desc = styled.h4`
  text-align: center;
`;
const ShopImage = styled.img`
display: block;
margin-Left: auto;
margin-Right: auto;
width: 28%;
`;
const List = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
const ProductImage = styled.div`
margin: 20px;
img {
    display: block;
    margin-Left: auto;
    margin-Right: auto;
    width: 50%;
    width: 200px;
    height: 200px;
}
p {
    text-align: center;
    &.product-price{
        color:${props => props.theme.color};
    }
  }

`;
const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;
export { Title, Desc, ShopImage, List, ProductImage, GlobalStyle };







// --------------------




