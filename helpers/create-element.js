// This is a helper function that you don't need to change.
function createElement(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    
    temp.innerHTML = htmlStr;
    
    while (temp.firstChild) {
      frag.appendChild(temp.firstChild);
    }
    
    return frag;
  };