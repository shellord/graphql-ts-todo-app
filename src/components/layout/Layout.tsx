import { Container } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

import Header from '@/components/common/Header'

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}

export default Layout
