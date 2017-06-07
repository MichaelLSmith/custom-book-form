//actions
export const CREATE_ORDER = 'create_order';

export function createOrder (values) {
  console.log('values in action creator', values);
  return {
    type: CREATE_ORDER,
    payload: values
  };
}
