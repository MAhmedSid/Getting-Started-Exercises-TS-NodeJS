//Ex-1 - Install Node.Js, TypeScript and VS Code


//Ex-2 - Personal Message
let personName:string = "Ahmed";
console.log(`Hello ${personName},Do you want to learn about web 3.0 today?`)



//Ex-3 - Print name in 3 different text-case.
function TitleCaseConvertor(name:string):string {
    return name.split(' ').map((alp) => alp[0].toUpperCase() + alp.slice(1)).join(' ');
  }
console.log(personName.toLowerCase())
console.log(personName.toUpperCase())
console.log(TitleCaseConvertor(personName))
