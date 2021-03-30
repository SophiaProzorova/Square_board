import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    backgroundColor:'aqua',
    marginTop: theme.spacing(8),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));
const blockStyle ={
    display: 'flex',
    alignItems: 'baseline'
} 
function Selection({squares, setCurrMode, setIsChoosen}) {
    const classes = useStyles();
    const [mode, setMode] = React.useState('');
    const [open, setOpen] = React.useState(false);
  
    const handleChange = (event) => {
      setMode(event.target.value);
      (event.target.value > 0) ? setCurrMode(event.target.value) : setIsChoosen(false)
    };
  
    const handleClose = () => {
      setOpen(false);

      setIsChoosen(true);
    };
  
    const handleOpen = () => {
      setOpen(true);
      setIsChoosen(false)
    };
    return (
        <div style={blockStyle}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Mode</InputLabel>
                <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={mode}
                onChange={handleChange}
                >
                <MenuItem value="">
                    <em>Select Mode</em>
                </MenuItem>
                {
                    squares.map(item => {
                        return <MenuItem value={item.field} key={item.id}>{item.id}</MenuItem>
                    })
                }
                </Select>
            </FormControl>
            {/* <Button variant="contained" size="medium" onClick={()=>{ setCurrMode(mode.id) }}>START</Button> */}
        </div>
    )
}

export default Selection
