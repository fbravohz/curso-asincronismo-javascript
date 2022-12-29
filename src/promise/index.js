const promise = new Promise(function(resolve, reject) {
  resolve('hey!');
});

const cow = 9;

const countCows = new Promise(function(resolve, reject) {
  if (cow > 10)
    resolve(`We have ${cow} cows in the farm`);
  else
    reject('Not enough cows');
})

countCows
  .then(result => console.log(result))
  .catch(err => console.log(err))
  .finally(() => console.log('Finally'));