import { ChakraProvider, Container, Grid, GridItem } from "@chakra-ui/react";
import { Box, Heading, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { binanceAPI, cryptoApi } from "./lib/constants";
import Loading from "./components/elements/Loading";
import Binance from "./components/elements/Binance";
import { db } from "./firebase.config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./app.scss";
import Crypto from "./components/elements/Crypto";
import Comparison from "./components/Comparison";

function App() {
  const [symbol, setSymbol] = useState(null);
  const [loading, setLoading] = useState(false);
  const [binanceData, setBinanceData] = useState(null);
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    if (symbol) {
      setLoading(true);
      fetch(binanceAPI[symbol])
        .then((res) => res.json())
        .then(async (data) => {
          setBinanceData(data);
          setCryptoData(cryptoApi[symbol]);
          // save to database
          try {
            const docRef = await addDoc(collection(db, "prices"), {
              symbol,
              binance: parseFloat(data.price).toFixed(2),
              crypto: cryptoApi[symbol],
              time: serverTimestamp(),
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        })
        .catch((e) => alert("some thing went wrong"))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [symbol]);

  return (
    <ChakraProvider>
      <Container>
        <Box textAlign="center" pt={20}>
          <Heading color="cyan.400">Crypto Coins</Heading>
          <Text mt={2}>Compare currencies prices</Text>

          <Select
            placeholder="Select Symbol"
            mt={6}
            _focus={{ borderColor: "cyan.400" }}
            onChange={(e) => setSymbol(e.target.value)}
            maxW={200}
            mx="auto"
          >
            <option value="bitcoin">Bitcoin</option>
            <option value="etherum">Etherem</option>
            <option value="BNB">BNB</option>
            <option value="XRP">XPR</option>
          </Select>
        </Box>

        {loading && <Loading />}
        <Grid gridTemplateColumns="1fr 1fr" gap={8} placeItems="center" my={8}>
          <GridItem>
            {/* show binance data */}
            {!loading && binanceData && symbol && (
              <Binance data={binanceData} symbol={symbol} />
            )}
          </GridItem>
          <GridItem>
            {/* show crypto data */}
            {!loading && binanceData && symbol && (
              <Crypto data={cryptoData} symbol={symbol} />
            )}
          </GridItem>
        </Grid>
        {!symbol && (
          <Text textAlign="center" mt={4} opacity={0.5}>
            Plese select symbol to continue
          </Text>
        )}

        {!loading && binanceData && symbol && (
          // <Comparison data={{ binance: binanceData, crypto: cryptoData }} />
          <Text textAlign="center" opacity={0.5}>
            Difference: $
            {(cryptoData - parseFloat(binanceData.price)).toFixed(1)}
          </Text>
        )}
      </Container>
    </ChakraProvider>
  );
}
export default App;
