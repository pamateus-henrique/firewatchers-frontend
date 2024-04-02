import { Link } from "react-router-dom";

import IncidentLabels from "./IncidentLabels";

const IncidentCard = ({
  summary,
  title,
  reporter,
  id,
  severity,
  status,
  type,
  impact_started_at,
}) => {
  return (
    <Link to={`incidents/${id}`}>
      <div className='incident-card bg-white border-slate-200 border shadow-sm rounded-md mt-2 overflow-hidden hover:border-slate-500 hover:shadow-md transition'>
        <div className='title bg-slate-100 p-3.5 '>
          <h1 className='text-sm text-slate-900 runcate'>{title}</h1>
        </div>
        <IncidentLabels
          severity={severity}
          status={status}
          type={type}
          duration={impact_started_at}
        />
        <div className='description p-2 h-36 overflow-hidden'>
          <p className='text-sm text-slate-500 text-justify line-clamp-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab soluta
            molestias repudiandae error molestiae dolorum atque eius expedita
            incidunt at deleniti illo rerum architecto itaque quod doloremque
            officia, nostrum necessitatibus velit tempora quas voluptas?
            Reiciendis odio ipsum ipsam at nesciunt ex expedita architecto sint
            incidunt perferendis nihil molestias accusamus rerum eaque nobis,
            dicta, esse et, mollitia blanditiis unde? Quae cumque voluptate
            maiores eos ullam obcaecati ipsa labore sint eum reiciendis. Natus,
            aperiam in impedit sunt fugiat reprehenderit sed consequuntur
            numquam velit eligendi a voluptatem harum itaque voluptate, eum
            nihil pariatur accusamus odit ipsum? Quos, veritatis laboriosam
            quaerat officiis dolore architecto?
          </p>
        </div>
        <div className='footer p-2 flex justify-between text-slate-500 text-sm'>
          <p>{reporter}</p>
          <p>subscribe</p>
        </div>
      </div>
    </Link>
  );
};

export default IncidentCard;
