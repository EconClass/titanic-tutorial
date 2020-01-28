const showPassengers = (data) => {
  let fields = data.map(info => info.fields);
  sortByBinary(fields, 'survived', 'Yes');
  const containerDiv = document.getElementById('visual');

  fields.forEach(person => {
    const el = document.createElement('div');
    el.className = 'person';

    let { name, age, embarked } = person;

    // This is just to make the text pretty
    let from;
    if (embarked == 'C') {
      from = 'Cherbourg';
    }
    else if (person.embarked == 'Q') {
      from = 'Queenstown';
    }
    else { from = 'Southampton'; };

    // Same with this block of code
    if (!age) {
      age = "Unknown";
    }
    else if (age < 1) {
      age = `${Math.floor(age * 12)} months`;
    }
    else {
      age = `${age} years`;
    }

    el.dataset.name = `${name}`;
    el.dataset.age = `${age}`;
    el.dataset.from = `${from}`;

    el.style.margin = '1px';
    el.style.width = '30px';
    el.style.height = '30px';
    el.style.border = '1px solid';
    el.style.borderRadius = person.sex == 'female' ? '20px' : 'none';
    el.style.background = person.survived == 'No' ? 'gray' : '#54b649';

    containerDiv.appendChild(el);
  });
};

const tooltip = document.querySelector('.tooltip');
const container = document.querySelector('#visual');

// Check for a mouseover on container
container.addEventListener('mouseout', (e) => {
  if (e.target.classList.contains('person')) {
    tooltip.style.opacity = '0';
    tooltip.innerHTML = '???';
  }
});

// Check for a mouseover on container
container.addEventListener('mouseover', (e) => {
  // Check if the element in container is a .person
  if (e.target.classList.contains('person')) {
    // Show the tooltip
    tooltip.style.opacity = '1';
    // If these elements had: data-name='some name' you.d see the name
    const { name, age, from } = e.target.dataset;
    tooltip.innerHTML = `
    Name: ${name}, <br/>
    Age: ${age}, <br/>
    Departed from: ${from}
    `;
  }
});

// Positions the tooltip at the cursor position on the page
container.addEventListener('mousemove', (e) => {
  const { pageX, pageY } = e;

  tooltip.style.left = `${pageX + 15}px`;
  tooltip.style.top = `${pageY}px`;
});


const sortByBinary = (fields, field, condition) => {
  fields.sort((a, b) => {
    // Fields that meet the condition provided appear before those that don't
    if (a[field] == condition) {
      return -1;
    } else if (b[field] == condition) {
      return 1;
    };
    return 0;
  });
};