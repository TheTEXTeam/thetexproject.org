export function formatDate(inputDate) {
  // 2022-07-01T00:00:00.000Z

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(inputDate);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

export function filterArticles(allArticles, filterType, filterProp) {
  if (filterType === "recent") {
    return allArticles.sort((a, b) => Date.parse(b.data.pubDate) - Date.parse(a.data.pubDate));
  } else if (filterType === "oldest") {
    return allArticles.sort((a, b) => Date.parse(a.data.pubDate) - Date.parse(b.data.pubDate));
  } else if (filterType === "topic") {
    return allArticles.filter((article) => article.data.topics.includes(filterProp));
  } else if (filterType === "author") {
    return allArticles.filter((article) => article.data.author === filterProp);
  }
}

export function sortChapters(tutorial) {
  return tutorial.sort((a, b) => a.data.order - b.data.order);
}
