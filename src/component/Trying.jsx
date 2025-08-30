import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Trying() {
  return (
    <>
      <Stack spacing={2} direction="column" width={200}>
      <Button variant="text">Text</Button>
      <Button sx={{ backgroundColor: '#00bbf0' }} variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      </Stack>
    </>
  );
}
