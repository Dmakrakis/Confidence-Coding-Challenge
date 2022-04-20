import { useCallback, useRef, useState } from "react";
import { LoadingComponent } from "./LoadingComponent";
import LocationCard from "./LocationCard";
import { Data } from "../models/model";
import useLocationData from "./useLocationData";

const LocationsList = () => {
  const [startPagingIndex, setStartPagingIndex] = useState<number>(0);
  const maxElementsPerPage: number = 3;
  const { isLoading, locationData, isFetching, hasMoreElements } =
    useLocationData(startPagingIndex, maxElementsPerPage);

  const observer = useRef<IntersectionObserver>();

  const lastBookElementRef = useCallback(
    (node: any) => {
      const options = {
        root: null,
        rootMargin: "20px",
        threshold: 1,
      };
      if (isFetching) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMoreElements) {
          setStartPagingIndex(startPagingIndex + maxElementsPerPage);
        }
      }, options);

      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isFetching]
  );

  return (
    <div className="container max-w-screen-lg" aria-label="Locations-container">
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <div className="container flex flex-col" id="locations">
            {locationData &&
              locationData.map((x: Data, i) => {
                return locationData.length === i + 1 ? (
                  <div key={x.id} ref={lastBookElementRef}>
                    <LocationCard dataPoint={x} />
                  </div>
                ) : (
                  <LocationCard key={x.id} dataPoint={x} />
                );
              })}
            {isFetching && (
              <p className="text-center text-[#016CE0]">
                Fetching more locations...
              </p>
            )}
            {!hasMoreElements && (
              <p className="text-center text-[#016CE0]">
                All locations have been fetched
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default LocationsList;
