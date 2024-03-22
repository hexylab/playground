import { Box, Container } from '@mui/material';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const sections = [
  { title: 'Home', url: 'https://hexylab.github.io/playground/' },
];

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header title="Hexyl's Playground" sections={sections} />
      <Container maxWidth="lg"> {/* 最大幅をlgに設定 */}
        <Box
          component="img"
          sx={{
            width: '100%', // 画像を画面幅いっぱいに広げる
            height: 200, // 画像の高さを指定
            objectFit: 'cover', // 画像のサイズを調整してBoxにフィットさせる
          }}
          src={`${process.env.PUBLIC_URL}/images/header-image.jpg`}
          alt="ページのバナー"
        />
        <Box mt={4} mb={4}> {/* ここでBoxを使ってマージンを追加 */}
          <Content />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;