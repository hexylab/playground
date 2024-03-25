// src/components/Content.js
import React from 'react';
import CustomCard from './CustomCard'
import { Box, Typography } from '@mui/material';
import { Divider, Grid  } from '@mui/material';

const cards = [
  { 
    title: 'テトリス', 
    description: 'ゲームのテトリスをChatGPTに作成させてみた', 
    detail: `HTMLファイル１つとjavascriptファイル１つを用いて完全に動作するテトリスを作成してください
    以下の要件に従ってください
    
    要件"""
    ・完全な実装とすること
    ・テトリスに出現するブロックの種類がランダムで落ちてくるようにすること
    ・ブロックは種類ごとに別の色で表示すること
    ・十字キーの左右でブロックを移動させ、上でブロックを回転させること
    ・消せたラインをスコアとして表示すること
    ・最上段まで行くとゲームオーバーと表示すること
    ・htmlファイルとjavascriptファイルは同じフォルダに配置してあることを前提とすること
    """`,     
    url: `${process.env.PUBLIC_URL}/htmls/tetris/tetris.html`, 
    imageUrl: `${process.env.PUBLIC_URL}/images/tetris.jpeg` 
  },
  { 
    title: 'プロフィールページ', 
    description: '自分のプロフィールページをChatGPTに作成させてみた', 
    detail: `自分のことを紹介するWebページをHTMLファイル１つで作成してください。
    以下の要件に従ってください
    
    要件"""
    ・紹介したい人の名前は"へくしる"としてください
    ・ページタイトルは自分の名前を使ったタイトルとしてください
    ・自分のことを説明する概要のセクションを作成してください
    ・概要のセクションには"モノづくりが好きであり、プログラミングをしたりそれをインターネットに発信することが趣味である"ことを説明する文章を記述してください
    ・TwitterとYoutubeのリンクを掲載するセクションを作成してください
    ・Twitterリンクは<https://twitter.com/hexylab>、Youtubeリンクは<https://www.youtube.com/channel/UCuKsxWxgMiDr_-XVRd0-65A>としてください
    ・デザインは自分のことを連想させるものとしてください
    """`,     
    url: `${process.env.PUBLIC_URL}/htmls/profile.html`, 
    imageUrl: `${process.env.PUBLIC_URL}/images/profile.jpeg` 
  },
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
        カードをクリックすると別のタブでChatGPTが作成したアプリを確認することができます。<br/>
        カード下部の"CHATGPTプロンプト"をクリックするとChatGPTに依頼したスクリプト文が表示されます。
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
