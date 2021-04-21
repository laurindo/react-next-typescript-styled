export default {
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          id: 1,
          title: 'Post 1'
        },
        {
          id: 2,
          title: 'Post 2'
        },
        {
          id: 3,
          title: 'Post 3'
        }
      ]
    })
  )
}
