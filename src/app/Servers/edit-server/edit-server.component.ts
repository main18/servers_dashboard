import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Server } from '../server.model';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server: Server;

  @ViewChild('serverName') serverName: ElementRef;

  @ViewChild('serverStatus') serverStatus: ElementRef;

  constructor(private serversService: ServersService) { }

  ngOnInit(): void {
    this.server = this.serversService.getServer(1);
    
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, this.serverName.nativeElement.value, this.serverStatus.nativeElement.value);
  }

}
