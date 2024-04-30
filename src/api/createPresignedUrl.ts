import { BASE_URL } from './api';

const uploadImageToS3 = async (url: string, fileObject: File) => {
  await fetch(url, {
    method: 'PUT',
    body: fileObject,
  });
};

const createPresignedUrl = async (fileObject: File, token: string) => {
  const response = await fetch(`${BASE_URL}/images`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name: fileObject.name }),
  });
  const result = await response.json();

  await uploadImageToS3(result.item.url, fileObject);

  const instanceUrl = new URL(result.item.url);
  const urlWithoutQueryString = instanceUrl.origin + instanceUrl.pathname;
  return urlWithoutQueryString;
};

export default createPresignedUrl;
