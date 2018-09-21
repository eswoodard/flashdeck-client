export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value =>
  value.trim() !== '' ? undefined : 'Cannot be Empty';