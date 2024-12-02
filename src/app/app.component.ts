import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import { Component } from "@angular/core";
import { MyCellComponent } from "./my-cell/my-cell.component";

// Row Data Interface
interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

@Component({
  standalone: true,
  imports: [AgGridAngular],
  selector: "my-app",
  template: `
    
      <!-- The AG Grid component, with Dimensions, CSS Theme, Row Data, and Column Definition -->
      <ag-grid-angular
        class="ag-theme-quartz"
        style="width: 100%; height: 500px;"
        [rowData]="rowData"
        rowSelection="multiple"
        [columnDefs]="colDefs"
      />
  `,
})
export class AppComponent {
  themeClass =
    "ag-theme-quartz";

  // Row Data: The data to be displayed.
  rowData: IRow[] = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<IRow>[] = [
    { field: "make", cellRenderer: MyCellComponent, flex: 2, filter: true, 
      cellEditor: "agSelectCellEditor",
      checkboxSelection:true
 },
    { field: "model", flex: 1 },
    {
      field: "price",
      valueFormatter: p => "$" + p.value.toLocaleString(),
      flex: 1, filter: true
    },
    { field: "electric" },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };
}
