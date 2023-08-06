const data = {
    "Jenny": {
        "MO": ["Book1", "Book2"],
        "CA": ["Book3"]
    },
    "Ryan": {
        "NY": ["Book4"],
        "MA": ["Book5"]
    }, 
    "Mello": {
        "WY": ["Book6"],
        "HI": ["Book7"],
        "AR": ["Book8"]
    }, 
    "Nugget": {
        "KS": ["Book9"],
        "MA": ["Book5"]
    }, 
    "Jasper": {
        "MS": ["Book10"],
        "CA": ["Book11"]
    }
};

// console.log(data);

// let states = [];
let booksByState = {};
for(var reader of Object.keys(data)) {
    // console.log(reader);
    for(var state of Object.keys(data[reader])) {
        // console.log(state);
        // states.push(state);
        // console.log(document.getElementById(state).style.fill);
        document.getElementById(state).classList.add('green');
        // console.log(data[reader][state]);
        // let books = booksByState[state]
        if(Array.isArray(booksByState[state])) {
            booksByState[state] = booksByState[state].concat(data[reader][state]);
        } else {
            booksByState[state] = data[reader][state];
        }
        booksByState[state] = [...new Set(booksByState[state])];
    }
}
// console.log(booksByState);

var detailsBox = document.getElementById('details-box');

document.addEventListener('mouseover', function (e) {
  if (e.target.tagName == 'path') {
    // console.log(e.target.id);
    var state = e.target.id;
    if(Array.isArray(booksByState[state]) && booksByState[state].length != 0) {
        let html = '<ul>';
        // console.log(booksByState[state]);
        for(var book of booksByState[state]) {
            console.log(book);
            let item = '<li>' + book + '</li>';
            html+=item;
        }
        html+='</ul>';
        detailsBox.innerHTML = html;
        detailsBox.style.opacity = "100%";
    }else {
        detailsBox.style.opacity = "0%";
    }
  }
  else {
    detailsBox.style.opacity = "0%";
  }
});

window.onmousemove = function (e) {
  var x = e.clientX,
      y = e.clientY;
  detailsBox.style.top = (y + 20) + 'px';
  detailsBox.style.left = (x) + 'px';
};