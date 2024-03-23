import React, { useState } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

function CustomCard({ title, description, detail, url, imageUrl }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCardClick = () => {
    window.open(url, '_blank');
  };

  // detailテキスト内の改行を処理してレンダリング
  const renderDetailText = (detailText) => {
    return detailText.split('\n').map((line, index) => (
      <Typography key={index} component="p" variant="body2">
        {line}
      </Typography>
    ));
  };

  return (
    <Card sx={{ maxWidth: 345, minHeight: 300}}>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={title}
        />
        <CardContent  sx={{ minHeight: 100 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleOpen}>
          ChatGPTプロンプト
        </Button>
      </CardActions>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ChatGPTプロンプト</DialogTitle>
        <DialogContent>
          {renderDetailText(detail)}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default CustomCard;