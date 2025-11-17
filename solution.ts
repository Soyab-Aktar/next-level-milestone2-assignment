const formatValue = (value: string | number | boolean):string|number|boolean =>{
  if(typeof value === "string"){
    return value.toUpperCase();
  }
  else if(typeof value === "number"){
    return value*10;
  }
  else{
    return !value;
  }
}
const getLength = (value: string| any[]) =>{
  return value.length;
}
class Person{
  name: string;
  age: number;
  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
  }
  getDetails(){
    const userDetails:string = `Name: ${this.name}, Age: ${this.age}`;
    return userDetails;
  }
}
const filterByRating = (products: {title: string; rating:number}[]):{title: string; rating:number}[] =>{
  return products.filter(product => product.rating >= 4);
}
const filterActiveUsers = (users: {id:number; name:string; email:string; isActive:boolean}[]):{id:number; name:string; email:string; isActive:boolean}[] =>{
  return users.filter(user => user.isActive === true);
}
interface Book{
  title:string;
  author:string;
  publishedYear:number;
  isAvailable:boolean;
}
const printBookDetails = (book:Book) =>{
  const available = book.isAvailable?'Yes':'No';
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`)
}
const getUniqueValues = (arr1:(number | string)[], arr2:(number | string)[]):(string | number)[] =>{
  const newArr:(string | number)[] = [];
  for(let i=0;i<arr1.length;i++){
    let isSame = false;
    for(let j =0;j<newArr.length;j++){
      if(arr1[i] === newArr[j]){
        isSame = true;
        break;
      }
    }
    if(!isSame){
      newArr.push(arr1[i]);
    }
  }

  for(let i=0;i<arr2.length;i++){
    let isSame = false;
    for(let j =0;j<newArr.length;j++){
      if(arr2[i] === newArr[j]){
        isSame = true;
        break;
      }
    }
    if(!isSame){
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}
const calculateTotalPrice = (products: {name:string; price:number; quantity:number; discount?:number}[]):number => {
  return products.reduce((total,product) =>{
    const basePrice = product.price * product.quantity;
    const discountAmount = product.discount ? (basePrice * product.discount) / 100 : 0;
    return total + (basePrice - discountAmount);
  },0);
}
