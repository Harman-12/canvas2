class Paint {
    constructor(){}
    
    getState(){
      var paintStateRef  = database.ref('paintState');
      paintStateRef.on("value",function(data){
        paintState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        paintState: state
      });
    }
  
    start(){
      if(paintState === 0){
        user = new User();
        user.getCount();
        form = new Form()
        form.display();
      }
    }
  }