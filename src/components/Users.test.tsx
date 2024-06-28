import React from 'react';
import { render, screen } from "@testing-library/react"
import Users from "./Users"

// const mockUsers = {
//     "page": 2,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }

// global.fetch = jest.fn().mockImplementation(() =>
//     Promise.resolve({
//         json: () => Promise.resolve(mockUsers),
//     })
// )

// describe('users', () => {
//     test('render the Component', () => {
//         render(<Users></Users>)
//         const user = screen.getByTestId('user-list')
//         expect(user).toBeInTheDocument();
//     })

//     test('should render first user name', (async () => {
//         await render(<Users />)
//         const firstUser = screen.getByText('Michael')
//         expect(firstUser).toBeInTheDocument();
//     }))
// })