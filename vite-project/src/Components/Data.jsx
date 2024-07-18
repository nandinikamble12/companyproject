import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

function Data() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', contact: '', email: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch('https://backend-2lty.onrender.com/api/todos', {
          headers: {
            'authorization': `${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Invalid Token');
        }

        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        localStorage.removeItem('token');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleAddContact = async () => {
    const token = localStorage.getItem('token');
    if (isEditing) {
      const response = await fetch(`https://backend-2lty.onrender.com/api/todos/${contacts[currentIndex]._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `${token}`
        },
        body: JSON.stringify(newContact)
      });

      if (response.ok) {
        const updatedContact = await response.json();
        setContacts(contacts.map((contact, index) => (index === currentIndex ? updatedContact : contact)));
        setIsEditing(false);
        setNewContact({ name: '', contact: '', email: '' });
      }
    } else {
      const response = await fetch('https://backend-2lty.onrender.com/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `${token}`
        },
        body: JSON.stringify(newContact)
      });

      if (response.ok) {
        const newContactData = await response.json();
        setContacts([...contacts, newContactData]);
        setNewContact({ name: '', contact: '', email: '' });
      }
    }
  };

  const handleEditContact = (index) => {
    setIsEditing(true);
    setCurrentIndex(index);
    setNewContact(contacts[index]);
  };

  const handleDeleteContact = async (index) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`https://backend-2lty.onrender.com/api/todos/${contacts[index]._id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `${token}`
      }
    });

    if (response.ok) {
      setContacts(contacts.filter((_, i) => i !== index));
    }
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
  
    <div className="App">
       <button onClick={handleLogout} style={{float: 'right', margin: '10px'}}>Logout</button>
      <h1>Data Management table</h1>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newContact.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact contact"
          value={newContact.contact}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newContact.email}
          onChange={handleInputChange}
        />
        <button onClick={handleAddContact}>{isEditing ? 'Update' : 'Add'}</button>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.contact}</td>
              <td>{contact.email}</td>
              <td>
                <button onClick={() => handleEditContact(index)}>Edit</button>
                <button onClick={() => handleDeleteContact(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
     
    </div>
        
       
  )}

  export default Data;