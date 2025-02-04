import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";


const containerStyle = {
  width: "100%",
  height: "400px", 
};

//  (I not Replace with  hotel's latitude and longitude correctly)
const center = {
  lat: 40.73061,
  lng: -73.935242, 
};

const ContactMap = () => {
  return (
    <div className="flex justify-center items-center flex-col py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Location</h2>{/*I not inclde Google maps API Key here*/}
      <div className="rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"> 
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          >
            
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default ContactMap;
