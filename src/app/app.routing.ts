import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { RecommendationsComponent } from './recommendations';
import { FavoritesComponent } from './favorites';
import { AuthGuard } from './backend';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recommendations', component: RecommendationsComponent },
    { path: 'favorites', component: FavoritesComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);