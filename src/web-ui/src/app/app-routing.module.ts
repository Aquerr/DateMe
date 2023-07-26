import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../components/authentication/sign-in/sign-in.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { InfoComponent } from '../components/info/info.component';
import { AnonymousGuard } from '../components/authentication/anonymous.guard';

const routes: Routes = [
  {
    path: '',
    component: InfoComponent,
    title: 'title.main',
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [AnonymousGuard],
    title: 'title.sign-in',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'title.not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
