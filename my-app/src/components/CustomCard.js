import React, { useState } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

function CustomCard({ title, description, detail, url, imageUrl }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCardClick = () => {
    //window.location.href = url;
    window.open(url, '_blank');
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={title}
        />
        <CardContent>
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
          ChatGPTコマンド
        </Button>
      </CardActions>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {detail}
          </DialogContentText>
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