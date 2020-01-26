import {Calculation} from '../utils/Calculation';
const calculation = new Calculation();

it('Valid inputs', () => {
    expect(calculation.IsValid(200)).toBe(true);
    expect(calculation.IsValid(35.7)).toBe(true);
    expect(calculation.IsValid(1)).toBe(true);
});

it('Invalid inputs', () => {
    expect(calculation.IsValid(0)).toBe(false);
    expect(calculation.IsValid(-5)).toBe(false);
    expect(calculation.IsValid("")).toBe(false);
    expect(calculation.IsValid("0")).toBe(false);
    expect(calculation.IsValid(" ")).toBe(false);
    expect(calculation.IsValid("abc")).toBe(false);
    expect(calculation.IsValid("y")).toBe(false);
    expect(calculation.IsValid(null)).toBe(false);
    expect(calculation.IsValid(undefined)).toBe(false); 
});
