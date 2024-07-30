export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const view = new DataView(new ArrayBuffer(length), 0, length);
  view.setInt8(position, value);
  return view;
}
