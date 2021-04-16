import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', //attribute selector
  // selector: '.app-servers',     //class selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server has been created';
  serverName = 'TestServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created, the name is ' + this.serverName;
  }

  onUpdateServerName(event : any) {
    console.log(event);
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
