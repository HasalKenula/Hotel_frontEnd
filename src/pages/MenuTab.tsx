import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Double from '../assets/double.jpg'

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>

        <div className='flex md:flex-row  item-centers bg-green-200  overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9  text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>


        </div>



        <div className='flex md:flex-row  item-centers bg-green-200  overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>


        </div>







        <div className='flex md:flex-row  item-centers bg-green-200  overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>


        </div>











        <div className='flex md:flex-row  item-centers bg-green-200  overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>


        </div>






        <div className='flex md:flex-row  item-centers bg-green-200  overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>


        </div>







      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>

        <div className='flex md:flex-row  item-centers bg-green-200  overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>


        </div>



        <div className='flex md:flex-row  item-centers bg-green-200  overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>


        </div>







        <div className='flex md:flex-row  item-centers bg-green-200  overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>


        </div>











        <div className='flex md:flex-row  item-centers bg-green-200  overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>


        </div>






        <div className='flex md:flex-row  item-centers bg-green-200  overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled 
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>


        </div>




      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>

        <div className='flex md:flex-row  item-centers bg-green-200  overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>


        </div>



        <div className='flex md:flex-row  item-centers bg-green-200  overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>


        </div>







        <div className='flex md:flex-row  item-centers bg-green-200  overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>


        </div>











        <div className='flex md:flex-row  item-centers bg-green-200  overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>


        </div>






        <div className='flex md:flex-row  item-centers bg-green-200  overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl bg-green-200   '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Double} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold text-blue-400'>
              $29
            </div>
          </div>


        </div>




      </TabPanel>
    </Box>
  );
}
