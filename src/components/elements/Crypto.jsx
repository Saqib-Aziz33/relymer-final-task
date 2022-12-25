import { Box, Heading, Text } from "@chakra-ui/react";

function Crypto({ data, symbol }) {
  return (
    <Box my={8}>
      <Heading size="md">Crypto API price</Heading>
      <Text>
        Symbol: <span style={{ opacity: 0.5 }}>{symbol}</span>
      </Text>
      <Heading size="lg" color="cyan.400" fontWeight={700} mt={4}>
        ${parseFloat(data).toFixed(2)}
      </Heading>
      <small style={{ opacity: 0.5 }}>price in dollars</small>
    </Box>
  );
}
export default Crypto;
