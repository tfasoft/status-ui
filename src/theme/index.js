import { createTheme, colors } from "@mui/material";

import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

const theme = createTheme({
  palette: {
    background: {
      default: "#f1f1f1",
    },
    primary: {
      main: colors.blue[600],
    },
  },
  typography: {
    fontFamily: vazirmatn.style.fontFamily,
  },
});

export default theme;
