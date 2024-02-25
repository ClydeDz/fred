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
import ConversionTypes from '../utils/ConversionTypes';

export default function SignIn() {
  const classes = ConversionFormStyles();
  const calculation = new Calculation(); 

  const [perUnitValue, setPerUnitValueValue] = React.useState('0')
  const [quantityAdornment, setQuantityAdornment] = React.useState({
    quantityUnit: 'g', quantityUnitDisplay: '/ 100g'
  })
  const [model, setModelValues] = React.useState({
    cost: '2',
    quantity: '100',
    conversionType: ConversionTypes.CostPer100g,
    currency: '$'
  }); 

  const handleChange = prop => event => { 
    setModelValues({ ...model, [prop]: event.target.value });    
  };

  React.useEffect(() => {  
    let result = calculation.Calculate(model.conversionType, model.quantity, model.cost);
    setPerUnitValueValue(result);
  }, [model, calculation]);

  const handleConversionTypeChange = prop => event => { 
    setModelValues({ ...model, [prop]: event.target.value });  
    switch(event.target.value){
      case 1:
        setQuantityAdornment({
          quantityUnit: 'g', quantityUnitDisplay: '/ 100g'
        });   
        break;
      case 2:
        setQuantityAdornment({
          quantityUnit: 'ml', quantityUnitDisplay: '/ 100ml'
        });    
        break;
      case 3:
        setQuantityAdornment({
          quantityUnit: 'L', quantityUnitDisplay: '/ 1L'
        });   
        break;
      case 4:
        setQuantityAdornment({
          quantityUnit: 'n', quantityUnitDisplay: '/ unit'
        });   
        break;
      default:
        setQuantityAdornment({
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
              value={model.conversionType}
              onChange={handleConversionTypeChange('conversionType')}
              labelWidth={82}
              > 
                <MenuItem value={ConversionTypes.CostPer100g}>Calculate cost / 100 g</MenuItem>
                <MenuItem value={ConversionTypes.CostPer100ml}>Calculate cost / 100 ml</MenuItem>
                <MenuItem value={ConversionTypes.CostPer1l}>Calculate cost / 1 L</MenuItem>
                <MenuItem value={ConversionTypes.CostPerUnit}>Calculate cost / unit</MenuItem>
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
            error = { !calculation.IsValid(model.quantity) }
            helperText={ calculation.IsValid(model.quantity) ? "": "Input is invalid" }
            value={model.quantity}
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
            value={model.cost}
            error={ !calculation.IsValid(model.cost) }
            helperText={ calculation.IsValid(model.cost) ? "" : "Input is invalid"}
            onChange={handleChange('cost')}
          />
          <h2 align="center" className={classes.h2}>
            {model.currency + "" + perUnitValue + " " + quantityAdornment.quantityUnitDisplay}
          </h2>
        </form>
      </div> 
    </Container>
  );
}