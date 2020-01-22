fetch('titanic-passengers.json')
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.log(err.message))



function countFields(data, field, value) {
  return data.reduce((acc, passenger) => {
    if (passenger.fields[field] === value) {
      return acc += 1
    }
    return acc
  }, 0)
}



function handleData(data) {
  // Number of women
  const womenCount = countFields(data, 'sex', 'female')
  console.log(`Women count: ${womenCount}`)

  // Number of men
  const menCount = countFields(data, 'sex', 'male')
  console.log(`Men count: ${menCount}`)
}