import React, { FC, ReactElement, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';
import Box from '@mui/material/Box';

const Form: FC = (): ReactElement => {

    const [textValue, setTextValue] = useState<string>("");
    const onTextChange = (e: any) => setTextValue(e.target.value);
    
    const handleSubmit = () => {
        alert(textValue)
    }
    const handleReset = () => setTextValue("");

  return (
    <div className='container'>
    
      <Paper>
        
        <TextField
          onChange={onTextChange}
          value={textValue}
          label={"Enter any comment"}
        />
        <br />
        <br />

        <Box display="flex">
          <Button onClick={handleSubmit}variant="contained">Submit</Button>
          <div>&nbsp;</div>
          <Button onClick={handleReset} variant="contained" >Reset</Button>
        </Box>

      </Paper>
    
    </div>
  );
}

export default Form;