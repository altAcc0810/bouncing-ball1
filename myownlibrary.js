function isTouching(obj1,obj2){
    if(obj1.x-obj2.x<obj1.width/2+obj2.width/2
      &&obj2.x-obj1.x<obj1.width/2+obj2.width/2
      &&obj1.y-obj2.y<obj1.height/2+obj2.height/2
      &&obj2.y-obj1.y<obj1.height/2+obj2.height/2){
  
      return true
    }
    else{
      return false
    }
  }

  function bounceOff(obj1,obj2){
  
    if(obj1.x-obj2.x<obj1.width/2+obj2.width/2
      &&obj2.x-obj1.x<obj1.width/2+obj2.width/2)
    
      {
  
        
        obj1.velocityX = -4;
        obj2.velocityX = -4;
        
    }
     if(obj1.y-obj2.y<obj1.height/2+obj2.height/2
      &&obj2.y-obj1.y<obj1.height/2+obj2.height/2){ 
    
        obj1.velocityY = 10;
        obj2.velocityY = 10;
    }
  }