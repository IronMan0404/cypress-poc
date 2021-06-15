import { homePage } from '../pageObject/homepage'

describe('Login Suite', () => {
  const HP = new homePage;

  beforeEach(async () => {
    console.log('running the spec');
  })

  it('should pass', () => {
    HP.login();
    console.log('pass');
  });
});
