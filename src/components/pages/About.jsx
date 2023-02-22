import { Container, Heading, Text, Image, Table, Thead, Tbody, Tr, Th, Td, TableCaption, Box, } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { InfoText } from '../../styles/Buttons'
import bmi from '../../assets/bmi.jpg'

function About() {
  return (
    <Container maxW='container.xl' my={10}>
      <Heading size='lg' mb={5}>What is the body mass index (BMI)?</Heading>
      <Box display={{ lg: 'flex' }} alignItems='center' justifyContent="center">
        <Image src={bmi} alt='' mr={{ lg: 5 }} />
        <Box>
          <InfoText>Vücut kitle indeksi (BMI), kilonuzun sağlıklı olup olmadığını anlamak için boyunuzu ve kilonuzu kullanan bir ölçüdür.</InfoText>
          <InfoText>BMI hesaplaması, bir yetişkinin kilogram cinsinden ağırlığını, metre cinsinden boyunun karesine böler. Örneğin, 25'lik bir BMI, 25kg/m2 anlamına gelir.</InfoText>
        </Box>
      </Box>
      <Heading size='md' my={5}>BMI aralıkları</Heading>
      <InfoText>Çoğu yetişkin için ideal bir BMI 18,5 ila 24,9 aralığındadır.</InfoText>
      <InfoText>2 ila 18 yaş arasındaki çocuklar ve gençler için BMI hesaplamasında boy ve kilonun yanı sıra yaş ve cinsiyet de dikkate alınır.</InfoText>
      <InfoText>BMI'niz ise:</InfoText>
      <Table variant='striped' p={5} my={5} colorScheme='gray' borderWidth='1px' borderRadius='lg'>
        <TableCaption>
          BMI aralığına göre ağırlık durumları</TableCaption>
        <Thead>
          <Tr>
            <Th>BMI</Th>
            <Th>Ağırlık Durumu</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>18.5'in altında</Td>
            <Td>Zayıf</Td>
          </Tr>
          <Tr>
            <Td>18.5 – 24.9</Td>
            <Td>Sağlıklı kilo</Td>
          </Tr>
          <Tr>
            <Td>25.0 – 29.9</Td>
            <Td>Kilolu</Td>
          </Tr>
          <Tr>
            <Td>30.0 ve Üzeri</Td>
            <Td>Obezite</Td>
          </Tr>
        </Tbody>
      </Table>
      <InfoText>BMI'nizi hesaplamak istiyorsanız, tıklayın &#128073; <Link to='/'><Text as='u' color='lightseagreen'>Vücut Kitle Endeksi(BMI) Hesaplama</Text></Link> </InfoText>

    </Container>
  )
}

export default About;