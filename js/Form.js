class Form {
    constructor() {
      
    }
  
    display(){
      var title = createElement('h2')
      title.html("AFFINITY PaintX");
      title.position(1400, 100);
      title.style('font-size', '80px');
      title.style('color', '#1313b5');

      var input = createInput("Name");
      var button = createButton("Start Drawing");
      
      input.position(1400, 360);
      button.position(1400, 400);
  
      button.mousePressed(function(){
        input.hide();
        button.hide();
        background("white");
        
        

        title.position(600, -70);
  
        var name = input.value();

        bg = 255;
        userCount+=1;
        user.update(name);
      
        user.updateCount(userCount);
        
       
        var greeting = createElement('h3');
        greeting.html("Hello " + name )
        greeting.position(50, 100);
        
        fill(135, 217, 230);
        rectMode(CENTER);
        rect(1900/2,10,1900,140);
        
        fill(135, 217, 230);
        rectMode(CENTER);
        rect(100,1090/2, 200,1090)
        
        
        
      });
  
    }
  }
