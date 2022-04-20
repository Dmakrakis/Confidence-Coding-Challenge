export interface Data {
  id: number;
  address: Address;
  locationDetails: string;
  locationType: string;
}

type Address = {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
};
