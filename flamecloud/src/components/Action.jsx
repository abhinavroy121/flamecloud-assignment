import React from "react";

import Button from "@mui/material/Button";
import GroupIcon from "@mui/icons-material/Group";
import AddIcon from "@mui/icons-material/Add";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TreeItem from "@mui/lab/TreeItem";
import styles from "./styles/Action.module.css";
import { useState } from "react";
import Pointer from "./Pointer";
import NewPlan from "./NewPlan";
import SOPAccess from "./SOPAccess";



const Action = () => {
  const [pointer, setpointer] = useState(["Pointer 1", "Pointer 2"]);       // new Pointer  array inside Marketing
  const [inputhere, setinputhere] = useState("");                           // input for pointer popup
  const [planinput,setplaninput] = useState("");                            // input for new plan popup
  const [newplan,setnewplan] = useState(['Production'])                   // array for new plan to add in plan

  const [open, setOpen] = useState(false);                                // open to set pointer popup
  const [opens, setOpens] = useState(false);                            // open2 to set new plan popup
  const [open3,setOpen3] = useState(false)                              // open3 to set SOP Access popup


  const handleOpen = () => setOpen(true);                                // fun handles popup to open
  const handleOpens = () => setOpens(true) 
  const handleOpen3 = ()=> setOpen3(true)                                                               

  const handlepointerfunction = () => {                                  // fun to push pointer array
    setpointer([...pointer, inputhere]);
    setOpen(false);
    setinputhere("");
  };
  
  const handlenewplan = () => {                                         // fun to push new plan array
     setnewplan([...newplan,planinput]);
     setOpens(false);
     setplaninput("")
  }
  
  const handleaccess = ()=>{
     setOpen3(false)
  }

  return (
    <div className={styles.maincontainer}>
      <div>
        <br />
        <p id={styles.sop}>SOP</p>
      </div>
      {/* Action plan and buttons in flex */}
      <div className={styles.actionbuttondiv}>
        <div>
          <p id={styles.title}>Action Plans</p>
        </div>
        <div id={styles.actionplanbuttons}>
          <Button variant="outlined" startIcon={<GroupIcon />} onClick={handleOpen3}>
            Manage Access
          </Button>
          <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpens}>
            New Plan
          </Button>
        </div>
      </div>
      <div className={styles.treeview}>
        {/* accordian div */}
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<DragIndicatorIcon />}
        >
          <TreeItem className={styles.treeitem} nodeId="1" label="Marketing">
            <TreeItem
              className={styles.treeitem}
              nodeId="2"
              label="Wordpress"
              icon={<DragIndicatorIcon />}
            />
            <TreeItem
              className={styles.treeitem}
              nodeId="3"
              label="Google Drive"
            >
              {pointer.map((item, index) => (
                <TreeItem key={index} className={styles.treeitem} nodeId={toString(index + 20)}   label={item} icon={<DragIndicatorIcon />}>  
                  </TreeItem>
              ))}
       
              <Button onClick={handleOpen}  variant="contained" startIcon={<AddIcon />}  color="inherit" >  Add Pointer  </Button>
            </TreeItem>
          </TreeItem>
          <TreeItem className={styles.treeitem} nodeId="5" label="Design">
            <TreeItem className={styles.treeitem} nodeId="6" label="OSS" />
            <TreeItem className={styles.treeitem}  nodeId="7" label="MUI" >    
            </TreeItem>
          </TreeItem>
          <TreeItem className={styles.treeitem}  nodeId="20" label="Seller"  icon={<DragIndicatorIcon />} >   
          </TreeItem>

         { newplan?.map((el,index)=>(
            <TreeItem key={index} label={el} nodeId={toString(index+100)} icon={<DragIndicatorIcon />} className={styles.treeitem}></TreeItem>
          ))}
        </TreeView>
      </div>

       {/* Pointer Modal */}
       <Pointer open={open}setOpen={setOpen}handlepointerfunction={handlepointerfunction} inputhere={inputhere}setinputhere={setinputhere}/>

        {/* New Plan Modal */}
       <NewPlan opens={opens} setOpens={setOpens} handlenewplan={handlenewplan} planinput={planinput} setplaninput={setplaninput}/>

       {/* SOP Access Modal */}
       <SOPAccess open3={open3} setOpen3={setOpen3} handleaccess={handleaccess}/>
    </div>
  );
};

export default Action;
