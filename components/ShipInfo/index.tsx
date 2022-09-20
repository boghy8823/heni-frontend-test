import { CardMedia, Container, Typography } from "@mui/material";

export interface ShipInfoProps {
  image?: string;
  name?: string;
  model?: string;
  description?: string;
}

export const ShipInfo = ({
    image,
    name,
    model,
    description
  }: ShipInfoProps) => {
    return (
      <Container maxWidth="md">
        <CardMedia  data-testid="ship-image"component="img" image={image} alt={name} />
        <Typography variant="h2" component="h2">
            {name}
        </Typography>
        <Typography variant="h5" component="h5">
            {model}
        </Typography>
        <Typography variant="h2" component="h2">
            {description}
        </Typography>
        <Typography variant="body1">
            ID: {model}
        </Typography>
      </Container>
    )
  };
  