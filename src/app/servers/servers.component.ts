import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverID = 4355;
  serverStatus = 'online';
  allowNewServer = false;
  serverCreationStatus = "No server is added.";
  serverName = 'Testserver';

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
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onUpdateServerName($event: any) {
    // console.log($event);
    this.serverName = (<HTMLInputElement>$event.target).value;

  }

}
