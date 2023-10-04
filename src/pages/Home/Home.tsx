import { People } from "@/data/people";
import { addPeople } from "@/redux/states";
import React, { useEffect } from "react";
import { PeopleTable } from "./components";
import { useDispatch } from "react-redux";

// export type HomeProps = {};

const Home: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPeople(People));
  }, [dispatch]);

  return <PeopleTable />;
};

export default Home;
