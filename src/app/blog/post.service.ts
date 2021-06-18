import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})


export class PostService {

  private url = 'http://localhost:3000/posts'; 
 
  constructor(private http: HttpClient) { }
 
 getPosts(): Observable <Post[]>{
   return this.http.get<Post[]>(`${this.url}`);  
 }


 getPost(id: number): Observable<Post> {
  return this.http.get<Post>(`${this.url}/${id}`);
}

savePost(post: Post): Observable<any> {
  return this.http.put(`${this.url}/${post.id}`, post);
}

deletePost(post: Post): Observable<any> {
  return this.http.delete(`${this.url}/${post.id}`);
}

 postPost(post: Post) {
    return this.http.post(this.url, post).toPromise();
 }
}
