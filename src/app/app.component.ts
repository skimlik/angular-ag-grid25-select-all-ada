import { Component } from "@angular/core";
import { ColDef } from "ag-grid-community";
import { IDataEntity } from "./data-entity";
import { GridColumnFactory } from "./grid-columns.factory";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private gridApi;
  private gridColumnApi;

  columnDefs: ColDef[] = this.columnFactory.getColumns();
  defaultColDef: ColDef = {};
  rowSelection = true;
  rowData: IDataEntity[] = [{
    name: 'Alicia Coutts',
    age: 24,
    country: 'Australia',
    year: 2012,
    date: new Date(2012, 07, 12),
    sport: 'Swimming',
    gold: 1,
    silver: 3,
  }, {
    name: 'Missy Franklin',
    age: 17,
    country: 'United States',
    year: 2012,
    date: new Date(2012, 07, 12),
    sport: 'Swimming',
    gold: 4,
    silver: 0,
  }];

  constructor(private columnFactory: GridColumnFactory) {
    this.defaultColDef = {
      flex: 1,
      minWidth: 100
    };
    this.rowSelection = "single";
  }

  onSelectionChanged() {
    var selectedRows = this.gridApi.getSelectedRows();
    document.querySelector("#selectedRows").innerHTML =
      selectedRows.length === 1 ? selectedRows[0].athlete : "";
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}
