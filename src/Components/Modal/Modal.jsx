import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import "./Modal.css";
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';


const style = {
    position: 'absolute',
    top: '65%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: "20px",
    boxShadow: 24,
    width: "25%",
};

export const FilterModal = ({ open, handlemodal }) => {

    return (
        <div>
            <Modal
                open={open}
                onClose={handlemodal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="modalBox">
                    <div className='modalContainer'>
                        <div className="modalHeading">
                            <h3>Filters</h3>
                        </div>
                        <div className='typeContainer'>
                            <h3>Type</h3>
                        </div>
                        <div className="modalCheckboxContainer">
                            <Checkbox />
                            <h4>Subscribed</h4>
                            <Checkbox />
                            <h4>Burner</h4>
                        </div>
                        <div className='typeContainer'>
                            <h3>Cardholder</h3>
                        </div>
                        <div className='selectBoxContainer'>
                            <Select value={"india"} className="selectBox">
                                <MenuItem value="none">Select Cardholder</MenuItem>
                                <MenuItem value="india">India</MenuItem>
                                <MenuItem>Pakistan</MenuItem>
                                <MenuItem>Asia</MenuItem>
                            </Select>
                        </div>
                        <div className="buttonContainer">
                            <Button variant='contianed' className='pinkButton'> Apply</Button>
                            <Button variant='contianed' className='whiteButton'>Clear</Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
