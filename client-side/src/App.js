// import './App.css';
import Leftbar from './components/Leftbar';
import Main from './components/Main'
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import { Box, Stack } from '@mui/material'

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Leftbar />
        <Main />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
