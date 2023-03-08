import React from 'react';
import TextField from '@mui/material/TextField';

export default function Form(props) {
    const handleRowChange = (e) => {
        props.setRow(Number(e.target.value));
    }
    const handleColChange = (e) => {
        props.setCol(Number(e.target.value));
    }
    return (
        <div>
            <div className="form-control">
                <TextField onChange={handleColChange} label="Enter rows" variant="filled" color="success" focused />
                <TextField onChange={handleRowChange} label="Enter cols" variant="filled" color="success" focused />
            </div>
        </div>
    )
}
