export const normalizeResponseErrors = res => {
  if(!res.ok) {
    if (
      res.headers.has('content-type') &&
      res.headers.get('content-type').startsWith('application/jason')
      ){
        return res.json().then(err => Promise.reject(err));
      }
      return Promise.reject({
        code: res.status,
        message: res.status.Text
      });
  }
  return res;
};