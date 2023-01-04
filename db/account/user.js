const mongo = require('mongoose');

const user = mongo.Schema({
  email: String,
  name: String,
  displayName: String,
  uuid: String,
  password: String,
  pfp: String,
  pfp_id: String,
  banner: String,
  banner_id: String,
  recEmail: String,
  session: String,
  apiKey: String,
  bio: String,
  google_backup: String,
  links: [
    {
      user: {
        type: mongo.Types.ObjectId,
        ref: 'user'
      },
      uuid: String,
      date: Date
    }
  ],
  socials: Array,
  connectedUser: [
    {
      user: {
        type: mongo.Types.ObjectId,
        ref: 'user'
      },
      uuid: String,
      date: Date
    }
  ],
  views: [
    {
      user: {
        type: mongo.Types.ObjectId,
        ref: 'user'
      },
      uuid: String,
      date: Date
    }
  ],
  linklimit: String,
  url: String,
  location: String,
  theme: String,
  nameHistory: Array,
  verified: Boolean,
  vrverified: Boolean,
  ogname: Boolean,
  blocked: Boolean,
  pro: Boolean,
  TFA: Boolean,
  pronouns: String,
  staff: Boolean,
  hidden: Boolean,
  whitelist: Boolean,
  memorialize: Boolean,
  reason: String,
  nameToFind: String,
  createdIP: String,
  createdAt: String,
  last_login: String
});

module.exports = mongo.model('user', user);