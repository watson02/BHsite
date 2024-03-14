// Search Engine

function search_topics() {
    //get the input through getElementById
    let input = document.getElementById('searchbar').value
    // For case sensitvity
    input=input.toLowerCase();
    // Documents are stored in x
    let x = document.getElementsByClassName('topics');

    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}