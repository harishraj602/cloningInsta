import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react'
import React  from 'react'
import FeedPost from './FeedPost'
import useGetFeedPosts from '../../hooks/useGetFeedPosts'

const FeedPosts = () => {

    const {isLoading,posts}=useGetFeedPosts();


  return (
    <Container maxW={"container.sm"} py={10} px={2} >
        {isLoading&&[0,1,2,3].map((_,index)=>(
            <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
                <Flex gap={2}>
                     <SkeletonCircle size={10}/>
                     <VStack gap={2} alignItems={"flex-start"}>
                        <Skeleton height={"10px"} w={"200px"}/>
                        <Skeleton height={"10px"} w={"200px"}/>
                     </VStack>
                </Flex>

                <Skeleton w={"full"}>
                    <Box h={"500px"}>contents wrapped</Box>
                </Skeleton>
            </VStack>
        ))}
        {!isLoading&& posts.length>0 &&(
          posts.map((post)=><FeedPost key={post.id} post={post}/>)
        )}
        {!isLoading&&posts.length===0&&(
          <>
           <Text fontSize={'md'} color={'red.400'}>
            hey looks like you haven't followed anyone
           </Text>
           <Text color={'red.400'}>Stop coding and go follow someone</Text>
          </>
        )}
      
      
    </Container>
  )
}

export default FeedPosts