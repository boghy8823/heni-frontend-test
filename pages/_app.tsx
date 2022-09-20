import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { Header } from "../page-content/header";

const App = ({ Component, pageProps }: AppProps) => {
  const cache = pageProps.cache
    ? new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            launchesPast: {
              // Don't cache separate results based on
              // any of this field's arguments.
              keyArgs: false,
    
              // Concatenate the incoming list items with
              // the existing list items.
              merge(existing = [], incoming) {
                return [...existing, ...incoming];
              },
            }
          }
        }
      }
    }).restore(pageProps.cache)
    : new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            launchesPast: {
              // Don't cache separate results based on
              // any of this field's arguments.
              keyArgs: false,
    
              // Concatenate the incoming list items with
              // the existing list items.
              merge(existing = [], incoming) {
                return [...existing, ...incoming];
              },
            }
          }
        }
      }
    });

  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql",
    cache,
  });

  return (
    <ApolloProvider client={client}>
      <header>
        <Header pageProps={pageProps} />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  );
};

export default App;
