import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  twitBot: service(),

  actions: {
   searchTweets() {
     this.twitBot.searchTweets().then(() => {
       return 'Success'
     }, (err) => {
      let error = err.message || err;
      console.log(error);
     });
   }
  }
    
});


