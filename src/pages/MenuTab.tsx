import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Main1 from '../assets/dining_main/main1.jpg'
import Main2 from '../assets/dining_main/main2.jpg'
import Main3 from '../assets/dining_main/main3.jpg'
import Main4 from '../assets/dining_main/main4.jpg'
import Main5 from '../assets/dining_main/main5.jpg'
import Main6 from '../assets/dining_main/main6.jpg'
import Main7 from '../assets/dining_main/main7.jpg'
import Main8 from '../assets/dining_main/main8.jpg'
import Main9 from '../assets/dining_main/main9.jpg'
import Main10 from '../assets/dining_main/main10.jpg'
import Dessert1 from '../assets/dining_dessert/dessert1.jpg'
import Dessert2 from '../assets/dining_dessert/dessert2.jpg'
import Dessert3 from '../assets/dining_dessert/dessert3.jpg'
import Dessert4 from '../assets/dining_dessert/dessert4.jpg'
import Dessert5 from '../assets/dining_dessert/dessert5.jpg'
import Dessert6 from '../assets/dining_dessert/dessert6.jpg'
import Dessert7 from '../assets/dining_dessert/dessert7.jpg'
import Dessert8 from '../assets/dining_dessert/dessert8.jpg'
import Dessert9 from '../assets/dining_dessert/dessert9.jpg'
import Dessert12 from '../assets/dining_dessert/dessert12.jpg'
import Drinks1 from '../assets/dining_drinks/drinks1.jpg'
import Drinks2 from '../assets/dining_drinks/drinks2.jpg'
import Drinks3 from '../assets/dining_drinks/drinks3.jpg'
import Drinks4 from '../assets/dining_drinks/drinks4.jpg'
import Drinks5 from '../assets/dining_drinks/drinks5.jpg'
import Drinks6 from '../assets/dining_drinks/drinks6.jpg'
import Drinks7 from '../assets/dining_drinks/drinks7.jpg'
import Drinks8 from '../assets/dining_drinks/drinks8.jpg'
import Drinks9 from '../assets/dining_drinks/drinks9.jpg'
import Drinks10 from '../assets/dining_drinks/drinks10.jpg'

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
          <Tab label="Main" {...a11yProps(0)} />
          <Tab label="Dessert" {...a11yProps(1)} />
          <Tab label="Drinks" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>

        <div className='flex md:flex-row  item-centers  overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]  p-2 m-2 border shadow-2xl hover:text-white hover:bg-blue-400 '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Main1} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items'>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Grilled Beef with potatoes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9  text-3xl  text-center font-bold '>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]  p-2 m-2 border shadow-2xl hover:text-white hover:bg-blue-400  '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Main2} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Savory Watercress Chinese Pancakes
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>


        </div>



        <div className='flex md:flex-row  item-centers overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]  p-2 m-2 border shadow-2xl hover:text-white hover:bg-blue-400 '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Main3} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Fruit Vanilla Ice Cream
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px] p-2 m-2 border shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Main4} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Soup With Vegetables And Meat
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>


        </div>







        <div className='flex md:flex-row  item-centers overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px] p-2 m-2 border shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Main5} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Asian Hoisin Pork
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]  p-2 m-2 border shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Main6} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Udon Noodles With Vegetables
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>


        </div>











        <div className='flex md:flex-row  item-centers overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]  p-2 m-2 border shadow-2xl hover:text-white hover:bg-blue-400 '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Main7} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Spicy Fried Rice & Bacon
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold '>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px] p-2 m-2 border shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Main8} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Baked Lobster With A Garnish
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>


        </div>






        <div className='flex md:flex-row  item-centers overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]  p-2 m-2 border shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Main9} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Mango Chili Chutney
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold '>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px] p-2 m-2 border shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Main10} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Octopus with Vegetables
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold '>
              $29
            </div>
          </div>


        </div>







      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>

        <div className='flex md:flex-row  item-centers overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Dessert1} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Tiramisu
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400 '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Dessert2} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Chocolate Cream
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold '>
              $29
            </div>
          </div>


        </div>



        <div className='flex md:flex-row  item-centers overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400 '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Dessert3} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Pizza Pie
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold '>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Dessert4} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Sicilian Ricotta
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>


        </div>







        <div className='flex md:flex-row  item-centers overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400 '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Dessert5} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Mango FLoat
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Dessert6} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Tiramisu
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>


        </div>











        <div className='flex md:flex-row  item-centers overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Dessert7} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Chocolate Cream
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400  '>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Dessert8} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Pizza Pie
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>


        </div>






        <div className='flex md:flex-row  item-centers overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Dessert9} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Sicilian Ricotta
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold '>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Dessert12} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Mango FLoat
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold '>
              $29
            </div>
          </div>


        </div>




      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>

        <div className='flex md:flex-row  item-centers overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Drinks1} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Lemon Juice
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Drinks2} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Beer
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>


        </div>



        <div className='flex md:flex-row  item-centers overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Drinks3} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Guava Juice
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Drinks4} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Mango Juice
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>


        </div>







        <div className='flex md:flex-row  item-centers overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Drinks5} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Sprite
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Drinks6} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Apple Juice
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold '>
              $29
            </div>
          </div>


        </div>











        <div className='flex md:flex-row  item-centers overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Drinks7} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Cola
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Drinks8} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Strawberry Juice
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold '>
              $29
            </div>
          </div>


        </div>






        <div className='flex md:flex-row  item-centers overflow-hidden flex-col lg:pl-20 lg:pr-20'>
          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Drinks9} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Wine
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>

          <div className='md:w-1/2 flex min:h-[96px]   p-2 m-2 border  shadow-2xl hover:text-white hover:bg-blue-400'>
            <div className=' w-4/12 lg:pl-14 '>
              <img src={Drinks10} className="w-20  h-20 object-cover rounded-full " alt="Double room" />
            </div>
            <div className='w-5/12 flex flex-col items-center justify-center align-items '>
              <div className='lg:mb-4 md:mb-1 font-bold playfair-display-uniquifier'>
                Orange Juice
              </div>
              <div className=' text-sm  text-slate-600'>
                Meat, Potatoes, Rice, Tomatoe
              </div>
            </div>
            <div className='w-3/12 m-auto md:pl-9 text-3xl  text-center font-bold'>
              $29
            </div>
          </div>


        </div>




      </TabPanel>
    </Box>
  );
}
