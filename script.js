var request = new XMLHttpRequest();
request.open('GET','https://github.com/vinayramu/pspositions/blob/master/data.txt', false);
request.send();
console.log(request);