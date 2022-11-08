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

const NewPlan = ({opens,setOpens,handlenewplan,planinput,setplaninput}) => {
    // console.log(inputhere)
    const handleClose = () => setOpens(false);
    

  return (
    <div>
        <div>
        <Modal
          open={opens}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} id={styles.popuppointer}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
           New Plan
            </Typography>
            <input
              placeholder="Name Your Plan"
              value={planinput}
              onChange={(e) => setplaninput(e.target.value)}
            />
            <span className={styles.popupbuttondiv}>
              <Button
                variant="contained"
                onClick={() => {
                  setOpens(false);
                }} 
                color="error"
              >
                Cancel
              </Button>
              <Button variant="contained" onClick={handlenewplan}>
                Add
              </Button>
            </span>
          </Box>
        </Modal>
      </div>
    </div>
  )
}

export default NewPlan;