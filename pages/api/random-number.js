export default function handler(req, res) {
    const randomNumber = parseInt(Math.random() * 100);
    res.status(200).json(randomNumber);
}
  