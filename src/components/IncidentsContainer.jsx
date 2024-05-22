import IncidentCard from "./IncidentCard";
import { useHomeContext } from "../pages/Home";

const IncidentsContainer = () => {
  const { data } = useHomeContext();
  const incidents = data.incidents;

  return (
    <div className='incidents grid grid-cols-3 gap-4 auto-rows-fr items-strech'>
      {incidents.map((incident) => {
        return <IncidentCard key={incident.id} {...incident} />;
      })}
    </div>
  );
};

export default IncidentsContainer;
