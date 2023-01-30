import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';



const CurrWeather = () => {
    return (
        <div className="card">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                component="img"
                alt="London"
                height="140"
                image="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">London</Typography>
                    <Typography variant="body2" color="text.secondary">It's sunny today.</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default CurrWeather;