import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public rowData$!: Observable<any[]>;
public columnDefs: ColDef[] = [
  { field: 'make'},
  { field: 'model'},
  { field: 'price' }
];

public defaultColDef: ColDef = {
  sortable: true,
  filter: true,
  enableRowGroup:true
};

constructor(private http: HttpClient) {}

 // Example load data from sever
 onGridReady(params: GridReadyEvent) {
   this.rowData$ = this.http
     .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
 }

 ngOnInit():void{

 }
  onCellClicked(event:CellClickedEvent){
    console.log(event);
    
  }
}
