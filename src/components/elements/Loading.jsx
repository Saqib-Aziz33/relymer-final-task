import { Center, Spinner } from "@chakra-ui/react";

function Loading() {
  return (
    <Center my={8}>
      <Spinner size="xl" />
    </Center>
  );
}
export default Loading;
