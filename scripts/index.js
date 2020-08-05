/*File with the main code to manage what is shown in my web's screen*/ 


// We show by defect the home page
$(function() {
    showPage('home');
});

//Creating a variable to save the functions of each page
const pageFunctions = {};

/*In this function it is stablished the function which each page has.
 The information is received from every individual js file.*/
function registerPage(name, pageFunction) {
    pageFunctions[name] = pageFunction;
}


$(document).ready(function(){

    /* When clicking the logo of that web we obtain the name of the home page with the 
    "data-page" parameter,  and we save it in the variable name*/
    $('.navbar-brand').click(function(event) {
        event.preventDefault();
        const name = this.dataset.page;
        showPage('home');   
    });
    
    /*When clicking the different links to the individual pages, we obtain the name of the page we want to go
     with the "data-page" parameter, and we save it in the variable name*/
    $('.nav-link').click(function(event) {
        event.preventDefault();
        const name = this.dataset.page;
        showPage(name);
    });   
});

/*Here is the code to open the page which have been clicked, and that page is shown after
closing the current one*/
function showPage(name) {
    $('.page').hide();
    $('.' + name + '-page').show();
 // Run the fuction of the indivial page wich have been clicked
    pageFunctions[name]();
}

 