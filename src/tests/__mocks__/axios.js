export default {
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          id: 1,
          title: 'Harry Potter - Prisioner of Azkaban'
        },
        {
          id: 2,
          title: 'React + Redux - Book'
        },
        {
          id: 3,
          title: 'Microservice in action'
        },
        {
          id: 4,
          title: 'Microfrontend in Action'
        },
        {
          id: 5,
          title: 'Guide Bitcoin'
        },
        {
          id: 6,
          title: 'Blockchain from zero'
        },
        {
          id: 7,
          title: 'GraphQL - Deep understading'
        },
        {
          id: 8,
          title: 'Star Wars - The beggining'
        },
        {
          id: 9,
          title: 'Heavy Metal - The history of everything'
        },
        {
          id: 10,
          title: 'Rhapsody of Fire'
        },
        {
          id: 11,
          title: 'Game of Thrones - pt.01'
        },
        {
          id: 12,
          title: 'Cuisine - The best foods'
        }
      ]
    })
  )
}
