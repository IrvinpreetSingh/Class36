class Form {
  constructor() {

this.input = createInput("Name");
this.button = createButton('Play');
this.title = createElement('h2')    
this.greeting = createElement('h3'); 
 
 }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(130, 0);
    
    
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      this.name = this.input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
     
      this.greeting.html("Hello " + name )
      this.greeting.position(130, 160)
    });
}
//function hide
hide(){
this.greeting.hide();
this.button.hide();
this.input.hide();

}
  }
  

