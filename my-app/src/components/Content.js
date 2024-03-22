// src/components/Content.js
import React from 'react';
import CustomCard from './CustomCard'
import { Box, Typography } from '@mui/material';
import { Divider, Grid  } from '@mui/material';

const cards = [
  { 
    title: 'テスト', 
    description: 'テスト用のページ', 
    detail: 'テスト用の簡素なhtmlファイルを作成してください', 
    url: `${process.env.PUBLIC_URL}/htmls/test.html`, 
    imageUrl: `${process.env.PUBLIC_URL}/images/test.jpeg` 
  },
];

function Content() {
  return (
    <div id = "content">
    <Box mt={4} mb={4}>
      <Typography variant="h5" gutterBottom>
        作ったモノ
      </Typography>

      {/* 見出しの下の線 */}
      <Divider />

      {/* 説明文 */}
      <Typography variant="body1" paragraph marginTop={2}>
        ChatGPTに作成させたWebアプリケーションです。<br/>
        カードをクリックすると別のタブでChatGPTが作成したままのページが開きます。<br/>
        カード下部の"CHATGPTコマンド"をクリックするとChatGPTに依頼したスクリプト文が表示されます。
      </Typography>

      <Box mt={2}>
      <Grid container spacing={1}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CustomCard
              title={card.title}
              description={card.description}
              detail={card.detail}
              url={card.url}
              imageUrl={card.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
      </Box>
    </Box>
    </div>
  );
}

export default Content;
