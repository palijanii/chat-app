import React from 'react'
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import './App.scss';

const App = () => {
  return (
		<Container className="container">
			<div className="form-section">
				<Form onSubmit={e => e.preventDefault()}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Display Name</Form.Label>
						<Form.Control type="text" placeholder="Enter name" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Room</Form.Label>
						<Form.Control type="password" placeholder="Enter Room Number" />
					</Form.Group>
					<Button variant="contained" type="submit">
						Enter
					</Button>
				</Form>
			</div>
		</Container>
	);
}

export default App
