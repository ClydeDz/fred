import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Calculation } from '../utils/Calculation'; 
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ConversionFormStyles from '../component-styles/ConversionFormStyles';

export default function SignIn() {
  const classes = ConversionFormStyles();
  const calculation = new Calculation(); 

  const [perUnitValue, setPerUnitValueValue] = React.useState('0')
  const [quantityAdornment, setValue] = React.useState({
    quantityUnit: 'g', quantityUnitDisplay: '/ 100g'
  })
  const [values, setValues] = React.useState({
    cost: '2',
    quantity: '100',
    quantityUnit: 'g',
    quantityUnitDisplay: '/ 100g',
    conversionType: 1,
    currency: '$'
  }); 

  const handleChange = prop => event => { 
    setValues({ ...values, [prop]: event.target.value });    
  };

  React.useEffect(() => {  
    let result = calculation.Calculate(values.conversionType, values.quantity, values.cost);
    setPerUnitValueValue(result);
  }, [values, calculation]);

  const handleConversionTypeChange = prop => event => { 
    setValues({ ...values, [prop]: event.target.value });  
    switch(event.target.value){
      case 1:
        setValue({
          quantityUnit: 'g', quantityUnitDisplay: '/ 100g'
        });   
        break;
      case 2:
        setValue({
          quantityUnit: 'ml', quantityUnitDisplay: '/ 100ml'
        });    
        break;
      case 3:
        setValue({
          quantityUnit: 'L', quantityUnitDisplay: '/ 1L'
        });   
        break;
      default:
        setValue({
          quantityUnit: 'g', quantityUnitDisplay: '/ 100g'
        });   
    } 
  };
 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate> 
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="demo-simple-select-outlined">
              Conversion 
            </InputLabel>
            <Select 
              id="demo-simple-select-outlined"
              name="conversionType" 
              tabIndex={0} 
              autoFocus={true}
              value={values.conversionType}
              onChange={handleConversionTypeChange('conversionType')}
              labelWidth={82}
              > 
                <MenuItem value={1}>Calculate cost / 100 g</MenuItem>
                <MenuItem value={2}>Calculate cost / 100 ml</MenuItem>
                <MenuItem value={3}>Calculate cost / 1 L</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="quantity"
            label="Quantity"
            InputProps={{
              endAdornment: <InputAdornment position="end">{quantityAdornment.quantityUnit}</InputAdornment>,
            }}
            name="quantity"
            type="text" pattern="[0-9]+"
            autoFocus={false} 
            error = { !calculation.IsValid(values.quantity) }
            helperText={ calculation.IsValid(values.quantity) ? "": "Input is invalid" }
            value={values.quantity}
            onChange={handleChange('quantity')}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="cost"
            label="Price"
            name="cost" 
            type="text" pattern="[0-9]+"
            autoFocus={false}
            value={values.cost}
            error={ !calculation.IsValid(values.cost) }
            helperText={ calculation.IsValid(values.cost) ? "" : "Input is invalid"}
            onChange={handleChange('cost')}
          />
          <h2 align="center" className={classes.h2}>
            {values.currency + "" + perUnitValue + " " + quantityAdornment.quantityUnitDisplay}
          </h2>
        </form>
      </div> 
    </Container>
  );
}