// import './App.css';
import Leftbar from './components/Leftbar';
import Main from './components/Wines'
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import AddPost from './components/AddPost';
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
        <AddPost />
      </Box>
  );
}

export default App;
