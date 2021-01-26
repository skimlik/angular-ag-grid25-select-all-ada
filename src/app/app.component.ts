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
  rowSelection = "single";
  rowData: IDataEntity[] = [
    {
      name: "Alicia Coutts",
      age: 24,
      country: "Australia",
      year: 2012,
      date: "2017-08-12",
      sport: "Swimming",
      gold: 1,
      silver: 3
    },
    {
      name: "Missy Franklin",
      age: 17,
      country: "United States",
      year: 2012,
      date: "2017-08-12",
      sport: "Swimming",
      gold: 4,
      silver: 0
    },
    {
      name: "Michael Phelps",
      age: 23,
      country: "United States",
      year: 2008,
      date: "2008-08-24",
      sport: "Swimming",
      gold: 8,
      silver: 0
    },
    {
      name: "Ian Thorpe",
      age: 17,
      country: "Australia",
      year: 2008,
      date: "2000-10-01",
      sport: "Swimming",
      gold: 3,
      silver: 2
    },
    {
      name: "Cindy Klassen",
      age: 26,
      country: "Canada",
      year: 2008,
      date: "2006-02-26",
      sport: "Speed Skating",
      gold: 1,
      silver: 2
    }
  ];

  constructor(private columnFactory: GridColumnFactory) {
    this.defaultColDef = {
      flex: 1,
      minWidth: 100
    };
  }

  onSelectionChanged() {
    var selectedRows = this.gridApi.getSelectedRows();
    document.querySelector("#selectedRows").innerHTML =
      selectedRows.length === 1 ? selectedRows[0].name : "";
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}
