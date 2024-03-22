import React from 'react';
import { Typography, Divider, Link, Stack, Box } from '@mui/material';

function Profile() {
  return (
    <div id = "profile">
    <Box mt={4} mb={4}>
      {/* "About me"の見出し */}
      <Typography variant="h5" gutterBottom>
        About me
      </Typography>

      {/* 見出しの下の線 */}
      <Divider />

      {/* 説明文 */}
      <Typography variant="body1" paragraph marginTop={2}>
        モノづくりが好きなぼっち系ITエンジニアのHexyl(へくしる)です。<br/>
        TwitterやYoutubeやGithubに作った"がらくた"をアップロードしています。
        ご興味があるかたはフォローをお願いします。
      </Typography>

      {/* SNSリンク */}
      <Stack direction="row" spacing={2} marginTop={2}>
        <Link href="https://twitter.com/hexylab" target="_blank" rel="noopener">
          Twitter
        </Link>
        <Link href="https://www.youtube.com/channel/UCuKsxWxgMiDr_-XVRd0-65A" target="_blank" rel="noopener">
          Youtube
        </Link>
        <Link href="https://github.com/hexylab" target="_blank" rel="noopener">
          Github
        </Link>
      </Stack>
    </Box>
    </div>
  );
}

export default Profile;