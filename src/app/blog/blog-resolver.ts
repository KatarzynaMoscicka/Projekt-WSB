import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";


import { Post } from "./post";
import { PostService } from "./post.service";



@Injectable({
    providedIn: 'root'
})
export class PostResolver implements Resolve<Post[]> {
    postService: any;

    constructor(private sandwichService: PostService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Post[]> {
        return this.postService.getPosts();
    }

}
