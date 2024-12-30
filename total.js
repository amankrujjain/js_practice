// const data = [
//     {
//         "id": 1,
//         "employee_name": "Tiger Nixon",
//         "employee_salary": 320800,
//         "employee_age": 61,
//         "profile_image": ""
//         },
//         {
//         "id": 2,
//         "employee_name": "Garrett Winters",
//         "employee_salary": 170750,
//         "employee_age": 63,
//         "profile_image": ""
//         },
//         {
//         "id": 3,
//         "employee_name": "Ashton Cox",
//         "employee_salary": 86000,
//         "employee_age": 66,
//         "profile_image": ""
//         },
//         {
//         "id": 4,
//         "employee_name": "Cedric Kelly",
//         "employee_salary": 433060,
//         "employee_age": 22,
//         "profile_image": ""
//         },
//         {
//         "id": 5,
//         "employee_name": "Airi Satou",
//         "employee_salary": 162700,
//         "employee_age": 33,
//         "profile_image": ""
//         },
//         {
//         "id": 6,
//         "employee_name": "Brielle Williamson",
//         "employee_salary": 372000,
//         "employee_age": 61,
//         "profile_image": ""
//         },
// ];

// // let totalSalary = data.reduce((sum, salary)=> sum + parseInt(salary.employee_salary),0);

// let filteredData = data.filter((data)=> parseInt(data.employee_age) >= 40);

// let names = filteredData.map((name)=> name.employee_name);

// let totalSalary = filteredData.reduce((sum,number)=> sum + number.employee_salary, 0)

// console.log(filteredData);
// console.log(names);
// console.log(totalSalary)

// api url - https://dummyjson.com/products

// extract the data of products whose ratings are above 4

const fetchData = async()=>{
    const api = await fetch("https://dummyjson.com/products");
    const result = await api.json();

    const fetchRatedData = result.products

    const highRatedData = fetchRatedData.filter((data)=> data.minimumOrderQuantity > 8);

    const namesOfEmployees = highRatedData.map((data)=> data.category)

    const totalPrice = highRatedData.reduce((acc,number)=> acc + number.price,0)

    console.log(namesOfEmployees) 

}
fetchData()

