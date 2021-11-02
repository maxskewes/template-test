import React, { useState } from 'react';
import {
  Heading,
  Text,
  Box,
  Input,
  Divider,
  Button,
  FormControl,
  FormLabel,
  Link,
  ButtonGroup,
  SimpleGrid,
  GridItem,
  Select,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { stateProvOptions } from '../components/StateProvOptions';

export default function AddContact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [aptUnit, setAptUnit] = useState('');
  const [city, setCity] = useState('');
  const [stateProv, setStateProv] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleNext = event => {
    event.preventDefault();
    // this is where the data would be sent to backend
    console.log('Information submitted:');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Street Address:', streetAddress);
    console.log('Apt / Unit:', aptUnit);
    console.log('City:', city);
    console.log('State / Province:', stateProv);
    console.log('Postal Code:', postalCode);
  };

  return (
    <Box bg="#FFFFFF" m={10}>
      <Heading variant="h1">Add Contact Information</Heading>
      <Text as="i" variant="labelBlack">
        Contact info on a resume is essential for employers to contact
        you.&nbsp;
        <b>An email and phone number are required.</b>
      </Text>
      <form action="submit">
        <SimpleGrid
          w="full"
          columns={2}
          rows={2}
          columnGap={6}
          rowGap={8}
          mt={10}
          mb={14}
        >
          <GridItem colSpan={1}>
            <FormControl name="firstName">
              <FormLabel>First&nbsp;Name</FormLabel>
              <Input
                isRequired
                type="text"
                id="first_name"
                placeholder="Ignatius J."
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl name="lastName">
              <FormLabel>Last&nbsp;Name</FormLabel>
              <Input
                isRequired
                type="text"
                id="last_name"
                placeholder="Reilly"
                value={lastName}
                onChange={({ target }) => setLastName(target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl name="email">
              <FormLabel>Email</FormLabel>
              <Input
                isRequired
                type="email"
                id="email"
                placeholder="you@email.com"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl name="phoneNumber">
              <FormLabel>Phone&nbsp;Number</FormLabel>
              <Input
                isRequired
                type="tel"
                id="phone_number"
                placeholder="555 123-4567"
                value={phoneNumber}
                onChange={({ target }) => setPhoneNumber(target.value)}
              />
            </FormControl>
          </GridItem>
        </SimpleGrid>
        <Heading variant="h2">Location</Heading>
        <SimpleGrid
          w="full"
          columns={4}
          rows={2}
          columnGap={6}
          rowGap={8}
          mt={10}
          mb={14}
        >
          <GridItem colSpan={2}>
            <FormControl name="streetAddress">
              <FormLabel>
                Street&nbsp;Address&nbsp;
                <span style={{ color: '#989898' }}>&nbsp;Optional</span>
              </FormLabel>
              <Input
                type="text"
                id="street_address"
                placeholder="1234 SE Fill St"
                value={streetAddress}
                onChange={({ target }) => setStreetAddress(target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl name="aptUnit">
              <FormLabel>
                Apt&nbsp;/&nbsp;Unit&nbsp;
                <span style={{ color: '#989898' }}>&nbsp;Optional</span>
              </FormLabel>
              <Input
                type="text"
                id="apt_unit"
                placeholder="Suite X"
                value={aptUnit}
                onChange={({ target }) => setAptUnit(target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl name="city">
              <FormLabel>City</FormLabel>
              <Input
                isRequired
                type="text"
                id="city"
                placeholder="Popularity Island"
                value={city}
                onChange={({ target }) => setCity(target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl name='stateProv'>
              <FormLabel>State&nbsp;/&nbsp;Province</FormLabel>
              <Select
                onChange={e => {
                  const stateProv = e.target.value;
                  setStateProv(stateProv);
                }}
                id='state_prov'
                placeholder="Select..."
              >
                  {stateProvOptions.map(item => (
                    <option key={item.value} value={item.value}>
                    {item.name} - {item.value}
                    </option>
                ))}
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl name="postalCode">
              <FormLabel>Postal&nbsp;Code</FormLabel>
              <Input
                type="number"
                id="postal_code"
                placeholder="98765"
                value={postalCode}
                onChange={({ target }) => setPostalCode(target.value)}
              />
            </FormControl>
          </GridItem>
        </SimpleGrid>
        <Text as="i" variant="italic">
          Do you live outside the United States?&nbsp;
          <Link href='#'>
            <b style={{ color: 'blue', textDecorationLine: 'underline' }}>
              &nbsp;Add a country code to your location
            </b>
          </Link>
        </Text>
        <Divider mt={12} mb={10} />
        <ButtonGroup
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button variant="outlined" leftIcon={<ChevronLeftIcon />}>
            Previous
          </Button>
          <Button
            type="submit"
            variant="solid"
            rightIcon={<ChevronRightIcon />}
            onClick={handleNext}
          >
            Next
          </Button>
        </ButtonGroup>
      </form>
    </Box>
  );
}
