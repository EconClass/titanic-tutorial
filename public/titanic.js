fetch('titanic-passengers.json')
  .then(res => res.json())
  .then(json => {
    showPassengers(json)
    console.log(handleData(json))
  })
  .catch(err => console.log(err.message))


const countFields = (data, field, value) => {
  return data.reduce((acc, passenger) => {
    if (passenger.fields[field] === value) {
      return acc += 1;
    }
    return acc;
  }, 0)
}


const passengerInfo = (passenger) => {
  const info = passenger.fields;
  const { name, fare, pclass, survived, age } = info;
  return {
    name,
    fare,
    pclass,
    survived,
    age
  }
};

const minOfField = (data, field) => {
  // Initial min is the first passenger's value
  let minField = data[0].fields[field]

  data.forEach(passenger => {
    if (passenger.fields[field] < minField && passenger.fields[field] !== undefined) {
      minField = passenger.fields[field];
    }
  });

  return minField
}

const maxOfField = (data, field) => {
  // Initial min is the first passenger's value
  let maxField = data[0].fields[field]

  data.forEach(passenger => {
    if (passenger.fields[field] > maxField && passenger.fields[field] !== undefined) {
      maxField = passenger.fields[field];
    }
  });

  return maxField
}


const handleData = (data) => {
  // Total Passengers
  console.log(`Total Passengers: ${data.length}`)
  // Number of women
  const womenCount = countFields(data, 'sex', 'female')
  console.log(`Women count: ${womenCount}`)

  // Number of men
  const menCount = countFields(data, 'sex', 'male')
  console.log(`Men count: ${menCount}`)

  // First Passenger Info
  const { name, fare, pclass, survived, age } = passengerInfo(data[0])
  console.log(`
  First Passenger: ${name}
  Fare: ${fare}
  Class: ${pclass}
  Survived: ${survived}
  Age: ${age}
  `)

  // Number of survivors
  const survivors = countFields(data, 'survived', 'Yes')
  console.log(`Survived: ${survivors}`)

  // Number of dead
  const dead = countFields(data, 'survived', 'No')
  console.log(`Died: ${dead}`)

  console.log(`Min Fare: ${minOfField(data, "fare")}`)

  console.log(`Max Fare: ${maxOfField(data, "fare")}`)
}