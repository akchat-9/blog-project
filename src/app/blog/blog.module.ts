import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { QuillModule } from 'ngx-quill';

import { BlogListComponent } from './blog-list/blog-list.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [BlogListComponent, CreateBlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    RouterModule,
    QuillModule.forRoot(),
  ],
})
export class BlogModule {}
