import { createGlobalStyle } from "styled-components";
import { COLORS } from "../../common/constants/color";

const GlobalStyle = createGlobalStyle`
    html {
        margin: 0;
        padding: 0;
        background-color: ${COLORS.WHITE};
    }

`

export default GlobalStyle;