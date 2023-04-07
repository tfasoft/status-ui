import { Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box>
        <Typography
          fontFamily="Boogaloo"
          fontSize={80}
          gutterBottom
        >
          You lost!?
        </Typography>
        <Button
          onClick={() => router.push("/")}
          variant="outlined"
          size="large"
        >
          Back to home
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
