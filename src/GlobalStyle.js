import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* @import url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff') */
@font-face {
    font-family: 'InfinitySans-RegularA1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'InfinitySans-BoldA1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-BoldA1.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

/* font 설정 */
h1,h2,h3{
    font-family: 'InfinitySans-BoldA1',sans-serif !important;;
}
input {
  font-family: 'InfinitySans-RegularA1', sans-serif !important;
}
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'InfinitySans-RegularA1', sans-serif !important;
  color:#121212;
  &:focus,&:hover,&:active{
  outline:none !important;
  }
  outline:none !important;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
button {
  border: 0;
}
body{
  background-color: #fff;
  font-size:12px;

  /* 스크롤바 제거 */
  &::-webkit-scrollbar {
    display: none;
  }
  /* .container {
    max-width: 1140px;
    margin: 0 auto;
    position: relative;
    @media (max-width: 1200px) {
        width: calc(100% - 50px);
    }
  } */
}
`;
