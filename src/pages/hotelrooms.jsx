import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import axios from 'axios'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,


} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Hotelimages from '../component/hotelimages';
let fetchData = async (id) => {
    try {
        let res = await axios.get(`http://localhost:8080/destination/${id}`)
        return res;
    } catch (error) {

    }
}

const Hotelrooms = () => {
    let [data, setData] = useState()
    let { id } = useParams();
    // let [search, setSearch] = useSearchParams()
    // let q = search.get('q')
    useEffect(() => {
        fetchData(id)
            .then((res) => {
                console.log(res.data.hotels[0]);
                setData({ ...res.data.hotels[0], place: res.data.place })
            })

    }, [])
    return (
        <div>
            {
                data != undefined && <>
                    <Breadcrumb fontSize={'13px'} spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                        <BreadcrumbItem>
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <BreadcrumbLink _hover={{ color: '#f15824' }} color={'grey'}>Home</BreadcrumbLink>
                            </Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <Link to={'/destination'} style={{ textDecoration: 'none' }}>
                                <BreadcrumbLink _hover={{ color: '#f15824' }} color={'grey'}>Destination</BreadcrumbLink>
                            </Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem >
                            <Link to={`/destination/${id}`} style={{ textDecoration: 'none' }}>
                                <BreadcrumbLink _hover={{ color: '#f15824' }} color={'grey'}>{data.place}</BreadcrumbLink>
                            </Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink color={'black'} _hover={{ color: '#f15824' }}>{data.name}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Hotelimages />
                </>
            }
        </div>
    );
}

export default Hotelrooms;
