import { useQuery } from "@apollo/client";
import { useRouter } from 'next/router'
import { GET_SHIP_DETAILS } from "../../api/ship/queries/getShipDetails";
import { ShipInfo } from "../../components/ShipInfo";

const ShipDetails = () => {
  const router = useRouter();
  const shipId = (router.query.slug as string) || "";

  const { loading, error, data } = useQuery(GET_SHIP_DETAILS, { variables: { find: { id: shipId[0] } } });
  const ship = data && Object.assign({}, data.ships[0]) || {};

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return (
    <ShipInfo image={ship.image} name={ship.name} model={ship.model} description={ship.description} />
  )
};

export default ShipDetails;