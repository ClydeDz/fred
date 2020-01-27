import {Calculation} from '../utils/Calculation';
const calculation = new Calculation();

it('Simple grams', () => {
    expect(calculation.Calculate(1, 200, 2)).toEqual(1);
});

it('Simple milliliters', () => {
    expect(calculation.Calculate(2, 300, 2)).toEqual(0.67);
    expect(calculation.Calculate("", 3, 5.27)).toEqual(175.67);
});

it('Simple litres', () => {
    expect(calculation.Calculate(3, 3, 5.27)).toEqual(1.76); 
});

it('Exceptional inputs', () => {
    expect(calculation.Calculate(1, 0, 0)).toEqual(0);
    expect(calculation.Calculate(2, 0, 3.5)).toEqual(0);
    expect(calculation.Calculate(3, "", "")).toEqual(0);
    expect(calculation.Calculate(3, "0", "")).toEqual(0);
    expect(calculation.Calculate(3, "0", 4)).toEqual(0);
    expect(calculation.Calculate("", "0", "")).toEqual(0);
    expect(calculation.Calculate(1, null, "")).toEqual(0);
    expect(calculation.Calculate(1, null, null)).toEqual(0);
    expect(calculation.Calculate(2, undefined, null)).toEqual(0);
});
