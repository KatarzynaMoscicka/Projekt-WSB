import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent  {

  public posts:any= this.postService.getPosts();

  postForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private postService: PostService) { }

  public ngOnInit(): void {
       this.postForm = this.formBuilder.group({
       id: [''],
       title: ['',[Validators.minLength(3), Validators.maxLength(30)]],
       text: ['', Validators.minLength(10)]
    }) 
  
  }


  createPost(): void {
    const formValue = this.postForm?.getRawValue(); /*formValue czyli cala zawartosc posta do kupy */
    console.log(formValue);

    this.postService.postPost(formValue);
  }

  clearPost() {
    this.posts = "";
  }

  removePost(){
    console.log('post usuniety')
  }

  
  /*tu jest problem... nie dziala mi usuwanie postow */
  /*removePost(){
    const formCopy = Object.assign({}, this.postForm.getRawValue()); // copy form object
    return delete this.postForm.value.text; // delete propert
    this.postService.postPost(formCopy);
    console.log('wartos po usunieciu formcopy', formCopy)};*/


  

  /*
  
  Proba 1

  removePost(){
    const formCopy = Object.assign({}, this.postForm.getRawValue()); // copy form object
    console.log('wartos formcopy', formCopy)
    delete this.postForm.value.text; // delete propert
    this.postService.postPost(formCopy);
    console.log('wartos po usunieciu formcopy', formCopy)
    };
  */
  
  
  
  
  /* 
  Proba 2
  tu usuwa mi i tworzy nowy pusty post zamiast usuwac stary
  
  const formCopy = Object.assign({}, this.postForm.getRawValue()); // copy form object
delete this.postForm.value.text; // delete propert
this.postService.postPost(formCopy);
console.log('wartos po usunieciu formcopy', formCopy)
}*/





  /*tu jest problem... nie dziala mi usuwanie postow */
 
 /*
 

  
  /*
  Proba 3
  removePost(formValue: Post): Observable<any> {
      return this.http.delete(`${this.url}/${formValue.id}`);
    }*/
   

    /* 
    Proba 4 

    const formValue = this.postForm?.getRawValue();
    this.postService.deletePost(formValue); */
    
    /* --proba przy uzyciu resetu, tez nie dziala---
    formValue.reset({id:'',title:'',text:''})*/




 deleteAll(){
 this.posts= '';
 /*czysci mi tylko z widoku, a nie z jsona, po odswiezeniu znowu sie pojawia*/
 }
}
























function formValue(formValue: any) {
  throw new Error('Function not implemented.');
}

function removePost() {
  throw new Error('Function not implemented.');
}
/*

  public posts:any= this.postService.getPosts(); 
  postForm!: FormGroup; 


  ngOnInit() {
    this.postService.getPosts().subscribe(
        (posts: any) => {
            console.log('moje posty', posts);
        },
        (error: HttpErrorResponse) => {
            console.log('Błąd: ', error);}
        
        
       this.postForm = this.formBuilder.group({
       id: [''],
       title: ['',[Validators.minLength(3), Validators.maxLength(30)]],
       text: ['', Validators.minLength(10)]
    }) 
          }
    );
}
  
constructor(
  private postService: PostService, private formBuilder: FormBuilder) {}

createPost(): void {
    const formValue = this.postForm?.getRawValue();  
    console.log(formValue);

    this.postService.postPost(formValue);}
}


*/

