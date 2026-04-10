import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
  Divider,
} from "@mui/material";

function Swapi() {
  const [url, setUrl] = useState("https://swapi.py4e.com/api/people/1/");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log("Ошибка:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        SWAPI
      </Typography>

      <Card
        sx={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <CardContent>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={3}>
            <TextField
              fullWidth
              label="Ссылка API"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <Button variant="contained" onClick={fetchData}>
              Получить данные
            </Button>
          </Stack>

          <Divider sx={{ mb: 3 }} />

          {loading && <Typography>Загрузка...</Typography>}

          {data && !loading && (
            <Box
              sx={{
                backgroundColor: "rgba(255,255,255,0.03)",
                p: 2,
                borderRadius: 2,
                overflowX: "auto",
              }}
            >
              <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                {JSON.stringify(data, null, 2)}
              </pre>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default Swapi;