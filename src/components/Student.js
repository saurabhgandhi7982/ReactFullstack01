import * as React from 'react';
import  {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Student() {
    const paperStyle={padding: '50px 20 px', width:600, margin: '20 px auto'}
    const[name,setName]=useState('resty')
    const[address,setAddress]=useState('')

     const handleClick=(e)=>{
            e.preventDefault()
            const student={name,address}
             console.log(student)
             fetch("http://localhost:8080/hello-world/path-variable/in28minutes" ,{
                  method:"GET",
                  headers:{"Content-Type":"application/json"}
              }).then(()=>{
                console.log("New Student added")
              })
     }
    
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add Student</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Student Name" variant="standard" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <TextField id="standard-basic" label="Student Address" variant="standard" fullWidth 
      value={address}
      onChange={(e)=>setAddress(e.target.value)}/>
      <Button variant="contained" onClick={handleClick}>Contained</Button>
    </Box>
    {name}
    {address}
    </Paper>
    </Container>
  );
}
