//actions
export const CREATE_ORDER = 'create order';

export function createOrder (values) {
  console.log('values in action creator', values, CREATE_ORDER);
  return {
    type: CREATE_ORDER,
    payload: values
  };
}
