module.exports = 

// let str = '()';
// let bracketsConfig = [
//   [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]
// ];



function check(str, bracketsConfig) {
let stack = [];
  let bracketsClose = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
    ['|']: '|',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
    ['7']: '7',
    ['8']: '8',
  };

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    // ADD -----------
    if ((bracketsConfig.flat(2).filter((e, i) => i % 2 === 0).includes(currentSymbol))) {
      stack.push(currentSymbol);
    }
    else {
      if (stack.length === 0) {
        return false;
      }
    }
// delete ---------------------------------
    let topElement = stack[stack.length - 1];


    if (bracketsClose[currentSymbol] === topElement) {
      stack.pop()
    } 
    // else {
    //     return false;
    //   }  
      
  }

return (stack.length === 0);

  
};

// console.log(stack);

// console.log(check(str, bracketsConfig));

