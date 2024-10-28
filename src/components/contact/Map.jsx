import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Container from "../shared/Container/Container";

const Map = () => {
  const position = [41.366852, -71.594852];

  return (
    <section className="max-w-[1920px] mx-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 justify-center items-center">
          {/* Text Container */}
          <div className="md:col-span-4 px-5 md:px-8 xl:px-10 py-4 lg:py-6 w-full md:w-[370px] lg:w-[430px] xl:w-[490px] mb-[30px] md:mb-0 z-50 bg-[#FFFFFF] dark:bg-[#1C2329] lg:h-[330px] xl:h-[350px] rounded-2xl space-y-3 xl:space-y-5 drop-shadow-xl">
            <h1>Get in Touch</h1>
            <p>
              AI encompasses various subfields, including machine learning,
              natural language processing
            </p>
            <div>
              <ul className="my-4 space-y-2 xl:space-y-5">
                <li className="flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-homeOnePrimary"
                  />
                  <p className="text-[#7F6666] dark:text-[#FFFFFF]">
                    South Kingstown, RI 02879 USA
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-homeOnePrimary"
                  />
                  <p className="text-[#7F6666] dark:text-[#FFFFFF]">
                    example@gmail.com
                  </p>
                </li>
                <li className="flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-homeOnePrimary"
                  />
                  <p className=" text-[#7F6666] dark:text-[#FFFFFF]">
                    098254974168
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* Leaflet Container */}
          <div className="md:col-span-8 w-full z-0">
            <MapContainer
              className="max-w-[950px] h-[300px] lg:h-[500px]"
              center={position}
              zoom={15}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  Visit us at 120 Mirpur, Dhaka, Bangladesh. <br /> We look
                  forward to connecting with you!
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Map;
