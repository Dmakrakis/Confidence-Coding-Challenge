import React from "react";
import { Data } from "../models/model";
import { MapIcon, BookOpenIcon } from "@heroicons/react/outline";
const LocationCard: React.FC<{
  dataPoint: Data;
}> = ({ dataPoint }) => {
  return (
    <div
      aria-label="Location Point"
      className="flex flex-row w-6/6 h-[30vh] container p-10 drop-shadow-lg bg-gray-300 mb-2 "
    >
      <div className="w-1/2 border-r-2  ">
        <BookOpenIcon className="pb-1 text-[#016CE0] w-10 h-10" />
        <p className="font-bold">Location Details </p>
        {dataPoint.locationDetails}
        <p className="pt-2 font-bold">Location Type</p>
        {dataPoint.locationType}
      </div>
      <div className="w-1/2 pl-6">
        <MapIcon className="pb-1 text-[#016CE0] w-10 h-10 self-start" />
        <span className="font-bold">Location Address</span>
        <div>
          {Object.entries(dataPoint.address).map(([key, value]) => (
            <div className="pb-1" key={value}>
              {key}: {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
