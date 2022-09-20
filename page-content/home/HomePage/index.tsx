import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useQuery } from '@apollo/client';
import { GET_SHIPS } from "../../../api/ship/queries/getShips";
import { Ship } from "../../../api/ship/types";
import { Card } from "../../../components/Card";
import { Grid } from "@mui/material";

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
  const { loading, error, data: { launchesPast } = {}, fetchMore } = useQuery(GET_SHIPS, { variables: { limit: 6, offset: 0 } });
  const [hasMore, setHasMore] = useState(true);
  const loadMoreShips = () => {
    if (launchesPast.length > 150) {
      setHasMore(false);
    }

    // debounce just because API is limited
    setTimeout(() => {
      fetchMore({ variables: { limit: 3, offset: launchesPast.length } })
    }, 100)
  }

  const formatData = () => {
    return launchesPast && launchesPast.map((launch: any) => {
      return launch.ships;
    })
      .flat();
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;


  return (
    <Box sx={{ flexGrow: 1 }}>
      <>
        <InfiniteScroll
          dataLength={launchesPast.length}
          next={() => loadMoreShips()}
          hasMore={hasMore}
          loader={loading}
          endMessage={<h4>Nothing more to show</h4>}
        >
          {launchesPast && (
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {launchesPast && (
                formatData().map((ship: Ship, index: any) => (
                  ship && (
                    <Grid item xs={4} md={4} key={index}>
                      <Card key={index} image={ship.image} alt={ship.name} label={ship.name} description={ship.model} href={`ship/${ship.id}`} loading={loading} />
                    </Grid>
                  )
                ))
              )}
            </Grid>
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
