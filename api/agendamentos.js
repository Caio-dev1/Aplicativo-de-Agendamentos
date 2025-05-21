const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'api', 'db.json');
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  if (req.method === 'GET') {
    res.status(200).json(data.agendamentos || []);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
