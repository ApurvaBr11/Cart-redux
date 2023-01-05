import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RMV ,ADD ,DECRE} from "../redux/Action";
import { useDispatch } from "react-redux";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardDetails = () => {

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const navig = useNavigate()
  const dispatch=useDispatch();
  const share = ()=>{
    navig("/share")
  }
  const dlt=(id)=>{
    dispatch(RMV(id));
    navig("/")
  }
  const Send = (e)=>{
    dispatch(ADD(e))
  };
  const decre =(iteam)=>{
    dispatch(DECRE(iteam))
  }
  const { id } = useParams();
  const getdata = useSelector((state) => state.cartreds.carts);
  const compare = () => {
    let datacomp = getdata.filter((e) => {
      return e.id == id;
    });
    setData(datacomp);
  };
  useEffect(() => {
    compare();
  }, [id]);
  const [data, setData] = useState([]);

  return (
    <div className="pl-[40%] pt-12">
      {data.map((ele) => {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <IconButton sx={{ bgcolor: red[500] }} aria-label="settings">
                  <FavoriteIcon />
                </IconButton>
              }
              action={
                <IconButton aria-label="settings" onClick={share}>
                  <ShareIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={ele.imgdata}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {ele.rname}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites" onClick={()=>Send(ele)}>
                <p  className="h-2 w-6 font-bold flex justify-center relative bottom-2">+</p>
              </IconButton>
              <IconButton aria-label="add to favorites">
                <p className="h-2 w-6 font-bold flex justify-center relative bottom-2">{ele.qnty}</p>
              </IconButton>
              <IconButton aria-label="add to favorites" onClick={ele.qnty <= 1 ?()=>dlt(ele.id):()=>decre(ele)}>
                <p  className="h-2 w-6 font-bold flex justify-center relative bottom-2">-</p>
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
              <Typography paragraph>
                  Price : {ele.price}
                </Typography>
                <div className="flex justify-between iteams-center pt-1">
                <Typography paragraph>
                  Amount : {ele.price * ele.qnty}
                </Typography>
                <Typography paragraph>
                  Quantity : {ele.qnty}
                </Typography>
                </div>
                <Typography paragraph className="flex gap-4 font-bold">
                  Delete : <p onClick={()=>dlt(ele.id)}><i className="fas fa-trash text-red-600 font-bold"></i></p>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        );
      }
      )}
    </div>
  );
};

export default CardDetails;
