import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  
  title = 'Tienda';

  power = 10;

  clickProduct (id: number) {
    console.log(`El producto ${id} fue seleccionado mano`);
  }

}
