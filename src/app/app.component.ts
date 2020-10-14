import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

    columnDefs = [
        {field: 'make' },
        {field: 'model' },
        {field: 'price'}
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make:  'Porsche', model: 'Boxter', price: 72000 }
    ];

    arr : [] = [];

    private sideBar;
     private defaultColDef;

    constructor()
    {

       this.defaultColDef = {
      flex: 1,
      minWidth: 100,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
      sortable: true,
      filter: true,
    }

      this.sideBar = 'columns';

        for(let i=0;i<500; i++)
        {
          this.arr.push('1');

          this.rowData.push({ make: 'Toyota', model: 'Celica', price: 35000 });
        }
    }

}