/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
const ParsedInfo = ({ showSearchData }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const flightOffer = data?.flightOffer;

  return (
    <section
      className={`bg-blue-500 h-full ${showSearchData ? "block" : "hidden"}`}
    >
      <div className=" w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1330px]  px-2 md:px-3 lg:px-4 xl:px-5 mx-auto">
        <div className="py-8">
          <TableContainer>
            <Table
              size="md"
              variant="striped"
              colorScheme="black"
              color={"white"}
            >
              <Thead className="bg-slate-100 text-white font-bold">
                <Tr>
                  <Th className="text-white">Flight</Th>
                  <Th className="text-white">Aircraft</Th>
                  <Th className="text-white">Class</Th>
                  <Th className="text-white">Fare</Th>
                  <Th className="text-white">Route</Th>
                  <Th className="text-white">Departure</Th>
                  <Th className="text-white">Arrival</Th>
                  <Th className="text-white">Duration</Th>
                  <Th className="text-white" isNumeric>
                    Price
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {" "}
                {flightOffer?.map((offerInfo, index) => (
                  <Tr key={index}>
                    <Td>
                      <p>
                        {offerInfo?.itineraries[0]?.segments[0]?.carrierCode}
                        {offerInfo?.itineraries[0]?.segments[0]?.aircraft}
                      </p>
                      <p>
                        {offerInfo?.itineraries[0]?.segments[1]?.carrierCode}
                        {offerInfo?.itineraries[0]?.segments[1]?.aircraft}
                      </p>

                      {offerInfo?.itineraries[0]?.segments[2] && (
                        <p>
                          {offerInfo?.itineraries[0]?.segments[2]?.carrierCode}
                          {offerInfo?.itineraries[0]?.segments[2]?.aircraft}
                        </p>
                      )}
                    </Td>
                    <Td>
                      <p>
                        {offerInfo?.itineraries[0]?.segments[0]?.flightNumber}
                      </p>
                      <p>
                        {offerInfo?.itineraries[0]?.segments[1]?.flightNumber}
                      </p>

                      {offerInfo?.itineraries[0]?.segments[2] && (
                        <p>
                          {offerInfo?.itineraries[0]?.segments[2]?.flightNumber}
                        </p>
                      )}
                    </Td>
                    <Td>
                      {offerInfo?.class?.map((c) => (
                        <p key={c} className="">
                          {c}
                        </p>
                      ))}
                    </Td>
                    <Td>
                      <p>{offerInfo?.fareBasis[0][0]}</p>
                      <p>{offerInfo?.fareBasis[0][1]}</p>
                      {offerInfo?.fareBasis[0][2] && (
                        <p>{offerInfo?.fareBasis[0][2]}</p>
                      )}
                    </Td>
                    <Td>
                      <p>
                        {
                          offerInfo?.itineraries[0]?.segments[0]?.departure
                            ?.iataCode
                        }{" "}
                        -{" "}
                        {
                          offerInfo?.itineraries[0]?.segments[0]?.arrival
                            ?.iataCode
                        }
                      </p>
                      <p>
                        {
                          offerInfo?.itineraries[0]?.segments[1]?.departure
                            ?.iataCode
                        }{" "}
                        -{" "}
                        {
                          offerInfo?.itineraries[0]?.segments[1]?.arrival
                            ?.iataCode
                        }
                      </p>
                      {offerInfo?.itineraries[0]?.segments[2] && (
                        <p>
                          {
                            offerInfo?.itineraries[0]?.segments[2]?.departure
                              ?.iataCode
                          }{" "}
                          -{" "}
                          {
                            offerInfo?.itineraries[0]?.segments[2]?.arrival
                              ?.iataCode
                          }
                        </p>
                      )}
                    </Td>
                    <Td>
                      <p>
                        {offerInfo?.itineraries[0]?.segments[0]?.departure?.at}{" "}
                        - {offerInfo?.itineraries[0]?.segments[0]?.arrival?.at}
                      </p>
                      <p>
                        {offerInfo?.itineraries[0]?.segments[1]?.departure?.at}{" "}
                        - {offerInfo?.itineraries[0]?.segments[1]?.arrival?.at}
                      </p>
                      {offerInfo?.itineraries[0]?.segments[2] && (
                        <p>
                          {
                            offerInfo?.itineraries[0]?.segments[2]?.departure
                              ?.at
                          }{" "}
                          -{" "}
                          {offerInfo?.itineraries[0]?.segments[2]?.arrival?.at}
                        </p>
                      )}
                    </Td>
                    <Td>{"-"}</Td>
                    <Td>{offerInfo?.itineraries[0]?.duration}</Td>
                    <Td isNumeric>
                      <p className="mb-1">{offerInfo?.price}</p>
                      <Button colorScheme="white" variant="outline" size={"sm"}>
                        Select
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </section>
  );
};

export default ParsedInfo;
