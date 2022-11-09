import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddIcon from "@mui/icons-material/Add";
import { TextField } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import styles from './styles/SOPAccess.module.css'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  


const names = [
  'Abhinav',
  'Rohit',
  'Pawan',
  'Ankit',

];

const SOPAccess = ({open3 ,setOpen3, handleaccess}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [drop1,setdrop1] = useState(true);

    const [salesarr,setsalesarr] = useState([])
    const [marketingarr,setmarketingarr] = useState([])
    const [design,setdesign] = useState([])

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openmenu = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setdrop1(true)
    };
    const handleClosemenu = () => {
      setAnchorEl(null);
    };
   

    const handleaccessdesign= (item)=>{
       console.log(item)
       setsalesarr([...salesarr,item.innerText])
       setmarketingarr([...marketingarr,item.innerText])
    //    setdesign([...design,item.innerText])
    setdrop1(false)
       
    }
    const handleaccessmarket= (item)=>{
        // console.log(item)
        // setsalesarr([...salesarr,item.innerText])
        // setmarketingarr([...marketingarr,item.innerText])
        // setdesign([...design,item.innerText])
        
     }

  return (
    <div>
      
         <div>
      <Modal
        open={open3}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            {/* main div */}
            <div>
                <div>
                    <h3>Sales</h3>
                    <span><TextField value={salesarr}/> <AddIcon  color="secondary" className={styles.icons} aria-controls={openmenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openmenu ? 'true' : undefined}
        onClick={handleClick}/> 
                   {drop1? <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openmenu}
        onClose={handleClosemenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       {
        names.map((item,index)=>(
            <MenuItem key={index}>{item}</MenuItem>
        ))
       }
      </Menu>: <div></div>}
                    
                    </span>
                </div>
                <div>
                    <h3>Marketing</h3>
                    <span><TextField/> <AddIcon color="primary" className={styles.icons} aria-controls={openmenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openmenu ? 'true' : undefined}
        onClick={handleClick}/> 
                   {drop1? <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openmenu}
        onClose={handleClosemenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       {
        names.map((item)=>(
            <MenuItem onClick={(e)=>handleaccessmarket(e.target)}>{item}</MenuItem>
        ))
       }
      </Menu>: <div></div>}</span>
                </div>
                <div>
                    <h3>Design</h3>
                    <span><TextField/> <AddIcon color="success" className={styles.icons} aria-controls={openmenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openmenu ? 'true' : false}
        onClick={handleClick}/> 
                   {drop1? <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openmenu}
        onClose={handleClosemenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       {
        names.map((item)=>(
            <MenuItem onClick={(e)=>handleaccessdesign(e.target)}>{item}</MenuItem>
        ))
       }
      </Menu>: <div></div>}</span>
                </div>
                <div className={styles.buttoninaccess}>
                    <Button color="error"  variant="contained" onClick={()=> setOpen3(false)}>Cancel</Button>
                    <Button  variant="contained" onClick={handleaccess}>Update</Button>
                </div>
            </div>
        
        </Box>
      </Modal>
    </div>
    </div>
  )
}

export default SOPAccess