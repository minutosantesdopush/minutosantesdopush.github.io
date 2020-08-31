import React from "react"

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import { strip, trim } from '../util/html';

const formatSubheader = ({ frontmatter, timeToRead }) =>
  `Publicado em: ${frontmatter.date} • Tempo de leitura: ${timeToRead}min`;

export default function Home({ data }) {
  return data.posts.edges.map(({ node }, idx) => (
    <Card key={idx}>
      <CardHeader title={node.frontmatter.title} subheader={formatSubheader(node)} />
      <CardContent>
          <div>
            {
              trim(
                strip(node.html),
                360
              )
            }
          </div>
      </CardContent>
      <CardActionArea>
        <Button>Compartilhar</Button>
        <Button>Ler Mais</Button>
      </CardActionArea>
     </Card>
  ))
}

export const query = graphql`
  query {
    posts: allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}}}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "D/MM/Y")
          }
          html
          timeToRead
        }
      }
    }
  }
`