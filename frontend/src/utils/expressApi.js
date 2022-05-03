const expressNewsHeadlines = async () => {
  let res = await fetch('http://localhost:4000/getArticles');

  let data = await res.json();

  return data;
};

const expressNewsContent = async () => {
  let res = await fetch('http://localhost:4000/getArticleContent');

  let data = await res.json();

  return data;
};

export { expressNewsHeadlines, expressNewsContent };
