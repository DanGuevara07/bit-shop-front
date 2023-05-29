import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title:string = ""
  @Input() description:string = ""
  @Input() button:any = {name: "Comprar", color:"success"}
  
  buyItem():void{
    alert("Elemento comprado")
    this.button.color = "primary"
    return
  }
}
