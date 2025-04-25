import React, { useState } from 'react';
import styled from 'styled-components';

// Avatar Image URL (You can replace this with dynamic data)
const avatarUrl = 'contact.png'; // Default avatar

// Dynamic Form Fields (this can be updated easily)
const formFields = [
  { name: 'name', type: 'text', label: 'Name' },
  { name: 'email', type: 'email', label: 'Email' },
  { name: 'message', type: 'textarea', label: 'Message' }
];

const ContactPage = ({ avatar }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send form data to Formspree
      const response = await fetch("https://formspree.io/f/xpwdwqgv", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      // Check if the request was successful
      if (response.ok) {
        setIsSubmitted(true);
        setSubmissionError(null); // Clear any previous errors
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setSubmissionError("There was an error submitting the form. Please try again.");
      console.error("Form submission error: ", error);
    }
  };

  return (
    <Container>
      <Content>
        <FormSection>
          <h2>Contact Me</h2>
          {isSubmitted ? (
            <ThankYouMessage>
              <IconWrapper>
                <CheckIcon>✔</CheckIcon>
              </IconWrapper>
              <MessageText>
                <h3>Thank you for reaching out, {formData.name}!</h3>
                <p>I'll get back to you soon.</p>
              </MessageText>
            </ThankYouMessage>
          ) : (
            <>
              {submissionError && <ErrorMessage>{submissionError}</ErrorMessage>}
              <Form onSubmit={handleSubmit}>
                {formFields.map((field) => (
                  <InputGroup key={field.name}>
                    <Label htmlFor={field.name}>{field.label}:</Label>
                    {field.type === 'textarea' ? (
                      <TextArea
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                      />
                    ) : (
                      <Input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                      />
                    )}
                  </InputGroup>
                ))}
                <SubmitButton type="submit">Submit</SubmitButton>
              </Form>
            </>
          )}
        </FormSection>

        {/* Avatar on the right side */}
        <Avatar src={avatar || avatarUrl} alt="Avatar" />
      </Content>
    </Container>
  );
};

export default ContactPage;

// Styled Components

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: white;
  padding-top: 100px; /* Add padding-top to avoid overlap with header */
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FormSection = styled.div`
  max-width: 600px;
  width: 100%;
  text-align: left;

  h2 {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ThankYouMessage = styled.div`
  background-color: #4caf50;
  padding: 2rem;
  border-radius: 12px;
  color: white;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const IconWrapper = styled.div`
  margin-right: 1.5rem;
  font-size: 2.5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckIcon = styled.div`
  background-color: #3e8e41;
  border-radius: 50%;
  padding: 10px;
  display: inline-block;
`;

const MessageText = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #f1f1f1;
  }
`;

const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: white;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  color: white;
  background-color: #333;
  border-color: #444;

  &::placeholder {
    color: #bbb;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  color: white;
  background-color: #333;
  border-color: #444;

  &::placeholder {
    color: #bbb;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (min-width: 600px) {
    width: 150px;
    margin: 0 auto;
  }
`;

const Avatar = styled.img`
  width: 100%;
  max-width: 300px;  /* You can adjust this value to limit the size */
  height: auto;      /* Maintain the aspect ratio */
  margin-left: 2rem;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
    max-width: 200px; /* Adjust max-width for smaller screens */
  }
`;
