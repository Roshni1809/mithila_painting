import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles({
    main: {
        maxHeight: '50rem',
        backgroundColor: "black",
        display : 'flex',
        color : 'white',
        padding : '3rem 0'
    },
    logo: {
        flex: 1,
        textAlign: 'center'
    },
    content : {
        flex: 3,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "red",
        textAlign: 'center'
      },

    desc : {
        paddingTop: "2rem",
        fontFamily: "Poppins !important"
    }


})

function WriterDetails(props) {
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <div className = {classes.logo}>
                <img src = '/images/painting3.webp' className={classes.image}/>
            </div>
            <div className= {classes.content}>
                <Typography variant="h2" component="h2" className = "heading">
                    Fredrick Armstrong
                </Typography>
                <Typography variant="h4" component='div' className = {classes.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!
                </Typography>
            </div>
        </div>
    )
}
export default WriterDetails