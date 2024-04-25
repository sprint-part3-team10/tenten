const postApplication = async (shopId: string, noticeId: string) => {
  const res = await fetch(
    `https://bootcamp-api.codeit.kr/api/0-1/the-julge/shops/${shopId}/notices/${noticeId}/applications`,
    {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NmNhNmJmNC02YjZmLTRmNGYtOTczMS1iODM3Y2NkYmNiNmIiLCJpYXQiOjE3MTM5NjM4NjR9.y-COvjBCzlRxRV_gqBy6tVdYo8ALn4aTU9W5QxdyWQo',
      },
      cache: 'no-store',
    },
  );

  return res.json();
};

export default postApplication;
