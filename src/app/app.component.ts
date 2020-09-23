import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

import { Post } from '../models/post';
import * as PostActions from './actions/post.action';

interface AppState {
  post: Post;
}

interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrxFire';

  message$: Observable<string>;
  
  post: Observable<Post>;
  text: string;

  constructor(private store: Store<AppState>) {
    this.post = this.store.select('post')
    this.message$ = this.store.select('message');
  }

  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'});
  }

  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'});
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text))
  }

  resetPost() {
    this.text = '';
    this.store.dispatch(new PostActions.Reset());

  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }
}
