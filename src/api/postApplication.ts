const postApplication = async (
  shopId: string,
  noticeId: string,
  token?: string,
) => {
  const res = await fetch(
    `https://bootcamp-api.codeit.kr/api/0-1/the-julge/shops/${shopId}/notices/${noticeId}/applications`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    },
  );

  return res.json();
};

export default postApplication;
