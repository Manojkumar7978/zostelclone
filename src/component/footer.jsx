import React from "react";
import { Box, Flex, Link, Text, Image, VStack, HStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" backgroundColor={"gray.700"} py={8} paddingBottom={20}>
      <Flex
        maxW="7xl"
        mx="auto"
        px={8}
        justifyContent="space-between"
        alignItems="left"
        flexWrap="wrap"
      >
        <Box mb={[6, 0]} w={["100%", "50%", "33.33%"]}>

          <Image
            src='https://user-images.githubusercontent.com/83694840/146682423-9bed17e3-83f7-412f-b5de-a0fe01f4f9bd.png'
            alt='logo'
            maxWidth="60%"
            maxHeight="60%"
            mr={2}
            ml={2}
          />

          <Text fontSize="md" color={'white'} as='b'>
            The website ends here, but your journey to the remotest destinations in India and Nepal begins with Zostel. Explore with our social hostels, homestays, and luxury stays on your next holiday.

          </Text>
        </Box>
        <Box
          w={["100%", "50%", "33.33%"]}
          mb={[6, 0]}
          justifyContent={"left"}

        >
          <Text color={"gray.50"} as='b' pb={10}>
            USEFUL LINKS
          </Text>
          <HStack spacing='20px' mt={6} color={"white"}>
            <VStack direction={['column', 'row']} spacing='24px' alignItems={"left"}>

              <Link href="#">
                Guest Policy
              </Link>
              <Link href="#">
                Privacy Policy
              </Link>
              <Link href="#">
                Careers
              </Link>
              <Link href="#">
                Conditions
              </Link>
            </VStack>
            <VStack direction={['column', 'row']} spacing='24px' alignItems={"left"}>
              <Link mr={4} href="#">
                Destinations
              </Link>
              <Link href="#">
                Franchise
              </Link>
              <Link href="#">
                Contact Us
              </Link>
              <Link href="#">
                Cookie Policy
              </Link>
            </VStack>
            <VStack direction={['column', 'row']} spacing='24px' alignItems={"left"}>
              <Link href="#">
                About Us
              </Link>
              <Link href="#">
                Support
              </Link>
              <Link href="#">
                Terms
              </Link>
              <Link href="#">
                Mobile App
              </Link>
            </VStack>
          </HStack>
        </Box>
        <Box
          w="20%"
          mr={10}
          justifyContent={["center", "center", "flex-end"]}
          alignItems="center"
        >

          <VStack direction={['column', 'row']} spacing='30px' mr={3}>
            <Text fontWeight="bold" fontSize="lg" color={"gray.50"}>
              DOWNLOAD OUR APP
            </Text>
            <Image src='https://logowik.com/content/uploads/images/app-store-and-google-play.jpg'
              alt='Apple & play store'
              maxWidth="60%"
              maxHeight="60%"
              mb={5} />

            <Flex>
              <Image src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEUYd/L///8Aa/EAb/ISePIAcvKlw/kAbfHz+P4AcPGTt/eNs/cAavEAc/IRdfKwyflnnfVgmfU6hvNuofbg6/3s8/5dmPXT4vxYlfXD1/u70fougfOcvvjn7/3Z5vypxvlNj/TM3fuDrfd4p/Y2hPMlffP2+v6Gr/dFi/S2zvrQ3/x8qfYAY/GN8zfMAAALKElEQVR4nN3d6XbiuBIAYFnCGAESECBAQiCEQIf0ff/nu8JsNl6QVFUW03Xmx5w5E/CHbam0s6iZ6ExWm8XbYXCMw9tis5pMG/pmRvvx+8mi/TV6YYLzRAghT2H+LeFcsJfXr/Zisqe9BDphZ7McvwsuZKy1ZmVh/nsszf+xGy4XHbLroBFOBuNWX0hVLitIlRT91ng9IbkWfOH0MGZcKitbNpTkejzAfzuRhavuCxeWt67sZgr+3V3hXhKmcNXbcemruyolb/UwkWjC6fKbS6DuEjF/X6I9rkjCxSv87mXD3Mn5AufSMIT7ZSvB5J1CJWyJUYfAhR9/BdbTeRdaJtuP4MLJkMc0vjRiPoKWOjDhZNR3r/jcQvVfYUaI8GPIqX3H0HwEeVb9hfuvRnzHUHzrX+Z4C9sJ5ft3HzFfNizcvAv8+qE2xM6zfvQS7oe8YR9LX0evR9VHeBBNPqC3UGLQiLAzD3ADT6GTT/d01Vl48Gj64YXHbXQVhngDs2HeRsd+HTfhqhXmDcxG3JrRCdv9sDfwHH2nutFFOOShbedIRiTC6TtRI8kj4p19pmotnAUtQ+9Diw228PAcr+A1dH+NK+z2Q5MKwXuYwm0S2lMSyRhPOBKhNaUh5ljCz+cpRPMhP3GETws0tcYPhvAnfKJWHfELXPj5zECbu/hI+MSP6CniR+/iA+Ho2YGmuHlQotYLt89ZTeRD1NeLtcLuM1b0xUhqs5s64eH5UrXy4HU5ao1w9l8Bmjbxxkc4RR3ypA0tqvvgqoXvz9QefBR65y4cNlRPaBUfJ0klxxDptKlYqYopRjURv7oK2w30yWglk35r/nc5WGx+V6vV72azOKyXf7avL+w4S8xY7alJVfdUhXBFXspoyfWwPavs/OysFuve8CXmieXb0q/oZKwQtohLGcV3ljODprOhbYFQ/muVC4ek6ba5fVuHXt2e5cVUvIqlwgPpSyhl16lj3lbIeOmYRpmwQ1kTKt5zHHiwFpbXimXCOV1NqPnceXzMWsh0WUuqREj4jCpxcPW5CFlSkqAWhXu6EXr57TMfz0Gok+JAeFFIV46KoYfPSchUccymINyQPaP8ywvoJGS8MGOjIHynekZte+FhQlZIwe+Fbap+C+F5B12F4j4/vRPuCSaKpiFdBjUhQsbvCps74RdRMaO+vYGuwnhbJ/wgKmZ0Aphd6ChkPL9uIy+0TuMdg3tU9N5Clc/Ac8IJ1S20GgbDEjKea5flhCOqWwiare0sVLkfNCucEDXspW9N6Clk/exNzAqJ3kItYevv3IU6+yZmhFQFqeyCgB7CXHGaEf4lqgs5cAmlh1Bl6sSbcE+Ur6ltyVUTC7OJzU24JOoC5m5TCXGEmTfjJmzh445R099OKNS6KFwQjRVCyxk/IRNvBeErUaOCg1dLeglvtf5FOKVK2FpQoJ/wlkddhFTljLKbfIYvvL4dF+E3VcvXaW595607fNkxrdTtH/eRtjSuJdxZuKLqf+IOi+wHP6c1/Dofvt88ywl7VOOhibVvrXA7auM/OeEO87MzoR/POztF5we7h0izrJDsIbVN2T5i/HbN+TE9CbtUD6m0Wxox9d6Goe67exnhC1U3sOVIzAtFy1S/34RU1b0RbmyAS5pmzanST4UHsgl6VpUFVTe0XF+FY7IhUW4znEaWT42uQkY2YpjYtO+pBoO0ugipuklNCAsg3den7ZqjcEA3wctGSPf1sn0W0r2GTFoIqXrAzIs4PAuJ+i+OYXMPP8l+4LQvwwg7hHPYbIRko86notwIN4TT1W2EhHPoxCIVUlVH6VdYCOnqqrShz0gLmtD3UI9SIeF7EFp4nJnByHrz0wgtNDkVo8xonkC4MsLFv3wPxZsRtikn5YcWyqURUk2hSSO0MN4a4Yhy0npooZobIVkfzTFCC/W7ERKmFE8gVEZIuogytJDxPeuQrjwIL5wy0go/vDCZsBXpStjgQvHLKFuHzyBcMNKk7QmEb+zt3xbKAzuQrhUNLxwwws5S9gzCNYJQyeroWwilqPkACbw82YYL1WjdrgybAdLqvz7GGtabiyGET+t6cIv/dSEw5zLvIbgsJRYC62tTloLrQ2IhsL/a1IfgnIZYuIX1V5ucBpyXEgt/YLWlyUvBbQtiofe8trPwF94+pBVCJ8IkKwaeS0MrnAEfMdPGB/fT0AoHwMvje3hfG63Qb4LwNdK+Nmh/Ka0Q2F+d9pdCJ+nTCoETX9M+b+i4Ba0QWA6qLcLYE6kQWpelY0/QtI1UCL24dPwQ/DNRCqHzRNIxYOg4PqkQmHefxvGhczFIhcC8m7XS2SbA5b+kQmDefVwQDJ8TRSmEJs3nOVHQfgJCITTvPs9rA85NpBSC8+4PjPmllELgcqzL/FLg1D1KITDvTifrH4Vr0C9FKYRWZJd53rCshlIIfQ0vc/VhtQ6hEJhQ6jiKMNbMEAqB9Zi+rZkBFcqEQmguclv3BEodCIXAlRiZtWugldxxb9+pDgtH9d/C8u7zam6ENaQxr47/WQiTftVfw+qKOLuGlGwdcMhx/Nw6YLKFQQGFl+1NLuvxiSYKBxTGXzkh1WMaUHi3pwLVspKAwrt9MagWP4UTFvY2IVqwHk5Y2J+GaIvrYEJ13fiaeJ+oYMKSfaJo5uyHEp4aTndCkrImlLB0v7YOxWMaSpjZyyGzb+KWIK8JJMzuv0W892UgYcXelxRb0IYR5jahzQoJDpcJI8wdOZPbRxh/Z8EgwlttXxDitzCCCPP7ieb380Z/E0MI7/bWJt6TPYSwdk929DoxgPB+L8o7IXZiE0B4vzXV/fkWyBuLNS8sdFAXzijZoX5f88LCjrAF4QK1sGlcaHHODG6N0bRQFU9hKAo7mNuINi0s2QGv5MyuAWJ52rBQtIsfX3buGuLmW80KVdkh3WXCKd5z2qyw9DSb0vMPB2jlaaPCsnPlqs6wHGElb00KS8rRauEea7StSaF2OYcU7cTqBoVVJ1dXnQe8xKkymhOKqgkTlWc647yKjQnjyiOlqs/lRknBmxL6nMsdfWDUig0Jtag+M6taGG0QSpuGhP1Ci8JKGK3hxGaEvCQdtRJGPXCB2oiw/njMWmE0hvZpNCGU9UfU1gujOXBQsQGhLDvI2V4YfcKqRXphXNZichFGPyAiuVA9PCLkoTB6gRCpher94bb2j4Wgu0gsjC0OebEQRp/+xQ2tUD56B22F0dy70iAVPipFHYTR2LfqpxRaHtVuJ4x6nj03hELbo9othSZH9boOMqHu1+WiPsJo49WYohJqUdOa8BRG051HrUEkjHf2ZyjbC6Po1b28oREKl1OwXYTR0rnBSCLsO63ScRJGM+b4pBIIlf51umY3YbQfuS1kwRcmc8cDlB2Fx3VuLheELVTlYxOowmj66XCIGLJQ/LifQ+8uNLV/Yj3AiCpUtT1OVeEjjDoj2yQOU8jnNoe4FcJLGEWLnV1zA08oW9ZZTD48haZu5DYVB5ZQce+Vqt7CqLPlj19HHKHmY68HNA1/YRRNXh8aMYSKzx0OFS4ERBhFq/mDRhVcqPqfs8efURMwoTHW30eo0Nw/mA8uNM/qNpGV1wgSasnHkOfzFHChKXO6WlTcSIBQCdX1L19ugSE08TbnpTfSWyj559vjP7UJJGEUfXR3PC5cq5dQx3zXdU9AKwJNaGL2h93fSXeh4ekvaOmSDUyhiVnvncvMIdtuQm3Kll0PkxehC018rIfqqrQXaiV5PFqjPZzXwBceY9Ueai6k1nZnWGopuB62VyTXQiM8xnTRHe1sdv4QrdfuAv/eXYJOmIbV7i20l0AsfIL4P4UPukIRd/C0AAAAAElFTkSuQmCC'
                alt='Facebook'
                boxSize='30px'
                borderRadius={"full"}
                mr={8}
              />
              <Image src='data:image/jpeg;base64,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'
                alt='Instagram'
                boxSize='30px'
                mr={8}
                borderRadius='20%' />
              <Image src='data:image/jpeg;base64,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'
                alt='Twitter'
                boxSize='30px'
                mr={8}
                borderRadius='full' />
              <Image src='data:image/png;base64,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'
                alt='YouTube'
                maxWidth="15%"
                maxHeight="5%"
                borderRadius='20%' />
            </Flex>

            <Text fontWeight="bold" fontSize="sm" color={"gray.50"}>
              Zostel © 2022. All Rights Reserved
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
