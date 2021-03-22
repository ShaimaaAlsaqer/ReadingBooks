var welcome = alert('welcome to the page');
var TypeOfBookYouLoveIt = prompt("what type of books");
//document.write(TypeOfBookYouLoveIt);


var LoveReading = true;
var DontLoveReading = false;
if (LoveReading == true) {
    alert('you are the best');
}
else if (DontLoveReading = false) {
    alert('you are not good and you should start reading');
}
else {
    alert('start reading')
}


//Today's lucture MAR.21.2021 Sun
var age = prompt("whats your age?");
function getUserAge(userAge) {

    console.log(age);
    if (userAge <= 15) {
        alert('this is the section of child books');
    } else if (userAge > 15) {
        alert('you can go to all section');
    } else {
        alert('please input your age');
    }
}

getUserAge(age);

var NumOfBook = prompt('how much books do you want to buy?choose number of books political or social')
var Books = ''; //initial value
var ResultNumOfBooks = ''; //initial value
var FavouritBook;
var getFavBooks = function () {
    while (TypeOfBookYouLoveIt !== 'political' && TypeOfBookYouLoveIt !== 'social') {
        TypeOfBookYouLoveIt = prompt('please choose political or social')
    }
    if (FavouritBook == 'political') {
        Books = '<img src="https://c8.alamy.com/comp/E9PG56/british-politics-section-of-books-blackwells-bookshop-oxford-england-E9PG56.jpg"  />';
    } else if (FavouritBook == 'social') {
        Books = '<img src="https://images-na.ssl-images-amazon.com/images/I/61Ms58K3hAL.jpg"/>';
    } else { alert('Please choose political or social'); }
    
    for (var i = 0; i <= NumOfBook; i++) {
        ResultNumOfBooks = ResultNumOfBooks + Books; //it will print the img 
    }
    
    console.log(ResultNumOfBooks); //to know the number of of books that the user buy it
}
getFavBooks();