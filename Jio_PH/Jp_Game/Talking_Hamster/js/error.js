function handleKeydown(e) {
  switch(e.key) {
    case 'SoftLeft':
      softkeyCallback.left();
      break;
    case 'SoftRight':
      softkeyCallback.right();
      break;
    case 'Enter':
      softkeyCallback.center();
      break;

  }
};


const softkeyCallback = {
    left: function() { 
      
     },
  
    center: function() { 

      },
  
    right: function() { 
        window.close();
     }
};

document.addEventListener('keydown', handleKeydown);


	

