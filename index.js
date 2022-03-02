const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   tutorials.map(element => element[0].toUpperCase() + element.slice(1)) 
//   return tutorials
//  }

 const titleCased = () => {
  const newArray =  tutorials.map(element => {let sentence = element.split(" ")
    return sentence.map(element => element[0].toUpperCase() + element.slice(1)).join(" ")
    })
    console.log(newArray)
     return newArray
}

