import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Users } from './Users/users.component';
import { Servers } from './Servers/servers.component';
import { ServerComponent } from './Servers/server/server.component';
import { UserComponent } from './Users/user/user.component';
import { EditServerComponent } from './Servers/edit-server/edit-server.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: Users },
  { path: 'users/:id/:name', component: UserComponent },
  { path: 'servers', component: Servers },
  { path: 'edit-server', component: EditServerComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    Users,
    Servers,
    ServerComponent,
    UserComponent,
    EditServerComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
