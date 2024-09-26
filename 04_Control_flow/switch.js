let month = 4
switch (month) {
    case 1:
        console.log("january")
        break;
        case 2:
        console.log("fab")
        break;
        case 3:
        console.log("march")
        break;
        case 4:
        console.log("april")
        break;

    default:
        case 1:
        console.log("Default case match.")
        break;
        
}

let months = "march"
switch (months) {
    case "january":
        console.log("january")
        break;
        case "fab":
        console.log("fab")
        break;
        case "march":
        console.log("march")
        break;
        case "april":
        console.log("april")
        break;

    default:
        case 1:
        console.log("Default case match.")
        break;
        
}

let fruit = "mango";

switch (fruit) {
  case "apple":
  case "banana":
  case "mango":
    console.log("It's a fruit");
    break;  // control flow ko breck karta hai ..
  default:
    console.log("Unknown food");
}