import { Button, ButtonGroup } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

const Buttons = () => {
  return (
    <div>
      <ButtonGroup variant="contained">
        <Button color="secondary" startIcon={<SaveIcon color="disabled" />}>
          SAVE
        </Button>
        <Button color="info" endIcon={<DeleteIcon color="disabled" />}>
          DELETE
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Buttons;
