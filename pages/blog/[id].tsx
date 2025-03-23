import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Box, Heading, Text } from '@chakra-ui/react';
import AppWrappers from 'app/AppWrappers';

interface BlogPost {
  id: string;
  title: string;
  content: string;
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'First Blog Post',
    content: 'This is the content of the first blog post.',
  },
  {
    id: '2',
    title: 'Second Blog Post',
    content: 'This is the content of the second blog post.',
  },
  {
    id: '3',
    title: 'Third Blog Post',
    content: 'This is the content of the third blog post.',
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for the three sample blog posts
  const paths = blogPosts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false, // Return 404 for non-existent paths
  };
};

export const getStaticProps: GetStaticProps<{ post: BlogPost }> = async (
  context,
) => {
  const { id } = context.params as { id: string };

  // Find the blog post by ID
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post }, // Pass the blog post data as props
  };
};

export default function BlogPostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <AppWrappers>
      <Box
        maxW="800px"
        mx="auto"
        mt="8"
        p="6"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
      >
        <Heading as="h1" size="xl" mb="4">
          {post.title}
        </Heading>
        <Text fontSize="lg">{post.content}</Text>
      </Box>
    </AppWrappers>
  );
}
