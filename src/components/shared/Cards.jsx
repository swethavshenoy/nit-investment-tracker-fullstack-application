import * as React from 'react';
import { Typography, Container, Grid, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';

const Cards = (props) => {
    const { data } = props
    return (
        <Container>
            <Grid container spacing={5}>
                {data && data.map((obj, index) => (
                    <Grid item md={4} xs color="#5a287d" sx={{ mt: 1 }} style={{ display: 'flex' }} key={index}>


                        <Card sx={{
                            p: 2, backgroundColor: '#f2f2f8'
                        }}>
                            {obj.img && <CardMedia
                                sx={{ width: '100%', height: 150, backgroundSize: 'contain' }}
                                image={obj.img}
                            />}
                            <CardContent sx={{ pt: 5, pb: 5 }}>
                                <Typography color="#5a287d" gutterBottom variant="h4" component="h1" >
                                    {obj.title}
                                </Typography>
                                <Typography variant="body2" color="#646068">
                                    {obj.description}
                                </Typography>
                            </CardContent>
                            {obj.buttonText && <CardActions>
                                <Button color='primary' variant={obj.buttonVariant}>
                                    {obj.buttonText}
                                </Button>
                            </CardActions>}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Cards
