import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Routes from "./routes";
import {
  createReactClient,
  LivepeerConfig,
  studioProvider,
} from "@livepeer/react-native";

const client = new ApolloClient({
  uri: "https://api.lens.dev",
  cache: new InMemoryCache(),
});

const livepeerClient = createReactClient({
  provider: studioProvider({ apiKey: "LIVEPEER_STUDIO_API_KEY" }),
});

export default function App() {
  return (
    <NavigationContainer>
      <LivepeerConfig client={livepeerClient}>
        <ApolloProvider client={client}>
          <Routes />
        </ApolloProvider>
      </LivepeerConfig>
    </NavigationContainer>
  );
}
