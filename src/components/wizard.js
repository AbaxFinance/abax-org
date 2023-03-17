import React, { useState } from 'react'
import InlineCard from './inlineCard'

import styled from 'styled-components'

const links = [
  {
    name: 'Developers',
    sublinks: [
      {
        title: '<placeholder>',
        link: 'https://docs.abax.org/protocol/guides/<placeholder>',
        description: '<placeholder>',
        tag: 'reference',
        icon: '📦'
      }
    ]
  },
  {
    name: 'Anatomy',
    sublinks: [
      {
        title: 'Anatomy of a Abax',
        link: '/docs/v1/<placeholder>',
        description: 'An overview of what Abax is <placeholder>.'
      },
      {
        title: 'Understanding <placeholder>',
        link: '/docs/v1/<placeholder>',
        description: 'Understand <placeholder>'
      }
    ]
  }
]

const StyledWizard = styled.div`
  color: ${({ theme, outlined }) => (outlined ? theme.colors.link : theme.textColor)};
  width: 100%;
  max-width: 720px;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media (max-width: 960px) {
    width: 100%;
    max-width: 450px;
    margin: 1rem 0;
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const Wizard = () => {
  const [currentCategory] = useState('Developers')

  return (
    <StyledWizard>
      <CardWrapper>
        {links
          .filter(category => {
            return category.name === currentCategory
          })
          .map(category => {
            return category.sublinks.map((sublink, i) => {
              return (
                <InlineCard
                  key={i}
                  title={sublink.title}
                  desc={sublink.description}
                  to={sublink.link}
                  tag={sublink.tag}
                  icon={sublink.icon}
                />
              )
            })
          })}
      </CardWrapper>
    </StyledWizard>
  )
}

export default Wizard
