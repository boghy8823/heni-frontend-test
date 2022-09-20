import { useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouter } from 'next/router'
import { Card } from "../../components/Card";
import { GET_SHIP_DETAILS } from "../../api/ship/queries/getShipDetails";

const ShipDetails = () => {
  const router = useRouter();
  const shipId = (router.query.slug as string) || "";

  const { loading, error, data } = useQuery(GET_SHIP_DETAILS, { variables: { find: { id: shipId[0] } } });
  const ship = data && Object.assign({}, data.ships[0]) || {};

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log("SHIP DATA", data);
  
  return (
    <Box component={Typography} mt={2} mb={4} align="center" variant="h2">
      <Card image={ship.image} alt={ship.name} label={ship.name} description={ship.model} href={`ship/${ship.id}`} loading={loading} />
    </Box>
  )
};

export default ShipDetails;