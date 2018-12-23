const getGigs = require('./getGigs');
const updatePage = require('./updatePage');
const generateCalendar = require('./generateCalendar');

const config = require('./config');

module.exports = async (req, res) => {
  if(req.method === 'HEAD') {
    return '';
  }

  const gigs = await getGigs();
  const calendar = await generateCalendar({ gigs });
  await updatePage(calendar);

  return 'done';
};
