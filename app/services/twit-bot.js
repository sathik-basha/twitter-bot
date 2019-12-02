import Service from '@ember/service';
import Twitter from 'twit';

export default Service.extend({
 init() {
   this._super(...arguments);
    var twit = new Twitter({
      consumer_key: 'xxxx',
      consumer_secret: 'xxx',
      access_token: 'xxxx',
      access_token_secret: 'xxxx'
    });
    this.set('twit', twit);
  },

  searchTweets() {
    let qParams = {
      q: '#emberjs, #emberJs, #emberJS, #EmberJs, #Emberjs, #EMBERJS',
      result_type: 'recent',
      lang: 'en'
    };
    this.get('twit').get('search/tweets', qParams, async (err, data, response ) => {
      if (!err) {
        let retweetId = data.statuses[0].id_str;
        this.get('twit').post('statuses/retweet/:id', { id: retweetId}, (err, response) => {
          if (!err) {
            let date = new Date();
            console.log(`Retweeted :) at ${date.toLocaleString()}`);
          }
        });
      }
    });
  }
});
