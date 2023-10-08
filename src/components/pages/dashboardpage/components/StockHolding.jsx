import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import grow from '../../../../images/dashboard/grow.png';
import down from '../../../../images/dashboard/down.png';
import next from '../../../../images/dashboard/next.png';
import prev from '../../../../images/dashboard/previous.png';

const StockHolding = (props) => {
    const { data, handleToggle, activeToggle } = props;
    return (
        <Paper sx={{ backgroundColor: '#fff', borderRadius: 6, boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)', padding: 3, position: 'relative' }}>
            {activeToggle !== 'prev' && <img className='prev' width={25} height={25} src={prev} alt="" onClick={() => handleToggle('prev')} />}
            <Grid container spacing={1}>
                {data.map(data => (
                    <Grid item md={3} xs>
                        <Grid container spacing={1}>
                            <Grid item md={6} xs sx={{ mb: 1, color: '#5a287d' }}>
                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                    <img width={20} height={20} src={data.logo} alt="" />
                                    <Typography gutterBottom variant="h6" component="h1" sx={{ mb: 0 }}>{data.name}</Typography>
                                </Box>
                            </Grid>
                            <Grid item md={6} xs textAlign="center">
                                <img width={20} height={20} src={data.state === 'grow' ? grow : down} alt="" />
                            </Grid>

                        </Grid>
                        <Grid container spacing={1} color="#646068">
                            <Grid item md={6} xs>
                                <Typography paragraph>
                                    Total Shares
                                </Typography>
                            </Grid>
                            <Grid item md={6} xs>
                                <Typography textAlign="center" color="warning" paragraph>
                                    {data.shares}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} color="#646068">
                            <Grid item md={6} xs>
                                <Typography sx={{ mb: 0 }} paragraph>
                                    Total Returns
                                </Typography>
                            </Grid>
                            <Grid item md={6} xs>
                                <Typography textAlign="center" color="warning" sx={{ mb: 0 }} paragraph>
                                    {data.return}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>))}
            </Grid>
            {activeToggle !== 'next' && <img className='next' width={25} height={25} src={next} alt="" onClick={() => handleToggle('next')} />}
        </Paper>
    )
}

export default StockHolding