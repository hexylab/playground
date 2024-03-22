import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: 40,
          backgroundColor: 'gray',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {          
          minHeight: 40, // Toolbarの高さを40pxに設定
          paddingTop: '0px', // 上のパディングを調整
          paddingBottom: '0px', // 下のパディングを調整
        },
      },
    },
  },
});


function Header(props) {
  const { sections, title } = props;

  return(
  <ThemeProvider theme={theme}>
  <AppBar position="fixed">
    <Toolbar
      component="nav"
      variant="dense"
      sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
    >
      <Typography
          component="h2"
          variant="h6"
          color="inherit"
          align="flex-start"
          noWrap
          sx={{ flex: 1 }}
        >
        {title}
      </Typography>
      {sections.map((section) => (
        <Link
          color="inherit"
          noWrap
          key={section.title}
          variant="body2"
          href={section.url}
          sx={{ p: 1, flexShrink: 0 }}
        >
          {section.title}
        </Link>
      ))}
    </Toolbar>
  </AppBar>
  </ThemeProvider>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;