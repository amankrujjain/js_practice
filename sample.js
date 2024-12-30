// Sample api call

const url = "https://dummy.restapiexample.com/api/v1/employees";

async function fetchData(url){
    const fetchResult = await fetch(url);
    let result = await fetchResult.json();

    let response = result.data;

    // let names = response.map((name)=>{
    //     return name.employee_name;
    // })
    // return names;

    // let total = response.reduce((sum,number)=> sum + parseInt(number.employee_salary),0);
    let total = response.filter((salary)=>{
        return parseInt(salary.employee_salary) >= 200000; 
    })
    let totalSalary = total.reduce((sum, num)=>sum + num.employee_salary,0)
    return totalSalary;
}

fetchData(url).then((total)=>{
    console.log("Names of the employees are:", total);
}).catch((error)=>{
    console.log(error)
});