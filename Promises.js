const data = [{
  id: 1,
  name: 'John',
  age: 30,
  city: 'New York'
},
{
  id: 2,
  name: 'Peter',
  age: 35,
  city: 'Miami'
},
{
  id: 3,
  name: 'James',
  age: 25,
  city: 'Los Angeles'
}]

// Simulate a async call
const getData = () => {
  setTimeout(() => {
    return data
  }, 1000)
}

console.log(getData()) // Returns undefined

// Promises are a special type of object that can be used to represent a value that is not yet available.

const getDataPromise = () => {
  return new Promise((resolve, reject) => { // Promise has two methods: resolve and reject (resolve is used when the promise is resolved, reject is used when the promise is rejected)
    if (data.length === 0) {
      reject(new Error('No data'))
    }

    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

console.log(getDataPromise()) // Returns a promise object

getDataPromise()
  .then(data => { // .then is used to handle the promise object and return the data when the promise is resolved (data is the data that is returned from the promise)
    console.log('1. Promise', data)
  }
  )

// Async/Await
// Async/Await is a new way to write asynchronous code in javascript. It is a syntactic sugar for promises.
const getDataAsync = async () => {
  const data = await getDataPromise() // await is used to wait for the promise to resolve
  console.log('2. Async/Await', data)
}

console.log(getDataAsync())

// With Try/Catch
const getDataAsyncWithTryCatch = async () => {
  try {
    const data = await getDataPromise()
    console.log('3. Async/Await with Try/Catch', data)
  } catch (error) {
    console.log('Error:', error)
  }
}

console.log(getDataAsyncWithTryCatch())

// Fetching data from an API
// fetch('https://pokeapi.co/api/v2/pokemon-form/132/')
//  .then(response => response.json())
//  .then(data => console.log(data))
