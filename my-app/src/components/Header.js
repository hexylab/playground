import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => (
  <AppBar position="static" style={{ backgroundImage: 'url(背景画像のURL)', backgroundSize: 'cover' }}>
    <Toolbar>
      <Typography variant="h4">
        Home
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;