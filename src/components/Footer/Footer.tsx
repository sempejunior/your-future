import { Box, Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import styles from "./Footer.module.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function GuestFooter() {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        }
    });
    return (

        <footer className={styles.footer}>
            <ThemeProvider theme={darkTheme}>
                <Paper sx={{
                    marginTop: 'calc(10% + 60px)',
                    width: '100%',
                    position: 'fixed',
                    bottom: 0,
                }} component="footer" square variant="outlined">
                    <Container maxWidth="lg">
                        <Box
                            sx={{
                                flexGrow: 1,
                                justifyContent: "center",
                                display: "flex",
                                my: 1
                            }}
                        >
                        </Box>

                        <Box
                            sx={{
                                flexGrow: 1,
                                justifyContent: "center",
                                display: "flex",
                                mb: 2,
                            }}
                        >
                            <Typography variant="caption">
                                Copyright ©2022. [] Limited
                            </Typography>
                        </Box>
                    </Container>
                </Paper>
            </ThemeProvider>
        </footer >

    );
}