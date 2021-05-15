import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegeRoutingModule } from './college-routing.module';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  declarations: [AboutComponent, CoursesComponent, TeachersComponent, ContactsComponent, NotFoundComponent],
  imports: [CommonModule, CollegeRoutingModule],
})
export class CollegeModule { }
