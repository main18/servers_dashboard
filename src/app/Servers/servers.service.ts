import { Injectable } from '@angular/core';
import { Server } from './server.model';

@Injectable({
    providedIn: 'root'
})

export class ServersService {
    serversList: Server[] = [
        new Server(1, 'AWS','online'),
        new Server(2, 'Netlify', 'online'),
        new Server(3, 'ESTC', 'offline'),
    ]

    getServers(){
        return this.serversList;
    }

    getServer(id:number){
        const server = this.serversList.find((server)=>server.id==id);
        return server;
    }

    updateServer(id:number,name:string, status:string){
        this.serversList.forEach((server)=>{
            if(server.id == id){
                server.name = name;
                server.status = status;
            }
        })

        /* const server = this.serversList.find((server)=>server.id==id);
        server.name = name;
        server.status = status; */
    }
}


