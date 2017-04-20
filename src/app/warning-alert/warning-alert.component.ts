import {Component} from "@angular/core";
@Component({
  selector: 'app-warning-alert',
  template:
    `
    <h1>SHOW THE ALERT: </h1>
    <p>This is a warning !</p>
    
    `,

  styles: [
    `
    h1 {
      font-family: sans-serif;
      color: brown;
    }
    
    p {
      text-align: center;
      font-family: "Malayalam MN";
      font-size: medium;
      padding: 20px 40px;
      background: lightpink;
      border: 4px solid crimson;
    }
    
    `

  ]
})
export class WarningAlert {

}
