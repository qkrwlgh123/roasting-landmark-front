export const convertCreatedDate = (date: string) => {
  // 주어진 날짜 문자열을 JavaScript Date 객체로 파싱
  const parsedDate = new Date(date);

  // 원하는 형식으로 날짜와 시간을 가져옴
  const year = parsedDate.getFullYear(); // 연도 (예: 2022)
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0'); // 월 (01부터 12까지)
  const day = String(parsedDate.getDate()).padStart(2, '0'); // 일 (01부터 31까지)
  const hour = String(parsedDate.getHours()).padStart(2, '0'); // 시간 (00부터 23까지)
  const minute = String(parsedDate.getMinutes()).padStart(2, '0'); // 분 (00부터 59까지)

  // 원하는 형식으로 날짜 문자열 생성
  const formattedDate = `${year}-${month}-${day} ${hour}:${minute}`;

  return formattedDate;
};
