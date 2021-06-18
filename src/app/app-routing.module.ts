import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './blog/first-page/first-page.component';
import { PageNotFoundComponent } from './blog/page-not-found/page-not-found.component';
import { PostFormComponent } from './blog/post-form/post-form.component';
import { SinglePostComponent } from './blog/single-post/single-post.component';


const routes: Routes = [

    {path:'', component: FirstPageComponent },
    {path:'create', component: PostFormComponent},
    {path:'create/:id', component: SinglePostComponent},
    {path:'**', component: PageNotFoundComponent },
    ];
    
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }