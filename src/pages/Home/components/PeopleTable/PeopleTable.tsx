import { Person } from "@/models";
import { addFavorites } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// export type PeopleTableProps = {};

const PeopleTable: React.FC = () => {
  const [selectPeople, setSelectPeople] = useState<Person[]>([]);

  const dispatch = useDispatch();

  const statePeople = useSelector((store: AppStore) => store.people);

  const findPerson = (person: Person) =>
    !!selectPeople.find((p) => p.id === person.id);

  const filterPerson = (person: Person) =>
    selectPeople.filter((p) => p.id !== person.id);

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectPeople, person];
    dispatch(addFavorites(filteredPeople));
    setSelectPeople(filteredPeople);
  };

  const colums = [
    {
      field: "actions",
      type: "actions",
      headerName: "",
      sortable: false,
      flex: 1,
      Width: 50,
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
  ];
  return (
    <DataGrid
      rows={statePeople}
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

export default PeopleTable;
