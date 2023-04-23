import { Box, Grid, GridItem, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";

const WSlider = () => {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/weekend");
        setData(res.data.weekend);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleBack = () => {
    if (start > 0) {
      setStart(start - 1);
    }
  };

  const handleForward = () => {
    if (start < data.length - 5) {
      setStart(start + 1);
    }
  };

  return (
    <Box>
      <Grid templateColumns="repeat(7, 1fr)" gap={4}>
        <IconButton
          icon={<ArrowBackIcon />}
          onClick={handleBack}
          disabled={start === 0}
          aria-label="Previous"
          gridColumn="1/2"
          alignSelf="center"
        />
        {data.slice(start, start + 5).map((item) => (
          <GridItem key={item.id} colSpan={1}>
            <Box
              bgImage={`url(${item.image})`}
              bgSize="cover"
              bgPosition="center"
              w="100%"
              h="200px"
              cursor="pointer"
              onClick={() => window.location.href = `/details/${item.id}`}
            >
              <Box
                bg="accent"
                color="white"
                px={2}
                py={1}
                pos="absolute"
                bottom="0"
                w="100%"
              >
                {item.place}
              </Box>
            </Box>
          </GridItem>
        ))}
        {data.slice(start + 5, start + 7).map((item) => (
          <GridItem key={item.id} colSpan={1}>
            <Box
              bgImage={`url(${item.image})`}
              bgSize="cover"
              bgPosition="center"
              w="100%"
              h="200px"
              cursor="pointer"
              onClick={() => window.location.href = `/details/${item.id}`}
            >
              <Box
                bg="accent"
                color="white"
                px={2}
                py={1}
                pos="absolute"
                bottom="0"
                w="100%"
              >
                {item.place}
              </Box>
            </Box>
          </GridItem>
        ))}
        <IconButton
          icon={<ArrowForwardIcon />}
          onClick={handleForward}
          disabled={start === data.length - 5}
          aria-label="Next"
          gridColumn="7/8"
          alignSelf="center"
        />
      </Grid>
    </Box>
  );
};

export default WSlider;