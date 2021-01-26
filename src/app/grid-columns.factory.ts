import { Injectable } from "@angular/core";
import { ColDef } from "ag-grid-community";

@Injectable({ providedIn: "root" })
export class GridColumnFactory {
  private columns: ColDef[] = [
    {
      field: "athlete",
      minWidth: 150,
      headerCheckboxSelection: true,
      checkboxSelection: true,
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

  getColumns(): ColDef[] {
    return this.columns;
  }
}
