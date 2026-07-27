export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { league_id = '1' } = req.query;

  try {
    const response = await fetch(
      `https://free-api-live-football-data.p.rapidapi.com/football-get-standing?leagueid=${league_id}`,
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
    res.status(500).json({ error: 'فشل جلب الترتيب' });
  }
}
