import React, {useEffect, useState} from 'react';
import {Dialog, DialogContent} from "@mui/material";
import {Button, TextField} from "@material-ui/core";

const PopWindow = ({pop, setPop, city}) => {
    // console.log("setPop is:",setPop);
    const [open, setOpen] = useState(pop);
    console.log("the open detail is: ", open)
    const [context, setContext] = useState('');
    const handleContextChange = (event: ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        setContext(val);
    };

    const closeWindow = () => {
        setOpen(false);
        setPop(false);
    }
    const saveContext = () => {
        console.log("Put API here");
    }
    useEffect(() => {

    }, [open])

    return (
        <div>
            <Dialog open={open}>
                <DialogContent>
                    <div>
                        {city}
                    </div>
                    <div>
                        2020
                    </div>
                    <TextField
                        fullWidth
                        autoFocus
                        placeholder="Enter the card details"
                        variant="outlined"
                        onChange={handleContextChange}
                        value={context}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        size="small"
                        onClick={() => {
                            setContext('')
                        }
                        }
                        color="default"
                    >
                        clear
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        size="small"
                        onClick={() => {
                            saveContext();
                        }}
                    >
                        save
                    </Button>
                    <Button
                        fullWidth
                        size="large"
                        onClick={() => {
                            closeWindow();
                        }}

                    >
                        close
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default PopWindow;
