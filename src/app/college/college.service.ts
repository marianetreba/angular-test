import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { CollegeInterface } from "./college.interface";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  private collegeUrl = 'assets/data/college.json';

  constructor(private http: HttpClient) { }

  getCollege(): Observable<CollegeInterface> {
    return this.http.get<CollegeInterface>(this.collegeUrl)
  }
}
