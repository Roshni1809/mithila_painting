import React, { useState } from "react";
import { Typography, TextareaAutosize, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles({

    comment_section: {
        display: 'flex',
        margin: '2rem 0',
        padding: '1rem 0',
        borderTop: '1px solid grey'
    },
    comment_details: {
        marginLeft: '3em'
    },
    logo: {
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "red",
        textAlign: 'center'
    },
    textarea: {
        width: '60rem',
        resize: 'none',
    }
})


function Comment({ comment, onReply, reply, onSubmitReply }) {

    const [textInput, onChangeInput] = useState()

    const onTextAreaChange = (e) => {
        onChangeInput(e.target.value)
    }

    const classes = useStyles()
    return (
        <div className={classes.comment_section}>
            <div className={classes.logo}>
                <img src='images/painting5.jpg' className={classes.image} />
            </div>
            <div className={classes.comment_details}>
                <Typography variant='h2' component='h2' className="heading">
                    {comment.username}
                </Typography>
                <Typography variant='h4' component='div' className="details">
                    {comment.review}
                </Typography>
                <Button
                    onClick={() => onReply(comment.id)}
                    variant="outlined" size="small" color="success">Reply
                </Button>
                <div className={reply === comment.id ? "visible" : "hidden"}>
                    <TextareaAutosize minRows={5} className={classes.textarea}
                        onChange={onTextAreaChange} />
                    <div>
                        <Button
                            variant="outlined"
                            size="small"
                            color="info"
                            onClick={() => onSubmitReply(textInput, comment.id)}>Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Comment