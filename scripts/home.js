/*File with the code to manage the home page*/ 

//Function to manage what is shown in the home page
function home() {
  //Message in the console to verify the page in which we are
  console.log('This is the home page!');

  /*Ajax call to NewsApi to receive News information in json format. 
    I make the request of the top headlines in the United Kingdom*/
  $.ajax({
    url: 'https://newsapi.org/v2/top-headlines?country=gb&apiKey=6a3c3f9a3a1848d2b14bf153f7adfa8b',
    dataType: "json",
    type:'GET',
    crossDomain:true,
    success: function(response) {
      /*The answer is saved in the variable "response" and we show it in the console,
      to prove the reception of the information requested*/
      console.log(response);

      /*Here is the code which goes in the most popular section of the home page. 
       I have created a variable "value" which contains the html code which lack in the page*/ 
      var value = '<hr/>' +
      '<div class="container">' +
      '<h3> Most Popular</h3>' +
      '<hr/>' +
        '<div class="row">';
        /*In that for, I create the spaces for 8 news; taking the title, image, description
         and URL I have received in the ajax call*/
          for (var i=0;i<9;i++){
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
      
      //Finally all the code is shown in the screen but deleting the previous one with the .html
      $(".popular-page").html(value);             
    } 
  });  
}

//Call to the "registerPage" method in index.js to send the name and fuction of the home page.
registerPage('home', home);