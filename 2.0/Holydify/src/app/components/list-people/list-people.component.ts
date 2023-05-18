import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { people } from "src/app/models/people";




@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'rol', 'name', 'mail', 'dateout', 'datein', 'action1'];
  dataSource: MatTableDataSource<people> = new MatTableDataSource();

  @ViewChild(MatPaginator) pager!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.pager;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.http.get<people[]>('/api/people').subscribe(
      data => {
        this.dataSource.data = data;
      },

      error => {
        console.log(error);
      }
    );
    }
  }