import { useEffect, useState } from "react";
import IncidentOverview from "../components/IncidentOverview";
import TopBar from "../components/TopBar";
import Filter from "../components/Filter";
import axios from "axios";

const Incidents = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState([]);
  const [filterType, setFilterType] = useState(undefined);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const { data } = await axios.get(`/api/v1/incidents/overview`);
      console.log(data.rows);
      setData(data.rows);
      setIsLoading(false);
    };
    getData();
  }, [update]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/api/v1/utils/types");
      setType(data.rows);
    };
    getData();
  }, []);

  const handleFilterChanges = (filterName, value) => {
    setFilterType((prevFilters) => ({
      ...prevFilters,
      [filterName]: value.value,
    }));
    console.log(filterType);
  };
  const options = [
    { value: "1", label: "Default" },
    { value: "2", label: "Banking" },
    { value: "3", label: "App" },
    { value: "4", label: "Authorization" },
  ];

  return (
    <div className='wrapper'>
      <TopBar name='Incidents' />
      <div className='content mx-4'>
        <div className='utilities flex p-2 '>
          <Filter
            options={options}
            name='selecionando'
            labelText='texto'
            isMult={false}
            handleChange={handleFilterChanges}
          />
          <p>customize view</p>
        </div>
        <div className='incidents border border-slate-200 shadow-md rounded-md'>
          {isLoading ? (
            <h1>Is Loading</h1>
          ) : (
            data
              .filter(
                (incident) =>
                  filterType?.type === undefined ||
                  incident.type == filterType?.type
              )
              .map((incident) => {
                return <IncidentOverview data={incident} key={incident.id} />;
              })
          )}
        </div>
      </div>
    </div>
  );
};

export default Incidents;
