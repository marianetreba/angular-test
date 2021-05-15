import { Component, OnInit } from '@angular/core';

import { CollegeInterface } from '../college.interface';
import { CollegeService } from "../college.service";

import { COLLEGE_ABOUT$ } from "../college.providers";

@Component({
  selector: 'app-college',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [CollegeService, { provide: COLLEGE_ABOUT$, useValue: "CollegeAbout" }],
})
export class AboutComponent implements OnInit {

  college?: CollegeInterface;

  constructor(private collegeService: CollegeService) {
  }

  ngOnInit() {
    this.getCollege();
  }

  getCollege(): void {
    this.collegeService.getCollege()
        .subscribe(college => this.college = college);
  }
}
