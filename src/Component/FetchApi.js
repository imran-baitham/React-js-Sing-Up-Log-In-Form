import React, { useState } from 'react'
import { useQuery } from 'react-query';
import TransferData from './TransferData';

function FetchApi() {
    const [page, setPage] = useState(1)

    const fetchApis = async () => {
        let response = await fetch(
            `https://rickandmortyapi.com/api/character?page=${page}`
        )
        return response.json();
    }

    const { data, isError, isLoading } = useQuery(["fatching", page], fetchApis)
    console.log(data)
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Error </h1>
    }

    return (
        <>
            <div>
                {data.results.map((data) => {
                    return <div>
                        <TransferData data={data} />
                    </div>
                })}

                <div>
                    <button disabled={page === 1}
                        onClick={() => setPage((old) => old - 1)}
                    >Prev</button>
                    <button disabled={!data.info.next}
                        onClick={() => setPage((old) => old + 1)}
                    >Next</button>
                </div>
            </div>
        </>
    )
}

export default FetchApi