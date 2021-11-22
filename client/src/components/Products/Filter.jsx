import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

/* TODO: add category filter; abstract code
 define catalog custom attributes; use CustomAttributeFilter */
const Filter = () => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const names = [
    'Vegan',
    'Gluten Free',
    'Keto',
    'No Spice',
    'Low Glycemic',
    'Low Sodium',
    'Whole Foods',
    'Dairy Free',
    'No Nuts',    
  ];  
  const theme = useTheme();
  const [diet, setDiet] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDiet(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };  

  const getStyles = (name, diet, theme) => {
    return {
      fontWeight:
        diet.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
        fontSize: '0.9em',
        fontWeight: 900,
        margin: '0.2em 1em',
        // marginTop: '1em',
        paddingLeft: '1em',
        paddingRight: '1em',
        border: '1px solid pink',
        borderRadius: '0.5em'
      // height: '1em',
      // color: 'red'
    };
  }  

  // const style = {
  //   fontSize: '0.8', 
  //   height: '2em',
  //   textTransform: 'uppercase',
  //   color: 'red',
  //   marginTop: '-3em'
  // }

  // const renderDietaryFilter = () {
  // }
  // const renderCategoryFilter = () {
  // }

  return (
    <div className={''}>
      <FormControl className={''} sx={{ m: 1, width: 300 }}>
        {/* TODO: center label text */}
        <InputLabel /*style={{textAlign: 'center', margin: '0 auto', display: 'block', position: 'relative'}}*/ id="demo-multiple-chip-label">Dietary Options</InputLabel>
        <Select style={{border: '1px solid lightgreen'}} className={''}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={diet}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, diet, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Filter;
