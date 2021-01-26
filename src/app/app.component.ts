import { Component } from "@angular/core";
import { ColDef } from "ag-grid-community";
import { GridColumnFactory } from "./grid-columns.factory";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private gridApi;
  private gridColumnApi;

  private columnDefs: ColDef[] = this.columnFactory.getColumns();
  private defaultColDef;
  private rowSelection;
  private rowData: [];

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
