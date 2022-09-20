import { gql } from "@apollo/client";
import { Ship } from "../types";

export type GetShipResult = {
  ship: Ship;
};

export const GET_SHIP_DETAILS = gql`
  query getShip($find: ShipsFind) {
    ships(find: $find) { 
        id
        image
        name
        model
      }
  }
`;
