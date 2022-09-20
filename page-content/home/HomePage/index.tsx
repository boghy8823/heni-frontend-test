import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useQuery } from '@apollo/client';
import { GET_SHIPS } from "../../../api/ship/queries/getShips";
import { Ship } from "../../../api/ship/types";
import { Card } from "../../../components/Card";

export const getStaticProps = () => {
  return {
    props: {
      title: "SpaceX Ships",
      description: "SpaceX Ship List",
      url: "https://localhost:3000",
    },
  };
};

export const HomePage = () => {
  const { loading, error, data: {launchesPast} = {}, fetchMore } = useQuery(GET_SHIPS, { variables: { limit: 3, offset: 0 } });
  const [hasMore, setHasMore] = useState(true);

  const loadMOreShips = () => {
    if (launchesPast.length > 150){
      setHasMore(false);
    }

    // debounce just because API is limited
    setTimeout(() => {
      fetchMore({ variables: { limit: 3, offset: launchesPast.length}})
    }, 1000)
  }

  const formatData = (data: any) => {
    return launchesPast && launchesPast.map((launch: any) => {
      return launch.ships;
    })
      .flat();
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;


  return (
    <Box component={Typography} mt={2} mb={4} align="center" variant="h2">
      <>
        <InfiniteScroll
          dataLength={launchesPast.length}
          next={() =>loadMOreShips()}
          hasMore={hasMore}
          loader={loading}
          endMessage={<h4>Nothing more to show</h4>}
        >
          {launchesPast && (
            formatData(launchesPast).map((ship: Ship, index:any) => (
              ship && (
                <Card key={index} image={ship.image} alt={ship.name} label={ship.name} description={ship.model} href={`ship/${ship.id}`} loading={loading} onClick={() => shipDetailsPage} />
              )
            ))
          )}
        </InfiniteScroll>
        <style jsx>
          {`
          .back {
            padding: 10px;
            background-color: dodgerblue;
            color: white;
            margin: 10px;
          }
        `}
        </style>
      </>
    </Box>
  );
};
