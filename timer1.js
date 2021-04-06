let myArray = (process.argv.slice(2))

for (let x = 0; x < myArray.length; x++) {
  if (myArray[x] >= 0 )
  setTimeout(() => {
    process.stdout.write('.\n')
  }, myArray[x]*1000);
  }