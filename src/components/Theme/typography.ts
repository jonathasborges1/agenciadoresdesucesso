import { Theme, TypographyVariantsOptions } from "@mui/material/styles";

/*
As seguintes fontes requerem que você as importe: (as demais funcionam sem precisar importar)

  `montserrat`,
  `Open Sans`,
  `Oswald`,
  `Poppins`,
  `"Roboto"`,
  `"Segoe UI"`,
  `Source Sans Pro`,

  `Tahoma`,
  `Palatino`,
  `"Oxygen"`,
  `"Ubuntu"`,
  `"Cantarell"`,
  `"Fira Sans"`,
  `"Droid Sans"`,
  `sans-serif`,
  `"Helvetica Neue"`,
  `"BlinkMacSystemFont"`,
  `-apple-system`,
  `Avant Garde`,
  `Century Gothic`,
  `Helvetica`,
  `Lucida Grande`,
  `Myriad Pro`,
  `lato`,
  `Roboto`,
  
*/

const defaultColor = "#FFFFFF"; // Branco
// const defaultColor = "#000"; // Branco

export const options: TypographyVariantsOptions = {
  fontFamily: [
    'montserrat',
    `Comic Sans MS`,
    `Arial`,
    `Candara`,
    `Calibri`,
    `Consolas`,
    `Courier`,
    `Courier New`,
    `Georgia`,
    `Impact`,
    `Lucida Sans Unicode`,
    `Segoe UI`,
    `Times`,
    `Times New Roman`,
    `Trebuchet MS`,
    `Verdana`,
  ].join(","),
};

export const overrides = (theme: Theme): TypographyVariantsOptions => (
  {
    h1: { fontSize: "2.2rem", fontWeight:700, color: defaultColor},
    h2: { fontSize: "2rem", fontWeight:600, color: defaultColor},
    h3: { fontSize: "1.5rem", fontWeight:500, color: defaultColor },

    body1: {fontSize: "1rem", fontWeight:400 , color: defaultColor},
    caption: {fontSize: "0.8rem", fontWeight:300 , color: defaultColor},
    button: { textTransform: "none" },
 
    sectionTitle: {
     color: theme.palette.titles.main,
     fontSize: "2.5em !important", 
     fontFamily: "Poppins",
     fontWeight: 700,
     display: "block",
     [theme.breakpoints.up("iphone-5-SE")]: { fontSize: "2rem" },
     [theme.breakpoints.up("iphone-6-7-8")]: { fontSize: "2.4rem" },
    },

    sectionSubtitle: {
      display: "block",
      color: theme.palette.subTitles.main,
      [theme.breakpoints.up("iphone-5-SE")]: { fontSize: "1rem" },
      [theme.breakpoints.up("iphone-6-7-8")]: { fontSize: "1.2rem" },
    },
  }
);

 
// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    sectionTitle: true;
    sectionSubtitle: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    sectionTitle: React.CSSProperties;
    sectionSubtitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    sectionTitle?: React.CSSProperties;
    sectionSubtitle?: React.CSSProperties;
  }
}