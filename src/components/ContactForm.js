import * as React from 'react';
import './ContactForm.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function MultilineTextFields() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          // maxRows={4}
          fullWidth
          value={value}
          onChange={handleChange}
        />
        <TextField
          id="outlined-textarea"
          label="Email"
          placeholder=""
          fullWidth
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          fullWidth
          multiline
          // rows={4}
          defaultValue=""
        />
      </div>
     <button className="form-btn">Submit</button>

    </Box>
  );
}