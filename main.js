/*
 Regular
Accrual Years of Annual Monthly
 Factor AFC Creditable Service Benefit Benefit
 1.5% x $25,000 x 30 = $11,250 12 = $937.50 (without BIP)
 x 1.05
 $984.38 (with BIP)

Benefits are determined by a set formula: Accrual Factor (1.5%) x AFC (average highest consecutive five year
salaries) x Years of Service = Monthly Benefit with/without Benefit Improvement Percentage (BIP).

*/

console.log("Testing connection with HTML file.")


const accrualFactor = 0.015

const highestAnnualSalary_1 = 50000;
const highestAnnualSalary_2 = 45000;
const highestAnnualSalary_3 = 55000;
const highestAnnualSalary_4 = 60000;
const highestAnnualSalary_5 = 45000;

const yearsOfService = 30


//this function adds up the five highest paying years the user enters
function highestAnnualSalaryAddedUp() {
    return highestAnnualSalary_1 + highestAnnualSalary_2 + highestAnnualSalary_3 +
    highestAnnualSalary_4 + highestAnnualSalary_5 
 
}

//this const creates the average of the highest paid years entered above
const highestAnnualSalaryAverage = highestAnnualSalaryAddedUp() / 5

const estimatedAnnualBenefit = accrualFactor * highestAnnualSalaryAverage * yearsOfService

const estimatedMonthlyBenifit = estimatedAnnualBenefit / 12


console.log("The number below is the total of the five highest earning years.")
console.log(highestAnnualSalaryAddedUp())

console.log("This number should be the average of those five years.")
console.log(highestAnnualSalaryAverage)


console.log("This number should be the estimated annual benifit.")
console.log(estimatedAnnualBenefit)


console.log("This number should be the estimated monthly benifit.")
console.log(estimatedMonthlyBenifit)