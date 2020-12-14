import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Server } from './server.model';
import { ServersService } from './servers.service';

@Component({
    selector: 'servers-app',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})

export class Servers implements OnInit {

    serversList: Server[] = [];

    constructor(private serversService: ServersService, private router:Router, private route:ActivatedRoute) { }

    ngOnInit(){
        this.serversList = this.serversService.getServers();
    }

    onReload(){
        /* this.router.navigate(['servers'], {relativeTo:this.route}); */
    }
}