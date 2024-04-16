import { Text, Flex, VStack, Box, Link } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'
import useGetSuggestedUsers from '../../hooks/useGetSuggestedUsers'


const SuggestedUsers = () => {

    const{isLoading,suggestedUsers}=useGetSuggestedUsers();

    if(isLoading)return null;


  return (
    <VStack py={8} px={6} gap={4}>
       <SuggestedHeader/>

       {suggestedUsers.length!==0&&(

       <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
        </Text>

        <Text fontSize={12} fontWeight={"bold"} color={"gray4500"} cursor={"pointer"}>
            See All
        </Text>
       </Flex>)
} 

       {suggestedUsers.map(
        (user)=>(<SuggestedUser user={user} key={user.uid}/>)
       )}
       

       <Box fontSize={12} color={"gray.500"} mt={5}>
        @2023 Built By{" "}
        <Link href='https://www.youtube.com' target='_blank' color='blue.500' fontSize={14}>
            As a Programmer
        </Link>
       </Box>

    </VStack>
    )
}

export default SuggestedUsers