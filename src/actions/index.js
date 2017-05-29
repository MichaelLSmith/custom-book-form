export const CREATE_BOOK = 'create_book'

export function createBook (values) {
  return {
    type: CREATE_BOOK,
    payload: values
  }
}
