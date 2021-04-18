import React from 'react'
import { Card, CardBody, CardTitle } from '../styles/components/Post'

export default function Post({ post }) {
  const { title, body, id } = post
  return (
    <Card>
      <CardTitle>
        {id}. {title}
      </CardTitle>
      <CardBody>{body}</CardBody>
    </Card>
  )
}
