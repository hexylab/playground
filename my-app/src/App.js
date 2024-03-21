import { Box } from '@mui/material';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <img src={`${process.env.PUBLIC_URL}/images/header-image.jpg`} alt="Header" />
      <Box mt={4} mb={4}> {/* ここでBoxを使ってマージンを追加 */}
        <Content />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;