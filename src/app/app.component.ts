import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day35';

  path = ['', '/cat','/dog']

  constructor(private router:Router){
    
  }

  clicked(){
    console.info("This button has been clicked")
    const i = Math.floor(Math.random()*3)
    this.router.navigate([this.path[i]])
  }

}
