/** @jsxImportSource theme-ui */
import { jsx,Box, Button, Label, Input, Textarea, Alert, Close } from 'theme-ui';import {useState} from "react";

const ContactForm = () => {
    const [showMessage, setShowMessage] = useState(false);

    const toggleShowMessage = () => {
        setShowMessage(prev => !prev);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {};
        Array.from(e.currentTarget.elements).forEach(field => {
            if ( !field.name ) return;
            formData[field.name] = field.value;
        })

        try {
            fetch('api/contact', {
            'method': 'POST',
            'body': JSON.stringify(formData)
            }
        ).then(res => toggleShowMessage())
        }catch (error) {
            alert(error);
        }
    }
    const sendMail = async (data) => {
        try {
          await fetch("/api/contact", {
            "method": "POST",
            "headers": { "content-type": "application/json" },
            "body": JSON.stringify(data)
          })

                alert("successful");
          setTimeout(() => reset(), 2000);
        } catch (error) {
            // toast error message. whatever you wish
            alert(error);
        }

      }
    return (
        <Box as='form' onSubmit={handleSubmit} >
            <Label htmlFor="fullname">FULL NAME</Label>
              <Input name="fullname" id="fullname" mb={3} required />
              <Label htmlFor="email">EMAIL</Label>
              <Input type="email" name="email" id="email" mb={3} required />
            <Label htmlFor="message">MESSAGE</Label>
            <Textarea name="message" rows={4} id="message" mb={3} required />
            <Button type="submit">SUBMIT</Button>
            {
                showMessage &&
                <Alert>
                    Message Sent Successfully!
                    <Close ml="auto" mr={-2} onClick={toggleShowMessage} sx={{cursor: 'pointer'}}/>
                </Alert>
            }
        </Box>

    )
};

export default ContactForm;