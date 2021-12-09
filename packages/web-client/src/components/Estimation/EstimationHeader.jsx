import React from 'react';
import { RoomOutlined, ScheduleOutlined, PeopleOutlineOutlined } from '@mui/icons-material';

function EstimationHeader({ data, ...rest }) {
  
  const { originShort, destinationShort, numDays, numPeople } = data;
  
  let hasInfo;
  !originShort || !destinationShort ? hasInfo = false : hasInfo = true;

  return (
    <div>
      <p className='estimation-header' >
        { hasInfo
        ?
          <div><RoomOutlined fontSize='small' color='disabled' /> {originShort} ⟶ {destinationShort}.<br /></div>
        :
          <div><RoomOutlined fontSize='small' color='disabled' /> Origem/Destino não informados.<br /></div>
        }
        <PeopleOutlineOutlined fontSize='small' color='disabled' /> {numPeople} {numPeople === 1 ? 'pessoa' : 'pessoas'}. <br />
        <ScheduleOutlined fontSize='small' color='disabled' /> {numDays} {numDays === 1 ? 'dia' : 'dias'}.<br />
      </p>
    </div>
  );
};

export default EstimationHeader;
