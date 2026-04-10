import { Box, Container, Typography, Stack, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        mt: 4,
        py: 3,
        backgroundColor: "rgba(255,255,255,0.02)",
      }}
    >
      <Container>
        <Stack spacing={1} alignItems="center">
          <Typography variant="body1" fontWeight="bold">
            Контакты
          </Typography>
          <Link href="mailto:alex@example.com" color="inherit" underline="hover">
            alex1996@example.com
          </Link>
          <Link href="https://github.com/Alexandr19961802?tab=repositories" target="_blank" color="inherit" underline="hover">
            GitHub
          </Link>
          <Typography variant="body2" color="text.secondary">
            © 2026 Александр. Frontend Developer
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;