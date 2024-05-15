import { useState } from "react";

import { TabPanel, RadioGroup, Stack, Radio } from "@chakra-ui/react";
import { DateRange } from "react-date-range";

const FlightTabPanel = () => {
  const [selectedFrom, setSelectedFrom] = useState({
    airport: "DAC,Hazrat Shahjalal International Airport",
    destination: "Dhaka",
  });
  const [selectedTo, setSelectedTo] = useState({
    destination: "Rajshahi",
    airport: "RIA, Rajshahi International Airport",
  });
  const [selectedDate, setSelecteDate] = useState({
    startDate: "Thu may 16 2024 00:00:00",
    endDate: "Thu Jun 20 2024 00:00:00",
  });

  //=>> Adult and children and class part
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [sitClass, setSitClass] = useState("Select Class");

  // open and close toggler button
  const [openFrom, setFromOpen] = useState(false);
  const [openTo, setToOpen] = useState(false);
  const [openDate, setDateOpen] = useState(false);
  const [openTraveler, setOpenTraveler] = useState(false);

  const fromDataHandler = (data) => {
    setSelectedFrom(data);
    setFromOpen(false);
  };
  const toDataHandler = (data) => {
    setSelectedTo(data);
    setToOpen(false);
  };
  const handleTraveler = (data) => {
    setSitClass(data);

    setOpenTraveler(false);
  };

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const dataHandler = (data) => {
    const { startDate, endDate } = data[0];
    if (startDate && endDate && endDate > startDate) {
      setSelecteDate(data[0]);
      setDateOpen(false);
    }
  };

  return (
    <TabPanel className="w-full mx-auto border-2 rounded-lg border-white">
      <div className="grid grid-cols-4 gap-4 p-2 rounded-md">
        <div className="col-span-4 md:col-span-2 xl:col-span-1">
          <div className="border-2 rounded-lg w-full border-white">
            <div className="text-white  px-3 py-2 w-full block transition-all duration-300 group relative">
              <div className="  ">
                <p className="text-base font-normal mb-1 uppercase">From</p>
                <div
                  className="cursor-pointer"
                  onClick={() => setFromOpen(!openFrom)}
                >
                  <h3 className="text-xl font-medium">
                    {selectedFrom ? selectedFrom.destination : "Dhaka"}
                  </h3>
                  <p className="text-sm font-light">
                    {selectedFrom
                      ? selectedFrom.airport.slice(0, 30)
                      : `DAC,Hazrat Shahjalal International Airport`}
                  </p>
                </div>
              </div>
              <div className="absolute pt-4 lg:pt-6 z-20 -left-2">
                <ul
                  className={`shadow-2xl rounded-lg bg-[#457392] text-white w-60  transition-all duration-500 text-sm py-4 ${
                    openFrom ? "block" : "hidden"
                  }`}
                >
                  <div className="px-5 group ">
                    <li
                      className="hover:ml-3 duration-300 cursor-pointer "
                      onClick={() =>
                        fromDataHandler({
                          destination: "Coxes Bazar",
                          airport: `CTA,CoxesBazar Tourist Airport`,
                        })
                      }
                    >
                      <div className="py-2 block">Coxes Bazar</div>
                    </li>
                  </div>

                  <div className="px-5 group ">
                    <li
                      className="hover:ml-3 duration-300 cursor-pointer "
                      onClick={() =>
                        fromDataHandler({
                          destination: "Syleth",
                          airport: `SOB,Syleth Osmani Airport`,
                        })
                      }
                    >
                      <div className="py-2 block">Syleth</div>
                    </li>
                  </div>

                  <div className="px-5 group ">
                    <li
                      className="hover:ml-3 duration-300 cursor-pointer "
                      onClick={() =>
                        fromDataHandler({
                          destination: "Rangpur",
                          airport: `RTA,Rangpur  Airport`,
                        })
                      }
                    >
                      <div className="py-2 block">Rangpur Airport</div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 xl:col-span-1">
          <div className="border-2 rounded-lg w-full border-white">
            <div className="text-white  px-3 py-2 w-full block transition-all duration-300 group relative">
              <div className="  ">
                <p className="text-base font-normal mb-1 uppercase">To</p>
                <div
                  className="cursor-pointer"
                  onClick={() => setToOpen(!openTo)}
                >
                  <h3 className="text-xl font-medium">
                    {selectedTo ? selectedTo.destination : "Rajshahi"}
                  </h3>
                  <p className="text-sm font-light">
                    {selectedTo
                      ? selectedTo.airport.slice(0, 30)
                      : `RIA,Rajshahi International Airport`}
                  </p>
                </div>
              </div>
              <div className="absolute pt-4 lg:pt-6 z-20 -left-2">
                <ul
                  className={`shadow-2xl rounded-lg bg-[#457392] text-white w-60  transition-all duration-500 text-sm py-4 ${
                    openTo ? "block" : "hidden"
                  }`}
                >
                  <div className="px-5 group ">
                    <li
                      className="hover:ml-3 duration-300 cursor-pointer "
                      onClick={() =>
                        toDataHandler({
                          destination: "Coxes Bazar",
                          airport: `CTA,CoxesBazar Tourist Airport`,
                        })
                      }
                    >
                      <div className="py-2 block">Coxes Bazar</div>
                    </li>
                  </div>

                  <div className="px-5 group ">
                    <li
                      className="hover:ml-3 duration-300 cursor-pointer "
                      onClick={() =>
                        toDataHandler({
                          destination: "Syleth",
                          airport: `SOB,Syleth Osmani Airport`,
                        })
                      }
                    >
                      <div className="py-2 block">Syleth</div>
                    </li>
                  </div>

                  <div className="px-5 group ">
                    <li
                      className="hover:ml-3 duration-300 cursor-pointer "
                      onClick={() =>
                        toDataHandler({
                          destination: "Dhaka",
                          airport: `DIA,Dhaka International Airport`,
                        })
                      }
                    >
                      <div className="py-2 block">Dhaka Airport</div>
                    </li>
                  </div>
                  <div className="px-5 group ">
                    <li
                      className="hover:ml-3 duration-300 cursor-pointer "
                      onClick={() =>
                        toDataHandler({
                          destination: "Rangpur",
                          airport: `RTA,Rangpur  Airport`,
                        })
                      }
                    >
                      <div className="py-2 block">Rangpur Airport</div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 xl:col-span-1">
          <div className="border-2 rounded-lg w-full border-white">
            <div className="text-white  px-3 py-2 w-full block transition-all duration-300 group relative">
              <div className="  ">
                <p className="text-base font-normal mb-1 uppercase">
                  Journey Date
                </p>
                <div
                  className="cursor-pointer"
                  onClick={() => setDateOpen(!openDate)}
                >
                  <h3 className="text-lg font-medium">
                    Start:
                    <span className="font-normal text-base">
                      {selectedDate.startDate
                        ? `${selectedDate.startDate}`.slice(3, 15)
                        : "Thu Jun 20 2024".slice(3, 15)}
                    </span>
                  </h3>
                  <h3 className="text-lg font-medium">
                    End:
                    <span className="font-normal text-base">
                      {" "}
                      {selectedDate.endDate
                        ? `${selectedDate.endDate}`.slice(3, 15)
                        : "Thu Jun 20 2024".slice(3, 15)}{" "}
                    </span>
                  </h3>
                </div>
              </div>
              <div className="absolute pt-4 lg:pt-6 z-20 -left-2">
                <ul
                  className={`shadow-2xl rounded-lg bg-[#457392] text-white w-fit  transition-all duration-500 text-sm py-4 ${
                    openDate ? "block" : "hidden"
                  }`}
                >
                  <div
                    className="px-5 group"
                    onClick={() => dataHandler(state)}
                  >
                    <li className="hover:ml-3 duration-300 cursor-pointer ">
                      <div className="py-2 block">
                        <DateRange
                          editableDateInputs={true}
                          onChange={(item) => setState([item.selection])}
                          moveRangeOnFirstSelection={false}
                          ranges={state}
                        />
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-2 xl:col-span-1">
          <div className="border-2 rounded-lg w-full border-white">
            <div className="text-white  px-3 py-2 w-full block transition-all duration-300 group relative">
              <div className="  ">
                <p className="text-base font-normal mb-1 uppercase">
                  TRAVELER, CLASS
                </p>
                <div
                  className="cursor-pointer"
                  onClick={() => setOpenTraveler(!openTraveler)}
                >
                  <h3 className="text-xl font-medium">
                    {`${adult + children} Travelers`}
                  </h3>
                  <p className="text-sm font-light">
                    {sitClass ? sitClass : "Business"}
                  </p>
                </div>
              </div>
              <div className="absolute pt-4 lg:pt-6 z-20 -left-2">
                <ul
                  className={`shadow-2xl rounded-lg bg-[#457392] text-white w-60  transition-all duration-500 text-sm py-4 ${
                    openTraveler ? "block" : "hidden"
                  }`}
                >
                  <div className="px-5 group space-y-2">
                    <li className="flex items-center justify-between">
                      <div className="">{adult} Adult</div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 border-2 rounded-md text-white"
                          onClick={() => setAdult(adult + 1)}
                        >
                          +
                        </button>
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 border-2 rounded-md text-white"
                          onClick={() => setAdult(adult - 1)}
                          disabled={adult <= 1}
                        >
                          -
                        </button>
                      </div>
                    </li>
                    <li className="flex items-center justify-between ">
                      <div className="">{children} Children</div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 border-2 rounded-md text-white"
                          onClick={() => setChildren(children + 1)}
                        >
                          +
                        </button>
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 border-2 rounded-md text-white"
                          onClick={() => setChildren(children - 1)}
                          disabled={children <= 1}
                        >
                          -
                        </button>
                      </div>
                    </li>
                    <li className="flex items-center justify-between ">
                      <RadioGroup defaultValue="2">
                        <Stack
                          spacing={5}
                          direction="row"
                          onChange={(e) => handleTraveler(e.target.value)}
                        >
                          <Radio colorScheme="red" value="Business">
                            Business
                          </Radio>
                          <Radio colorScheme="green" value="Economy">
                            Economy
                          </Radio>
                        </Stack>
                      </RadioGroup>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabPanel>
  );
};

export default FlightTabPanel;
