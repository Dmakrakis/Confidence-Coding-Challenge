import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Data } from "../models/model";

export default function useLocationData(
  startPagingIndex: number,
  maxElementsPerPage: number
) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [locationData, setLocationData] = useState<Data[]>([]);
  const [numOfLocations, setNumOfLocations] = useState<number>(0);

  const hasMoreElements: boolean = startPagingIndex < numOfLocations;

  useEffect(() => {
    if (startPagingIndex <= numOfLocations) {
      setIsFetching(true);
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startPagingIndex]);

  const fetchData = () => {
    axios
      .get("/locations", {
        params: {
          start: startPagingIndex,
          limit: maxElementsPerPage,
        },
      })
      .then((response: AxiosResponse) => {
        setNumOfLocations(response.data.numberOfLocations);
        const destructuredData: Data[] = response.data.locations.map(
          ({ id, address, locationDetails, locationType }: Data) => {
            return { id, address, locationDetails, locationType };
          }
        );
        setLocationData([...locationData, ...destructuredData]);
        setIsLoading(false);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    isLoading,
    locationData,
    isFetching,
    hasMoreElements,
  };
}
