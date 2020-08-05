/*File with the code to manage the politics page*/ 

//Function to manage what is shown in the politics page
function politics() {
  //Message in the console to verify the page in which we are
  console.log('This is the politics page!');

  /*Ajax call to NewsApi to receive News information in json format. 
  I make the request of all the news which contains the word politicians,
  sorting the results by popularity to show the most important ones*/
  $.ajax({
    url: 'https://newsapi.org/v2/everything?q=politician&apiKey=6a3c3f9a3a1848d2b14bf153f7adfa8b',
    dataType: "json",
    type:'GET',
    crossDomain:true,
    success: function(response) {
      /*The answer is saved in the variable "response" and we show it in the console,
      to prove the reception of the information requested*/
      console.log(response);

      /*Here is the code which goes in the politics section. 
       I have created a variable "value" which contains the html code which defines the page*/
      var value = '<div class="container">' +
        '<h3 class="display-4"> Politics News</h3>' +
        '<hr/>' +
          '<div class="row">';
          /*In that for, I create the spaces for 12 news; taking the title, image, description
          and URL I have received in the ajax call*/
            for (var i=0;i<12;i++){
              value = value  +   
              '<div class="col-md-4">' +
                '<h4>' + response.articles[i].title + '</h4>'  +
                '<img class="img-fluid" src="' + response.articles[i].urlToImage +  '"' + '>' +
                '<p>'+response.articles[i].description+'</p>'+
                '<a href="' + response.articles[i].url + '" class="btn btn-outline-danger btn-sm">Read more</a>' +
                '<hr>' +
              '</div>';
            }
      value = value + '</div>';

      //Finally all the code is shown in the screen but deleting the previous one with the .html.
      $(".politics-page").html(value);             
    }
  });
}

//Call to the "registerPage" method in index.js to send the name and fuction of the politics page.
registerPage('politics', politics);