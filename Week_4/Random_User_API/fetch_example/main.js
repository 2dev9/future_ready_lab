/*eslint-env browser*/
const userApiUrl = 'https://randomuser.me/api/?results=10';

fetch(userApiUrl)
    .then(function(response) {  
        return response.json();
    })
    .then(function(data){
        let authors = data.results; // Get the results
        console.log(authors);
        authors.forEach(function(author) { // Map through the results and for each run the code below
            
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
    })
    .catch(function(error) {
        // If there is any error you will catch them here
        console.log(error);
});   
