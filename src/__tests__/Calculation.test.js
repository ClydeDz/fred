import {Calculation} from '../utils/Calculation';
import ConversionTypes from '../utils/ConversionTypes';
const calculation = new Calculation();

it('Simple grams', () => {
    expect(calculation.Calculate(ConversionTypes.CostPer100g, 200, 2)).toEqual(1);
});

it('Simple milliliters', () => {
    expect(calculation.Calculate(ConversionTypes.CostPer100ml, 300, 2)).toEqual(0.67);
    expect(calculation.Calculate("", 3, 5.27)).toEqual(175.67);
});

it('Simple litres', () => {
    expect(calculation.Calculate(ConversionTypes.CostPer1l, 3, 5.27)).toEqual(1.76); 
});

it('Simple units', () => {
    expect(calculation.Calculate(ConversionTypes.CostPerUnit, 30, 5)).toEqual(0.17); 
});

it('Exceptional inputs', () => {
    expect(calculation.Calculate(ConversionTypes.CostPer100g, 0, 0)).toEqual(0);
    expect(calculation.Calculate(ConversionTypes.CostPer100ml, 0, 3.5)).toEqual(0);
    expect(calculation.Calculate(ConversionTypes.CostPer1l, "", "")).toEqual(0);
    expect(calculation.Calculate(ConversionTypes.CostPer1l, "0", "")).toEqual(0);
    expect(calculation.Calculate(ConversionTypes.CostPer1l, "0", 4)).toEqual(0);
    expect(calculation.Calculate("", "0", "")).toEqual(0);
    expect(calculation.Calculate(ConversionTypes.CostPer100g, null, "")).toEqual(0);
    expect(calculation.Calculate(ConversionTypes.CostPer100g, null, null)).toEqual(0);
    expect(calculation.Calculate(ConversionTypes.CostPer100ml, undefined, null)).toEqual(0);
});
