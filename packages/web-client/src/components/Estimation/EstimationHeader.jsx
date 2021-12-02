import React from 'react';
import { RoomOutlined, ScheduleOutlined, PeopleOutlineOutlined } from '@mui/icons-material';

function EstimationHeader({ data, ...rest }) {
  
  const { originShort, destinationShort, numDays, numPeople } = data;

  return (
    <div>
      <p className='estimation-header' >
        <RoomOutlined fontSize='small' color='disabled' /> {originShort} ⟶ {destinationShort}.<br />
        <PeopleOutlineOutlined fontSize='small' color='disabled' /> {numPeople} {numPeople === 1 ? 'pessoa' : 'pessoas'}. <br />
        <ScheduleOutlined fontSize='small' color='disabled' /> {numDays} {numDays === 1 ? 'dia' : 'dias'}.<br />
      </p>
    </div>
  );
};

export default EstimationHeader;
