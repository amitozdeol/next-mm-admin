import {
  Box,
  SimpleGrid,
  Text,
  Card,
  CardBody,
  Flex,
  Image,
  Heading,
  Stack,
} from '@chakra-ui/react';

export interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
}

export default function ProductsPage({ products }: { products: Product[] }) {
  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      <Text fontSize="2xl" fontWeight="700" mb="20px">
        Products
      </Text>
      <SimpleGrid minChildWidth="250px" spacing={6}>
        {products.map((product) => (
          <Card key={product.id} variant="outline">
            <CardBody>
              <Flex h="200px" bg="gray.100" justify="center" align="center">
                <Image
                  src={product.image}
                  alt={product.title}
                  objectFit="cover"
                  boxSize="100%"
                />
              </Flex>
              <Stack mt="6" spacing="3">
                <Heading size="md">{product.title}</Heading>
                <Text color="blue.600" fontSize="2xl">
                  ${product.price}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
