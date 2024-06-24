import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h1" size="2xl" mb={4}>
            Financial Times
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="lg">
                Headline 1
              </Heading>
              <Text mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="lg">
                Headline 2
              </Heading>
              <Text mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="lg">
                Headline 3
              </Heading>
              <Text mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>
            Sidebar
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h4" size="sm">
                Advertisement
              </Heading>
              <Text mt={2}>
                Ad content goes here.
              </Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h4" size="sm">
                Additional Content
              </Heading>
              <Text mt={2}>
                More content goes here.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;