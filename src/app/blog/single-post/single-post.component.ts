import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
 /* uzywam tej funkcji getPost ktora jest zrobiona w postService. Moge jej uzyc bo wstrzyknelam w nawiasie konstruktora PostService)*/
  
 
 public posts:any= this.postService.getPosts(); /* zrobione zeby dostac/pobrac posty */
/*dodalam sama "any" bo  error TS2322: Type 'Object | null' is not assignable to type 'NgIterable<any> | null | undefined'. */



  constructor(private postService: PostService) { }

  public ngOnInit(): void {
   
  }

}
