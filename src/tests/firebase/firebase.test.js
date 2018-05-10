import databese from '../../firebase/firebase';

test('should write and read from firebase', (done) => {
  const data = 'Test';
  databese
    .ref('test')
    .set({ data })
    .then(() => databese.ref('test').once('value'))
    .then((snapshot) => {
      expect(snapshot.val()).toEqual({ data });
      done();
    });
});
