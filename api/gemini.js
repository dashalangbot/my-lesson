export default async function handler(req, res) {
  // 1. Проверяем, что это POST запрос
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 2. Берем ключ из настроек Vercel (Environment Variables)
  const apiKey = process.env.GEMINI_API_KEY; 
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();

    // 3. Если Gemini вернул ошибку, передаем её фронтенду
    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Server Error', message: error.message });
  }
}
