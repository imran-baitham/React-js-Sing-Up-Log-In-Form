// import React from 'react'
// import { useQuery } from 'react-query'

// const Newfile = () => {
//     const { isLoading, error, isSuccess, data } = useQuery('repoData', () =>
//         fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
//             res.json()
//         )
//     )

//     if (isLoading) return 'Loading...'

//     if (error) return 'An error has occurred: ' + error.message
    
//     // if (isSuccess) return 'Done worke it...'

//     return (
//         <div>
//             <h1>{data.name}</h1>
//             <p>{data.description}</p>
//             <strong>👀 {data.subscribers_count}</strong>{' '}
//             <strong>✨ {data.stargazers_count}</strong>{' '}
//             <strong>🍴 {data.forks_count}</strong>
//             <p>{data.secess}</p>
//         </div>
//     )
// }

// export default Newfile
