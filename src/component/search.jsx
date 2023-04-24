import { Box, Center, Icon, Input, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
let fetchData = async (query) => {
    try {
        let res = await fetch(`http://localhost:8080/destination/?q=${query}`)
        let data = await res.json()
        return data;
    } catch (error) {

    }
}

function Search({ searchQuery, setSearQuery }) {
    /* Here's a custom control */
    let ref = useRef()
    let ref2 = useRef()
    // let d = useRef('dsff')



    const [query, setQuery] = useState(" ");
    const [results, setResults] = useState([]);

    const handleInputChange = (event) => {
        const query = event.target.value;
        setQuery(query);


    };
    useEffect(() => {
        fetchData(query)
            .then((res) => {
                setResults([...res])
            })
    }, [query])
    return (

        <div>

            <InputLeftElement pointerEvents="none">
                <Icon as={SearchIcon} color="gray.300" />
            </InputLeftElement>
            <Input
                width={'100%'}
                pl={8}
                type='text'
                // defaultValue={d.current}
                textColor='gray.700'

                onChange={handleInputChange}
                onFocus={() => {
                    ref.current.style.display = 'initial'
                }}

                ref={ref2}

            />


            {query && (
                <div ref={ref} style={{ marginTop: '-10px', display: 'none', backgroundColor: 'white' }}>
                    {results.map((item) => (
                        <Text onClick={(e) => {

                            setSearQuery(item.id)
                            ref.current.style.display = 'none'
                            ref2.current.value = item.place

                        }} cursor={'pointer'} key={item} style={{ padding: "5px", backgroundColor: 'white' }}>
                            {item.place}
                        </Text>
                    ))}
                </div>
            )}

        </div>
    )
}

export default Search;
