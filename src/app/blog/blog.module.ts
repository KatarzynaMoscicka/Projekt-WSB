import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PostFormComponent } from './post-form/post-form.component';
import {SinglePostComponent} from './single-post/single-post.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { RightSideComponent } from './first-page/right-side/right-side.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    PostFormComponent,
    SinglePostComponent,
    FirstPageComponent,
    RightSideComponent,
    PageNotFoundComponent,
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],

  exports: [
    PostFormComponent,
    SinglePostComponent,
    FirstPageComponent
  ]
})
export class BlogModule{}
