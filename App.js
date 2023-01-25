import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Routes from "./routes";
import {
  createReactClient,
  LivepeerConfig,
  studioProvider,
} from "@livepeer/react-native";
import { LogBox } from "react-native";

const client = new ApolloClient({
  uri: "https://api.lens.dev",
  cache: new InMemoryCache(),
});

const livepeerClient = createReactClient({
  provider: studioProvider({ apiKey: "LIVEPEER_STUDIO_API_KEY" }),
});

LogBox.ignoreAllLogs();
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
