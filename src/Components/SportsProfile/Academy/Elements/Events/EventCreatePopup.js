import * as React from "react";
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} className="button newbutton">
                Create Event
            </Button>
            <Dialog open={open} onClose={handleClose} className="muidialog">
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the following details about your Event. Try to add location and all necessary information like payment etc.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Event Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
<h3 className="headingform">Starting Time:</h3>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        type="time"
                        fullWidth
                        variant="standard"
                    />
<h3 className="headingform">Date:</h3>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        type="date"
                        fullWidth
                        variant="standard"
                    />

<h3 className="headingform">Short Description (100 words):</h3>
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="write a shoty description in 100 Words"
                        className="form-textarea"
                    />

<h3 className="headingform">Detailed Overview:</h3>
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Write a complete information about your event (including... fee, location, conditions)"
                        className="form-textarea"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
