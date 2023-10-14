import React from 'react'
import { Grid, Typography, Paper, Box } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';

const Wishlist = (props) => {
    const { data, handleAddRemove } = props;

    return (
        <Paper className='scroll-bar' sx={{
            backgroundColor: '#fff', borderRadius: 6, boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)', padding: 3, overflow: 'auto', maxHeight: 500,
        }}>
            <Typography color="#33333" paragraph>Stocks</Typography>
            {
                data.map(data => (
                    <Box sx={{ mb: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item md={5} xs color="#5a287d">
                                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                    <img width={30} height={30} src={data.logo} alt="" />
                                    <Box>
                                        <Typography sx={{ mb: 0 }} color="#646068" paragraph>{data.id}</Typography>
                                        <Typography color="#5a287d" gutterBottom variant="h6" component="h1" sx={{ mb: 0 }} fontSize="1rem" >{data.name}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={4} xs color="#646068">
                                <Box>
                                    <Typography sx={{ mb: 0 }} textAlign="right" color="warning" paragraph>{data.shares} </Typography>
                                    <Typography sx={{ mb: 0 }} textAlign="right" color="warning" paragraph> {data.return} </Typography>
                                </Box>
                            </Grid>

                            <Grid item md={3} xs color="#646068" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                                <RemoveCircleOutlineRoundedIcon sx={{ pointerEvents: data.count === 0 && 'none' }} onClick={() => handleAddRemove('remove', data)} />
                                <Typography paragraph fontWeight="500" sx={{ mb: 0 }}>{data.count}</Typography>
                                <AddCircleOutlineRoundedIcon onClick={() => handleAddRemove('add', data)} />
                            </Grid>

                        </Grid>
                    </Box>
                ))
            }
        </Paper >
    )
}

export default Wishlist