// import React, { useState } from 'react';
// import styled, { keyframes } from 'styled-components';

// const fadeIn = keyframes`
//   from { opacity: 0; }
//   to { opacity: 1; }
// `;

// const Container = styled.div`
//   max-width: 600px;
//   margin: 2rem auto;
//   padding: 2rem;
//   background: rgba(255, 255, 255, 0.9);
//   border-radius: 12px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
//   animation: ${fadeIn} 1s ease-in-out;
// `;

// const Header = styled.header`
//   background: rgba(34, 49, 63, 0.8);
//   color: white;
//   padding: 20px 0;
//   text-align: center;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   backdrop-filter: blur(10px);
// `;

// const FormGroup = styled.div`
//   margin-bottom: 1.5rem;
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 0.5rem;
//   font-weight: bold;
//   color: #22313F;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.8rem;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   transition: border-color 0.3s, box-shadow 0.3s;
//   &:focus {
//     border-color: #1ABC9C;
//     box-shadow: 0 0 8px rgba(26, 188, 156, 0.5);
//     outline: none;
//   }
// `;

// const Textarea = styled.textarea`
//   width: 100%;
//   padding: 0.8rem;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   transition: border-color 0.3s, box-shadow 0.3s;
//   resize: vertical;
//   min-height: 100px;
//   &:focus {
//     border-color: #1ABC9C;
//     box-shadow: 0 0 8px rgba(26, 188, 156, 0.5);
//     outline: none;
//   }
// `;

// const Button = styled.button`
//   background: linear-gradient(135deg, #1ABC9C, #16A085);
//   color: white;
//   border: none;
//   padding: 0.7rem;
//   border-radius: 8px;
//   cursor: pointer;
//   font-size: 1rem;
//   transition: background 0.3s, transform 0.3s;
//   width: 100%;
//   &:hover {
//     background: linear-gradient(135deg, #16A085, #1ABC9C);
//     transform: translateY(-2px);
//   }
// `;

// const SuccessMessage = styled.div`
//   margin-top: 1rem;
//   padding: 1rem;
//   background: #dff0d8;
//   color: #3c763d;
//   border: 1px solid #d6e9c6;
//   border-radius: 8px;
//   text-align: center;
//   display: ${props => (props.show ? 'block' : 'none')};
//   animation: ${fadeIn} 1s ease-in-out;
// `;

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     teamName: '',
//     captainName: '',
//     email: '',
//     phone: '',
//     players: ''
//   });
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form validation and submission logic here
//     setSuccess(true);
//   };

//   return (
//     <Container>
//       <Header>
//         <h1>XYZ Cricket Tournament Registration</h1>
//       </Header>
//       <form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label htmlFor="teamName">Team Name:</Label>
//           <Input type="text" id="teamName" name="teamName" value={formData.teamName} onChange={handleChange} required />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="captainName">Captain Name:</Label>
//           <Input type="text" id="captainName" name="captainName" value={formData.captainName} onChange={handleChange} required />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="email">Email:</Label>
//           <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="phone">Phone Number:</Label>
//           <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
//         </FormGroup>
//         <FormGroup>
//           <Label htmlFor="players">Player Names (comma separated):</Label>
//           <Textarea id="players" name="players" value={formData.players} onChange={handleChange} required />
//         </FormGroup>
//         <Button type="submit">Register</Button>
//       </form>
//       <SuccessMessage show={success}>Registration successful! We will contact you soon.</SuccessMessage>
//     </Container>
//   );
// };

// export default RegistrationForm;
