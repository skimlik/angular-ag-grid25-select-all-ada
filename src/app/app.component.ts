import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowSelection;
  private rowData: [];

  constructor() {
    this.columnDefs = [
      {
        field: "athlete",
        minWidth: 150
      },
      {
        field: "age",
        maxWidth: 90
      },
      {
        field: "country",
        minWidth: 150
      },
      {
        field: "year",
        maxWidth: 90
      },
      {
        field: "date",
        minWidth: 150
      },
      {
        field: "sport",
        minWidth: 150
      },
      { field: "gold" },
      { field: "silver" },
      { field: "bronze" },
      { field: "total" }
    ];
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

    this.http
      .get("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .subscribe(data => {
        this.rowData = data;
      });
  }
}
