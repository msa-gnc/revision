
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md">
        {/* maxWidth="md" width en fazla md büyüklükte olsun.  gutterBottom={true}
      alttan margin. component attribute ü  sadece console da etkilidir , görüntü yine variant neyse odur*/}

        <Typography
          variant="h1"
          component="h3"
          gutterBottom
          align="center"
          color="error"
          sx={{ background: "#eee", mt: 4, border: "1px solid red" }}
        >
          Typography Container Box Button
        </Typography>

        {/* body1: p etiketidir,body1=16px daha büyük fs ,body2=14px daha küçük font lu.  button=span etiketidir+büyük harf */}
        <Typography
          color="error"
          sx={{ mr: 4, background: "yellow" }}
          variant="button"
        >
          span olacak
        </Typography>
        <Typography variant="button">span olacak</Typography>

        <Typography variant="body1">p etiketi</Typography>
        <Typography variant="body2">p etiketi</Typography>







        <Box sx={{ display: "flex", flexDirection: "column", marginTop: 4 }}>
         
          <Button startIcon={<SendIcon/>} variant="outlined" color="error">Contained</Button>
         
          <Button endIcon={<DeleteIcon/>}  size="large" variant="contained" color="success" sx={{color:"blue",mt:4}}>Contained</Button>
        </Box>








      </Container>
    </div>
  );
}

export default TypoButtons