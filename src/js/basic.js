export default function validatePhone(phone) {
  const number = phone.replace(/[^\d]/g, '');

  if (number.length === 11) {
    return number.replace(/(^\d{1})/, '+7');
  }
  return number.replace(/(^\d{1})/, '+8');
}
