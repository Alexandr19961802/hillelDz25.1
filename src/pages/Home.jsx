import React from "react";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Grid,
    Stack,
    Typography,
  } from "@mui/material";
  
  const skills = ["HTML", "CSS", "JavaScript", "React", "Redux", "Git", "MUI"];
  
  function Home() {
    return (
      <Box>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Александр
            </Typography>
  
            <Typography variant="h5" color="secondary" gutterBottom>
              Frontend Developer
            </Typography>
  
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 600 }}>
              Изучаю HTML, CSS, JavaScript, React и Redux. Люблю создавать
              удобные, красивые и понятные интерфейсы. Сейчас развиваюсь во
              frontend-разработке и собираю свои проекты в портфолио.
            </Typography>
  
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <Button variant="contained" size="large">
                Мои проекты
              </Button>
              <Button variant="outlined" size="large">
                Связаться
              </Button>
            </Stack>
          </Grid>
  
          <Grid item xs={12} md={5}>
            <Box display="flex" justifyContent="center">
              <Avatar
                sx={{
                  width: 220,
                  height: 220,
                  fontSize: 64,
                  bgcolor: "primary.main",
                  boxShadow: "0 0 40px rgba(124,77,255,0.35)",
                }}
              >
                A
              </Avatar>
            </Box>
          </Grid>
        </Grid>
  
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Навыки
          </Typography>
  
          <Card
            sx={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <CardContent>
              <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    color="primary"
                    variant="outlined"
                    sx={{ fontSize: 16, px: 1 }}
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>
  
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            О себе
          </Typography>
  
          <Card
            sx={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <CardContent>
              <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                Мне нравится верстка, работа с интерфейсами, адаптивность и
                логика приложений. Уже умею создавать страницы, работать с DOM,
                React, состоянием, Redux и API. Хочу развиваться как frontend
                developer и делать сильные проекты для портфолио.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    );
  }
  
  export default Home;