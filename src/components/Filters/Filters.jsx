import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./filters.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };



export default function Filters({filters, selectedFilterIndex, setSelectedFilterIndex}) {
  
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

  return (
    <div>
        <Tabs value={selectedFilterIndex} 
        onChange={handleChange} 
        TabIndicatorProps={{style:{backgroundColor: "#32c94b"}} }
        aria-label="basic tabs example">
            {filters.map((ele, ind)=>(
                <Tab className="tab" label={ele.label} {...a11yProps(0)} />

            ))}
        </Tabs>
        {filters.map((ele, ind)=>(
            <TabPanel value={ele.label} index={ind}/>
        ))}
    </div>
  );
}