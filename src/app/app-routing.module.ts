import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/home/index/index.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full' },
  {path: 'home', component: HomeComponent, children: [
      { path: '', component: IndexComponent }
    ]
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
