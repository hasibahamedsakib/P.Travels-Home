import { Tabs, TabList, Tab, TabPanels } from "@chakra-ui/react";

import { LiaHotelSolid } from "react-icons/lia";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { TbReplace } from "react-icons/tb";

import FlightTabPanel from "../components/FlightTabPanel";
import Button from "../components/Button";

const Home = () => {
  return (
    <div
      className={`bg-[url('./assets/home-bg.png')] bg-no-repeat bg-center bg-cover w-full h-[800px] lg:min-h-screen lg:max-h-full grid items-center justify-center `}
    >
      <div>
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl xl:text-4xl  2xl:text-6xl font-semibold text-white">
            Explore the world together
          </h1>
          <p className="text-sm sm:text-md xl:text-lg mt-2 text-slate-100 font-semibold">
            Find awesome flights, hotel, tour, car and packages
          </p>
        </div>
        <div className="w-full md:w-[800px] lg:w-[1024px] rounded-lg mx-auto bg-[#29a7e65e] relative p-5">
          <Tabs variant="unstyled" className="text-black font-bold">
            <TabList mb="1em" className="text-center">
              <Tab _selected={{ color: "white", bg: "pink.500" }}>
                <MdOutlineFlightTakeoff className="mr-1" />
                Flight
              </Tab>
              <Tab _selected={{ color: "white", bg: "red.400" }}>
                <LiaHotelSolid className="mr-1" />
                Hotels
              </Tab>
              <Tab _selected={{ color: "white", bg: "orange.400" }}>
                <TbReplace className="mr-1" />
                Tours
              </Tab>
            </TabList>

            <TabPanels className="w-full">
              <FlightTabPanel />
              <FlightTabPanel />
              <FlightTabPanel />
            </TabPanels>
          </Tabs>

          {/* search button */}
          <div className="absolute -bottom-9 left-[30%] md:left-[40%] 3xl:left-[45%] ">
            <Button>Search Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
