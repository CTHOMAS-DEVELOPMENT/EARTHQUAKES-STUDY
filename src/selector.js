export default ({ articles, text, sortBy }) => {
  const filteredList = articles
    .filter(obj => {
      const lCaseDesc = obj.title.toLowerCase();
      const lCaseSrch = text.toLowerCase();
      const textMatch = lCaseDesc.includes(lCaseSrch) ? true : false;
      return textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt > b.createdAt ? 1 : -1;
      } else {
        return a.title > b.title ? 1 : -1;
      }
    });
  return { articles: filteredList, text: text, sortBy: sortBy };
};
