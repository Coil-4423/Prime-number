import data from './primes.json'
export function judgePrimeNumber(number:number){
      if (number<=1){return false}
      else if(data.includes(number)){return true}
      else if(number<=data[data.length-1]){return false}
      else{
        for (let k = 0;k<data.length-1; k++) {
            if ((number>data[k])&&(number % data[k] === 0)) return false
        }
        function lastJudge(number:number):boolean{
            let array:number[]=[number];
            for(let i=data[data.length-1]+1;i<(number-1)/2;i++){
                if (number % i === 0)array.push(i);
            }
            return ((array.length === 1) && (array[0] === number))
        };
        return lastJudge(number)
    }
}

// let result=[2,3,5,7];

// for (let i = 3; i < number; i++) {
//   let array=[];
//   for (let k = 2; k<=i; k++) {
//     if(i%k===0&&k%2!==0&&k%3!==0&&k%5!==0&&k%7!==0)array.push(k);
//   }
//   console.log(array);
//   if(array.length===1&&array[0]===i)result.push(i);
// }
// console.log(result)

