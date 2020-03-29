import breakpoints from "./breakpoints";
import space from "./space";
import fonts from "./fonts";
import fontSizes from "./font-sizes";
import fontWeights from "./font-weights";
import lineHeights from "./line-heights";
import letterSpacings from "./letter-spacings";
import colors from "./colors";
import layout from "./layout";
import styles from "./styles";

export default {
  breakpoints,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  colors,
  styles,
  layout,
  buttons: {
    primary: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      "&:hover": {
        bg: "secondary"
      }
    }
  },
  text: {
    body: {
      fontSize: 3,
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    heading: {
      fontSize: 5,
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading"
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "wider",
      fontWeight: "semibold"
    }
  }
};
