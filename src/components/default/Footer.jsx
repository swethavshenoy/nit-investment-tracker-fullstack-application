import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                p: 6,
                mt: 2,
                background: 'radial-gradient(circle at 50% 50%, rgb(255, 214, 102), rgb(254, 173, 129), rgb(246, 167, 162), rgb(147, 156, 235)) 0% 0% / 400% 100%;'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="#5a287d" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2" color="#646068">
                            We are XYZ company, dedicated to providing the best service to our
                            customers.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="#5a287d" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2" color="#646068">
                            123 Main Street, Anytown, USA
                        </Typography>
                        <Typography variant="body2" color="#646068">
                            Email: info@example.com
                        </Typography>
                        <Typography variant="body2" color="#646068">
                            Phone: +1 234 567 8901
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="#5a287d" gutterBottom>
                            Follow Us
                        </Typography>
                        <Link href="https://www.facebook.com/" color="#646068">
                            <Facebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com/"
                            color="#646068"
                            sx={{ pl: 1, pr: 1 }}
                        >
                            <Instagram />
                        </Link>
                        <Link href="https://www.twitter.com/" color="#646068">
                            <Twitter />
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="#646068" align="center">
                        {"Copyright © "}
                        <Link color="inherit" href="https://your-website.com/">
                            nit private limited
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}