import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./styles/Pointer.module.css"
import Button from "@mui/material/Button";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

const Pointer = ({open,setOpen,handlepointerfunction,inputhere,setinputhere}) => {
    // console.log(inputhere)
    const handleClose = () => setOpen(false);

  return (
    <div>
        <div>
        <Modal 
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} id={styles.popuppointer}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Pointer Name
            </Typography>
            <input
              placeholder="Add Pointer"
              value={inputhere}
              onChange={(e) => setinputhere(e.target.value)}
            />
            <span className={styles.popupbuttondiv}>
              <Button
                variant="contained"
                onClick={() => {
                  setOpen(false);
                }}
                color="error"
              >
                Cancel
              </Button>
              <Button variant="contained" onClick={handlepointerfunction}>
                Add
              </Button>
            </span>
          </Box>
        </Modal>
      </div>
    </div>
  )
}

export default Pointer