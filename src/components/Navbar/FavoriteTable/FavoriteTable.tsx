import { Person } from "@/models";
import { addFavorites, removeFavorite } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const FavoriteTable: React.FC = () => {
  const dispatch = useDispatch();

  const stateFavorite = useSelector((store: AppStore) => store.favorites);

  const findPerson = (person: Person) =>
    !!stateFavorite.find((p) => p.id === person.id);

  const handleChange = (person: Person) => {
    dispatch(removeFavorite(person));
  };

  const colums = [
    {
      field: "actions",
      type: "actions",
      headerName: "",
      sortable: false,
      flex: 1,
      maxWidth: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              checked={findPerson(params.row)}
              onChange={() => handleChange(params.row)}
            />
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Categories",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "😁",
      flex: 1,
      maxWidth: 70,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return (
    <DataGrid
      rows={stateFavorite}
      columns={colums}
      disableColumnSelector
      disableRowSelectionOnClick
      autoHeight
      initialState={{
        pagination: { paginationModel: { pageSize: 5 } },
      }}
      getRowId={(row: any) => row.id}
    />
  );
};

export default FavoriteTable;
