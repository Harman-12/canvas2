class User {
    constructor(){}
  
    getCount(){
      var userCountRef = database.ref('userCount');
      userCountRef.on("value",function(data){
        userCount = data.val();
      })
    }
  
    updateCount(userCount){
      database.ref('/').update({
        userCount: userCount
      });
    }
  
    update(name){
      var userIndex = "user" + userCount;
      database.ref(userIndex).set({
        name: name
      });
    }
  
      
}
    