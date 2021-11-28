import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import WriterDetails from "./WriterDetails"
import Reviews from './Reviews'
import Paintings from '../db.json'


const useStyles = makeStyles({
    main: {

    },
    img: {
        width: '100%',
    },
    content : {
        margin : "2rem"
    }, 
    desc : {
        padding: "3rem 0",
        fontFamily: "Poppins !important"
    }
})


function Details() {

    const params = useParams()

    const id = params.id

    const painting = Paintings.filter( painting => painting.id == id)[0]

    const { imageUrl, paintingName, artistName, comments, desc } = painting
    const classes = useStyles()

    return (
        <div className={classes.main}>
            <div className={classes.image}>
                <img src={`/images/${imageUrl}`} alt={paintingName} className={classes.img} />
            </div>
            <div className={classes.content} >
                <Typography variant='h1' component='h1' className="heading" >
                    {paintingName}
                </Typography>
                <Typography variant='h4' component='h4' className={classes.desc} >
                        {desc}
                </Typography>
                <WriterDetails />
                <Reviews comments = {painting.comments} />
            </div>
        </div>
    )
}

export default Details