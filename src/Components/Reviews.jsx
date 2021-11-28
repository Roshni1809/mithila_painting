import React, { useState } from "react";
import { Typography } from "@mui/material";
import { makeStyles, TextareaAutosize, Button} from "@material-ui/core"
import Comment from './Comment'
import Reply from './Reply'

const useStyles = makeStyles({
    main: {
        marginTop: '5rem'
    },
    heading: {
        padding: '3rem 0',
    },

    comment_section: {
        display: 'flex',
    },
    comment_details: {
        flex: 15
    },
    logo: {
        flex: 1
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
    reply: {
        margin: '2rem 0 0 4.5rem',
    },
    newCommentArea : {
        borderTop: '1px solid grey',
        marginTop : '2rem',
        padding: '3rem'

    },
    textarea: {
        width: '60rem',
        resize: 'none',
    }
})


function Reviews(props) {

    const [replyBox, toggleReplyBox] = useState(0)
    const [comments, updateComments] = useState(props.comments)
    const [textInput, onChangeInput] = useState("")

    const onTextAreaChange = (e) => {
        onChangeInput(e.target.value)
    }

    const onSubmitReply = (reply, id) => {
        const newReply = {
            "username": "Unknown User",
            "reply": reply,
            "time": "1637222014286",
        }
        
        const comment = comments.filter(comment => comment.id === id)[0]
        console.log(comment)
        comment.replies.push(newReply)
        console.log(comment)
        updateComments(comments)
        toggleReplyBox(0)
    }

    const onSubmitComment = () => {
        if (textInput === "") return
        const newComment = {
            "id": comments[comments.length-1].id + 1,
            "username": "Unknown User",
            "review": textInput,
            "time": "1637222014286",
            "replies": []

        }
        comments.push(newComment)
        updateComments(comments)
        onChangeInput("")
    }

    const onReply = (id) => {
        if (replyBox !== 0 && id == replyBox) toggleReplyBox(0)
        else
            toggleReplyBox(id)
    }

    const count = comments.length
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <Typography variant="h2" component="div" className={`${classes.heading} heading`}>
                {count} Comments
            </Typography>
            {comments.map(comment =>
                <React.Fragment key={comment.id}>
                    <Comment
                        comment={comment}
                        onReply={onReply}
                        reply={replyBox}
                        onSubmitReply={onSubmitReply} />

                    <div className={classes.reply}>
                        {comment.replies.map(reply =>
                            <div className={classes.reply} >
                                <Reply reply={reply}
                                />
                            </div>
                        )}
                    </div>
                </React.Fragment>
            )}
            <div className={classes.newCommentArea}>
                <Typography variant='h2' component='div' className="heading">Leave a New Comment</Typography>
                <TextareaAutosize minRows={5} className={classes.textarea}
                    onChange={onTextAreaChange}
                    value = {textInput} />
                <div>
                    <Button
                        variant="outlined"
                        size="small"
                        color="info"
                        onClick={onSubmitComment}>Submit</Button>
                </div>

            </div>
        </div>
    )
}

export default Reviews