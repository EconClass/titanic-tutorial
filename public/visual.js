const showPassengers = (data) => {
  let fields = data.map(info => info.fields);
  sortByBinary(fields, 'survived', 'No');
  const containerDiv = document.getElementById("visual");

  fields.forEach(person => {
    const el = document.createElement('div');
    el.className = 'person';

    el.style.margin = '1px';
    el.style.width = '30px';
    el.style.height = '30px';
    el.style.border = '1px solid';
    el.style.borderRadius = person.sex == 'female' ? '20px' : 'none';
    el.style.background = person.survived == 'No' ? 'gray' : '#54b649';

    containerDiv.appendChild(el);
  });
};

// const { name, age, embarked } = person;
// let from;
// if (embarked == 'C') {
//   from = 'Cherbourg'
// }
// else if (person.embarked == 'Q') {
//   from = 'Queenstown'
// }
// else { from = 'Southampton' };

const sortByBinary = (fields, field, condition) => {
  fields.sort((a, b) => {
    if (a[field] == condition) {
      return 1;
    } else if (b[field] == condition) {
      return -1;
    };
    return 0;
  });
}