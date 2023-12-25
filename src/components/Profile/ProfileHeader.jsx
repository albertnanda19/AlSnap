import { Avatar, AvatarGroup, Flex, Text, VStack, Button } from '@chakra-ui/react'

const ProfileHeader = () => {
    return (
        <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }}>
            <AvatarGroup size={{ bae: "xl", md: "2xl" }} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
                <Avatar name='albert' src='/profilepic.png' alt='albert pic' />
            </AvatarGroup>

            <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
                <Flex gap={4} direction={{ base: "column", sm: "row" }} justifyContent={{ base: "center", sm: "flex-start" }} alignItems={"center"} w={"full"}>
                    <Text fontSize={{ base: "sm", md: "lg" }}>
                        albert
                    </Text>
                    <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                        <Button bg={"white"} color={"black"} _hover={{ bg: "whiteAlpha.800" }} size={{ base: "xs", md: "sm" }}>
                            Edit Profie
                        </Button>
                    </Flex>
                </Flex>

                <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
                    <Text fontSize={{ base: "xs", md: "sm" }}>
                        <Text as={"span"} fontWeight={"bold"} mr={1}>4</Text>
                        Posts
                    </Text>
                    <Text fontSize={{ base: "xs", md: "sm" }}>
                        <Text as={"span"} fontWeight={"bold"} mr={1}>224</Text>
                        Followers
                    </Text>
                    <Text fontSize={{ base: "xs", md: "sm" }}>
                        <Text as={"span"} fontWeight={"bold"} mr={1}>124</Text>
                        Following
                    </Text>
                </Flex>
                <Flex alignItems={"center"} gap={4}>
                    <Text fontSize={"sm"} fontWeight={"bold"}>albert</Text>
                </Flex>
                <Text fontSize={"sm"}>Software Engineer</Text>
            </VStack>
        </Flex>
    )
}

export default ProfileHeader