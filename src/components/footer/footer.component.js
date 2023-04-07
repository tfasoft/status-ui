import { Container, Box, Typography } from "@mui/material";

import { appConfig } from "@/config";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        py: 2,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography color="white" variant="body1" fontSize={15}>
            Version {appConfig.version} - Powered by Next.Js
          </Typography>
          <Typography color="white" variant="body1" fontSize={15}>
            TFASot 2022 - {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
