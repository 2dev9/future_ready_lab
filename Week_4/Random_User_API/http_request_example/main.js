/*eslint-env browser*/

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the random user api endpoint
request.open('GET', 'https://randomuser.me/api/?results=10', true);

request.onload = function () {
    //parse the JSON of the API response
    var data = JSON.parse(this.response);
    
    //if the status code gives a success, add a list element for each user/author
    if (request.status >= 200 && request.status < 400) {
        data.results.forEach(author => {
            const ul =  document.getElementById("authors");
            var li = document.createElement('li'); //  Create the elements we need
            var img = document.createElement('img');
            var span = document.createElement('span');
            img.src = author.picture.medium;  // Add the source of the image to be the src of the img element
            span.innerHTML = "" + author.name.first + " " + author.name.last; // Make the HTML of our span to be the first and last name of our author
            
            //append the elements
            li.appendChild(img);
            li.appendChild(span);
            ul.appendChild(li);
        })
    } else {
            console.log('error');
    }
}

// Send request
request.send();