import { useQuery } from "@apollo/client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useRouter } from 'next/router'
import { GET_SHIP_DETAILS } from "../../api/ship/queries/getShipDetails";
import { CardMedia } from "@mui/material";

const ShipDetails = () => {
  const router = useRouter();
  const shipId = (router.query.slug as string) || "";

  const { loading, error, data } = useQuery(GET_SHIP_DETAILS, { variables: { find: { id: shipId[0] } } });
  const ship = data && Object.assign({}, data.ships[0]) || {};

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return (
    <Container maxWidth="md">
      <CardMedia component="img" image={ship.image} alt={ship.name} />
      <Typography variant="h2" component="h2">
          {ship.name}
      </Typography>
      <Typography variant="h5" component="h5">
          {ship.model}
      </Typography>
      <Typography variant="body1">
          ID: {ship.model}
      </Typography>
      <Paper>
      </Paper>
    </Container>
  )
};

export default ShipDetails;