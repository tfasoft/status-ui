import { Box, Grid, Toolbar, Typography, Alert } from "@mui/material";

import Head from "next/head";

import { API } from "@/api";
import { Service } from "@/components";

export const getServerSideProps = async () => {
  try {
    const services = await API.get("services");

    return {
      props: {
        services: services.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
};

export default function Home({ services, error }) {
  const run = services
    .map((srv) => srv.pm2_env.status)
    .every((item) => item === "online");

  console.log(services.length);
  console.log(services.length < 0);

  return (
    <>
      <Head>
        <title>TFAsoft Services Status</title>
      </Head>
      <Box sx={{ my: 5 }}>
        <Toolbar />
        <Box
          sx={{
            py: 20,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box>
            <Typography fontWeight={900} fontSize={80}>
              TFAsoft Services Status
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={20}
              sx={{
                mb: 10,
              }}
              gutterBottom
            >
              Powered by Next.<small>Js</small>
            </Typography>
            <Typography
              fontWeight={400}
              fontSize={16}
              color="typography.secondary"
            >
              Welcome to Service Status - the app that keeps you informed about
              the status of your online services in real-time. No more manually
              checking for updates or wondering if a service is down. Whether
              youre a business owner or an avid user of online services, Service
              Status can save you time and help you stay on top of any service
              disruptions. Try it out today!
            </Typography>
          </Box>
        </Box>

        <Alert
          variant="filled"
          severity={
            services.length === 0 ? "warning" : run ? "success" : "error"
          }
        >
          {services.length === 0
            ? "No item is found"
            : run
            ? "All systems are running in the correct way!"
            : "Something is went wrong. We are working on it."}
        </Alert>

        <br />
        {services ? (
          <Box>
            <Grid container>
              {services.map((service) => (
                <Grid md={6} sm={12} xs={12} item key={service.pid}>
                  <Service service={service} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : (
          <Typography>No internal service is found</Typography>
        )}
      </Box>
    </>
  );
}
