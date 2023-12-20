import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import {
  Container,
  Form,
  InputGroup,
  Button,
  Row,
  Col,
  Modal,
} from 'react-bootstrap';

function Home(params) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState({});
  const [dataa, setData] = useState();
  const [landingPage, setLandingPage] = useState(false);
  const [landingPageLogin, setLandingPageLogin] = useState(true);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const changeTextUsername = (event) => {
    setUserName(event.target.value);
  };
  const changeTextPassword = (event) => {
    setPassword(event.target.value);
  };
  const synchData = () => {
    if (userName == 'ricky' && password == '123') {
      setLandingPage(true);
      setLandingPageLogin(false);
      fetch('http://universities.hipolabs.com/search?country=Indonesia')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error));
    } else {
      console.log('user salah', userName, password);
    }
  };
  console.log('ini daata', dataa);
  return (
    <>
      <Container fluid>
        {landingPageLogin == true ? (
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>userName</Form.Label>
              <Form.Control
                type='username'
                placeholder='Enter username'
                onChange={(event) => changeTextUsername(event)}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                onChange={(event) => changeTextPassword(event)}
              />
            </Form.Group>
            <Button variant='primary' onClick={synchData}>
              Login
            </Button>
          </Form>
        ) : (
          ''
        )}

        {landingPage == true ? (
          <Container>
            Welcome , {userName}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Universitas</th>
                  <th>Webiste</th>
                </tr>
              </thead>
              <tbody>
                {dataa != undefined
                  ? dataa.map((data, index) => {
                      return (
                        <>
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              <p
                                // variant='danger'
                                ref={target}
                                onClick={() => setShow(!show)}
                              >
                                {data.name}
                              </p>
                            </td>
                            <td>{data.domains[0]}</td>
                          </tr>
                        </>
                      );
                    })
                  : 'data tidak ada'}
              </tbody>
            </Table>
          </Container>
        ) : (
          ''
        )}
        <div
          className='modal show'
          style={{ display: 'block', position: 'initial' }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant='secondary'>Close</Button>
              <Button variant='primary'>Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </Container>
    </>
  );
}

export default Home;
