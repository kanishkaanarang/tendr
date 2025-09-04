import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from 'react-router-dom';

const actions = [
  { icon: <FileCopyIcon />, name: 'TimeLine',path:'/prebuilt-timeline' },
  { icon: <SaveIcon />, name: 'Custom', path:'/custom-timeline' },
  { icon: <PrintIcon />, name: 'CheckBox',path:'/checkbox' },
];

export default function BasicSpeedDial() {
    const Navigate = useNavigate();
  return (
      <SpeedDial
        ariaLabel="SpeedDial basic"
        sx={{ position: 'fixed', bottom: 50, right: 15 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            slotProps={{
              tooltip: {
                title: action.name,
              },
            }}
            onClick={()=> Navigate(action.path)}
          />
        ))}
      </SpeedDial>
  );
}