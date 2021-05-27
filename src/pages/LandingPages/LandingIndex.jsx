import React from 'react'
import {Stack, Heading, Text, Button, Link} from '@chakra-ui/react'

export function LandingIndex(){
    return (
        <div className="viewport">
            <div className="title">
                <Stack spacing={6} margin={15} textAlign="left" w="500px" display="block">
                    <Heading size="4xl">
                        Lỗi xảy ra khi đăng nhập!
                </Heading>
                    <Text size="3xl">
                        Hãy ấn vào cái nút bên dưới để có thể đăng nhập và sử dụng trang web một cách minh bạch
                </Text>
                    <Link href="http://localhost:3001/api/auth/discord">
                        <Button width="fit-content" textAlign="center" marginLeft={20} display="block">
                            Đăng nhập
                        </Button>
                    </Link>
                    <Text size="3xl">
                        Nếu bạn chưa tham gia vào cộng đồng Noobs của chúng ta, thì bạn có thể ấn vào nút bên dưới để có thể tham gia!
                </Text>
                    <Link href="https://discord.gg/3Ssz6cKTS5">
                        <Button width="fit-content" textAlign="center" marginLeft={20} display="block">
                            Join Discord
                        </Button>
                    </Link>
                </Stack>
            </div>
        </div>
    )
}

export default LandingIndex