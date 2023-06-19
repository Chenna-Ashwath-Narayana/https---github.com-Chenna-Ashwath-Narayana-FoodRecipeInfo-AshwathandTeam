import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Menu() {
  return (
   <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Item>
            <img src='https://media.istockphoto.com/id/1170729895/photo/indian-butter-chicken-horizontal-photo.jpg?s=612x612&w=0&k=20&c=4bZViynoVnP1HaWHIY1k5FvW-dj9DM2EOMHbKnAqYZ4='/>
            <Button variant="contained" href='/butter'>Ingredients</Button>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <img src='https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900' />
            <Button variant="contained" href='/biryani'>Ingredients</Button>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <img src='https://www.indianveggiedelight.com/wp-content/uploads/2022/08/curd-rice-featured.jpg'/>
            <Button variant="contained" href='/curdrice'>Ingredients</Button>
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item>
          <img src='https://www.shutterstock.com/image-photo/arabian-arabic-cuisine-grilled-tandoori-260nw-1202127400.jpg'/>
            <Button variant="contained" href='/tandoori'>Ingredients</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
   </div>
    
  );
}
