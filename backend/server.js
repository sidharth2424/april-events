const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Base route (just for testing)
app.get('/', (req, res) => {
  res.send('🎉 Welcome to April Events API');
});

// ✅ 🔗 Use event routes here
const eventRoutes = require('./routes/events');
app.use('/api/events', eventRoutes);

const authRoutes = require('./routes/auth');
app.use('/api/users', authRoutes);



// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
