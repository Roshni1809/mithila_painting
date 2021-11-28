import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles({

    comment_section: {
        display: 'flex',
    },
    comment_details: {
        flex: 20
    },
    logo: {
        flex: 1
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "red",
        textAlign: 'center'
    },

})


function Reply({reply}) {

    const classes = useStyles()
    return (
        <div className={classes.comment_section}>
            <div className={classes.logo}>
                <img src='images/painting5.jpg' className={classes.image} />
            </div>
            <div className={classes.comment_details}>
                <Typography variant='h4' component='h3' className="heading">
                    {reply.username}
                </Typography>
                <Typography variant='h5' component='div' className="details">
                    {reply.reply}
                </Typography>
            </div>
        </div>
    )

}

export default Reply