import ConversionTypes from './ConversionTypes';

export class Calculation {
    IsValid(input) {
        return /^\d+(\.\d+)*$/.test(input) && input !== "" && input !== 0 && input !== "0";
    }

    Calculate(conversionType, quantity, cost) { 
        let inputIsValid = this.IsValid(quantity) && this.IsValid(cost);
        if(!inputIsValid)
            return 0;
    
        if(conversionType === ConversionTypes.CostPer100g || conversionType === ConversionTypes.CostPer100ml){
            return parseFloat(((100/quantity)*cost).toFixed(2));
        }
        else{
            return parseFloat(((100/(quantity*100))*cost).toFixed(2));
        }
    }
}  