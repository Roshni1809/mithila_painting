import React from "react";
import { Link } from 'react-router-dom';
import { Typography, Paper } from "@mui/material";
import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        margin: "0.5rem 0",
        borderRadius: '1rem',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            margin: "1rem 2rem"
        }

    },
    oddcard: {
        flexDirection: 'row-reverse',
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column"
        }

    },
    image: {
        flex: 1,
        textAlign: 'center',

    },
    img: {
        width: '100%',
        height: '40rem',
        transition: '.2s',
    },
    details_box: {
        flex: 1,
        height: '40rem',
        margin: 'auto 0',
    },
    details_content: {
        padding: "9rem 5rem",
        textAlign: 'center',


    },
    heading: {
        fontFamily: "inter !important",
        color: '#F08000',
    },
    right_gradiant : {
        backgroundImage: 'linear-gradient( 240deg, #FF885B -17.95%, rgba(255, 255, 255, 0) 25.57%)'
      },
      
      left_gradiant : {
        backgroundImage: 'linear-gradient( -240deg, #FF885B -17.95%, rgba(255, 255, 255, 0) 25.57%)',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'linear-gradient( 240deg, #FF885B -17.95%, rgba(255, 255, 255, 0) 25.57%)',

        }

      }
      

}))

function Card({ painting }) {
    const classes = useStyles()
    const { imageUrl, paintingName, price, desc, id } = painting
    return (
        <Paper className={`${classes.main} ${id % 2 === 0 && classes.oddcard}`} elevation={20}>
            <div className={classes.image}>
                <img src={`/images/${imageUrl}`} alt={paintingName} className={classes.img} />
            </div>
            <div className={`${classes.details_box} ${id % 2 === 0 ? classes.left_gradiant : classes.right_gradiant} `} >
                <div className={classes.details_content} >
                    <Typography variant='h2' component='h2' className={classes.heading} >
                       <Link to={`/${painting.id}`}> {paintingName}</Link>
                    </Typography>
                    <Typography variant='h6' component='h6' className={classes.price} >
                    </Typography>
                    <Typography variant='h5' component='div' className={classes.desc} my={2}>
                        {desc}
                    </Typography>
                </div>
            </div>
        </Paper>
    )
}

export default Card

