import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red';
    }
  }

  onUp() {
    this.postLoveIts++;
    console.log(this.postTitle + " : " + this.postLoveIts);
  }

  onDown() {
    this.postLoveIts--;
    console.log(this.postTitle + " : " + this.postLoveIts);
  }

}
