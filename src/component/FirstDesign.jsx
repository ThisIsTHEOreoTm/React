import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';

export default function Trying() {
  const [checked, setChecked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  let IsLarge = checked ? 400 : 0;

  function handleChange(panel) {
    setExpanded(expanded === panel ? false : panel);
  }

  return (
    <>
   <Container sx={{ width: '80%', marginTop:'50px'}}>
    <Accordion expanded={expanded === "panel1"} onChange={() => handleChange("panel1")}>
       <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion expanded={expanded === "panel2"} onChange={() => handleChange("panel2")}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
        >
        <Typography>Accordion 2</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
           <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Switch checked={checked} onChange={() => setChecked(!checked)}  color='primary' />
           </Container>

        </Typography>
      </AccordionDetails>
    </Accordion>
    </Container>


    <Collapse in={checked} collapsedSize={100}>
          <Container sx={{ backgroundColor: 'primary.main' }} style={{ width: '70%', height: '29%', marginTop: '50px', textAlign: 'center', paddingTop: '20px', color: 'white', height: `${IsLarge}px` }}>
          </Container>
    </Collapse>
      

    </>
  );
}


