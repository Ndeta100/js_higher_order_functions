const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//   using for loop
  for(let i=0; i<companies.length; i++){
      console.log(companies[i])
  }

  let canDrink=[]
  for(let i=0; i<ages.length; i++){
      if(ages[i]>=21){
          canDrink.push(ages[i])
      }
  }
console.log(canDrink)
//   using a foreach
  companies.forEach((company)=>{
   console.log(company)
  })

//   FIlter
// Get 21 and older
const canDrinkFilter=ages.filter((age)=>{
    if(age>=21){
        return true
    }
})
// filter the retail company
const retailCompanies=companies.filter((company)=>{
    if(company.category=='Retail'){
        return true
    }
})
console.log(retailCompanies)

// Get 80's companies

const eightiesCompanies=companies.filter((company)=>{
    if(company.start>=1980 && company.start<1990){
        return true
    }
})
console.log(eightiesCompanies)

// Get companies that lasted 10 years or more
const lastedTenYears=companies.filter((company)=>{
   if( company.end-company.start >=0){
       return true
   }
})

// Map
// Create array of company names
const companyNames=companies.map((company)=>{
    return company.name
})
console.log(companyNames)
const testMap=companies.map((company)=>{
    return `${company.name} [${company.start} - ${company.end}]`
})
console.log(testMap)

const agesSquare=ages.map(age=>Math.sqrt(age))
const agesTimesTwo=ages.map(age=>age*2)
console.log(agesSquare, agesTimesTwo)

// Sort
const sortedCompanies=companies.sort((c1,c2)=>{
 if(c1.start>c2.start){
     return 1
 }else{
     return -1
 }
})
console.log(sortedCompanies)
// sort ages
const sortAges=ages.sort((a,b)=>a-b)

//reduce
let ageSum=0
for(let i=0; i<ages.length; i++){
    ageSum +=ages[i]
}
console.log(ageSum)
ageSum=ages.reduce((total,age)=>{
 return total+age
},0)
// Total years for all companies
const totalYears=companies.reduce((total,company)=>{
    return total+ (company.end-company.start)
},0)
console.log(totalYears)

// combine methods
const combined=ages.map(age=>age*2).filter(age=>age>=40).sort((a,b)=>a-b).reduce((a,b)=>a+b,0)


for(let i=0; i<10000000;i++){
    x=x+1 
}