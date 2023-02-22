import { HStack, Container, Text, Image, Box } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

function Nav() {
  return (
    <HStack spacing='24px' p={5} bg='lightseagreen' >
      <Container maxW='container.xl' display='flex' alignItems='center' justifyContent="space-between">
        <Link to="/"><Image width={'80px'} src={logo} alt='logo' /></Link>
        <Box display={{ lg: 'flex', md: 'flex' }} alignContent='center'>
          <Link to="/"><Text fontSize='lg' color='white' >&#10002; Vücut Kitle Endeksi Hesaplama</Text></Link>
          <Link to="/about"><Text mx={{ lg: '6' }} fontSize='lg' color='white' >🔎 Vücut Kitle Endeksi Nedir?</Text></Link>
          <Link to="/calculations"><Text fontSize='lg' color='white' >📊 Hesaplamalar</Text></Link>
        </Box>

      </Container>
    </HStack >
  )
}

export default Nav;