import { Box, Container } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Profile from './components/Profile';

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Content', url: '#content' },
  { title: 'Profile', url: '#profile' },
];

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header title="Hexyl's Playground" sections={sections} />
      <Container maxWidth="lg"> {/* 最大幅をlgに設定 */}
        <Box mt={4} mb={4}> {/* ここでBoxを使ってマージンを追加 */}
          <Content />
          <Profile />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;