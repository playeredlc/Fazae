import React from 'react';
import { RoomOutlined, ScheduleOutlined, PeopleOutlineOutlined } from '@material-ui/icons'

function EstimationHeader() {

  const originShort = 'Santana do Livramento';
  const destinationShort = 'Florianópolis'
  const numDays = 7;
  const numPeople = 6;

  return (
    <div>
      <p>
        <RoomOutlined fontSize='small' color='disabled' /> {originShort} ⟶ {destinationShort}.<br />
        <PeopleOutlineOutlined fontSize='small' color='disabled' /> {numPeople} {numPeople === 1 ? 'pessoa' : 'pessoas'}. <br />
        <ScheduleOutlined fontSize='small' color='disabled' /> {numDays} {numDays === 1 ? 'dia' : 'dias'}.<br />
      </p>
    </div>
  );
};

export default EstimationHeader;
