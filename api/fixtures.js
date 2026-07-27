export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  // تاريخ اليوم تلقائياً
  const today = new Date().toISOString().split('T')[0];
  const { date = today, league_id = '1' } = req.query;

  try {
    const response = await fetch(
      `https://free-api-live-football-data.p.rapidapi.com/football-get-matches-by-league-and-date?leagueid=${league_id}&date=${date}`,
      {
        headers: {
          'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com',
          'x-rapidapi-key': process.env.FOOTBALL_API_KEY,
        },
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'فشل جلب المباريات' });
  }
}
