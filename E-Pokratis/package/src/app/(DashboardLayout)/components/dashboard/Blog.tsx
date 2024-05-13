import { useState } from 'react';
import {
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  Avatar
} from "@mui/material";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    setMessages([...messages, { text: newMessage, isUser: true }]);
    setNewMessage('');
  };

  return (
    <BlankCard>
      <CardContent sx={{ padding: 3, pt: 2 }}>
        <Grid container spacing={2}>
          {messages.map((message, index) => (
            <Grid item key={index} xs={12}>
              <Typography variant="body1" sx={{ padding: 1 }}>
                <Avatar sx={{ marginRight: 1, backgroundColor: message.isUser? 'blue' : 'green' }} />
                {message.text}
              </Typography>
            </Grid>
          ))}
          <Grid item xs={12}>
            <TextField
              fullWidth
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" onClick={handleSendMessage}>
              Send
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default ChatBox;