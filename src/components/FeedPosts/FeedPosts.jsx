import { Container, Flex, Skeleton, SkeletonCircle, VStack, Box } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import { useState } from 'react'
import { useEffect } from 'react';

const FeedPosts = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, [])

    return (
        <Container maxW={"container.sm"} py={10} px={2}>

            {isLoading && [0, 1, 2, 3, 4].map((_, index) => (
                <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
                    <Flex gap={2}>
                        <SkeletonCircle size={10} />
                        <VStack gap={2} alignItems={"flex-start"}>
                            <Skeleton height={"10px"} w={"200px"} />
                            <Skeleton height={"10px"} w={"200px"} />
                        </VStack>
                    </Flex>
                    <Skeleton w={"full"}>
                        <Box h={"500px"}>Contents Wrapped</Box>
                    </Skeleton>
                </VStack>
            ))}
            {!isLoading && (
                <>
                    <FeedPost img='/img1.png' username="albert" avatar='/img1.png' />
                    <FeedPost img='/img2.png' username="nanda" avatar='/img2.png' />
                    <FeedPost img='/img3.png' username="dono" avatar='/img3.png' />
                    <FeedPost img='/img4.png' username="andre" avatar='/img4.png' />
                </>
            )}
        </Container>
    )
}

export default FeedPosts