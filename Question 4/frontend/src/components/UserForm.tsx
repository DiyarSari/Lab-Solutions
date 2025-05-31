import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';

interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const UserForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const navigate = useNavigate();
  const { action, id } = useParams();

  useEffect(() => {
    if ((action === 'edit' || action === 'delete') && id) {
      fetchUser(id);
    }
  }, [action, id]);

  const fetchUser = async (userId: string) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
      navigate('/');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (action === 'new') {
        await axios.post('http://localhost:8080/api/users', user);
      } else if (action === 'edit') {
        await axios.put(`http://localhost:8080/api/users/${id}`, user);
      } else if (action === 'delete') {
        await axios.delete(`http://localhost:8080/api/users/${id}`);
      }
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const getActionButtonText = () => {
    switch (action) {
      case 'new':
        return 'Create';
      case 'edit':
        return 'Save';
      case 'delete':
        return 'Delete';
      default:
        return 'Submit';
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {action?.charAt(0).toUpperCase() + action?.slice(1)} User
      </Typography>
      <form>
        <Stack spacing={3}>
          <TextField
            label="First Name"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
            disabled={action === 'delete'}
            fullWidth
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
            disabled={action === 'delete'}
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            disabled={action === 'delete'}
            fullWidth
          />
          <TextField
            label="Phone"
            name="phone"
            value={user.phone}
            onChange={handleInputChange}
            disabled={action === 'delete'}
            fullWidth
          />
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color={action === 'delete' ? 'error' : 'primary'}
              onClick={handleSubmit}
            >
              {getActionButtonText()}
            </Button>
            <Button variant="outlined" onClick={() => navigate('/')}>
              Back
            </Button>
          </Stack>
        </Stack>
      </form>
    </Container>
  );
};

export default UserForm; 