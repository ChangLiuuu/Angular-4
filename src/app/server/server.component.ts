import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverID = 4355;
  serverStatus = 'online';
  allowNewServer = false;
  serverCreationStatus = "No server is added."

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = "Add server successfully."
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
