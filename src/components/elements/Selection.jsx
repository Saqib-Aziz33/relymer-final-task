import { Box, Heading, Select, Text } from "@chakra-ui/react";

function Selection() {
  return (
    <Box textAlign="center">
      <Heading color="cyan.400">Crypto Coins</Heading>
      <Text mt={2}>Compare currencies prices</Text>

      <Select
        placeholder="Select Symbol"
        mt={6}
        _focus={{ borderColor: "cyan.400" }}
      >
        <option value="option1">Bitcoin</option>
        <option value="option2">Etherem</option>
        <option value="option3">BNB</option>
        <option value="option3">XPR</option>
      </Select>
    </Box>
  );
}
export default Selection;
