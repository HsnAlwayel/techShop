import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Title = styled.h1`
  text-align: center;
  color: blue;
`;
export const Description = styled.h4`
  text-align: center;
`;
export const ShopImage = styled.img`
display: block;
margin-Left: auto;
margin-Right: auto;
width: 28%;
`;
export const List = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;
export const ProductImage = styled.div`
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
export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;
export const ThemeButton = styled.button`
  font-size: 3em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;
export const DeleteButtonStyled = styled.p`
color: red;
`
// export { Title, Description, ShopImage, List, ProductImage, GlobalStyle, ThemeButton, DeleteButtonStyled };







// --------------------




