import '../component/club-list';
import '../component/search-bar';
import DataSource from "../data/data-source";

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const clubListElement = document.querySelector('club-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result)
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    clubListElement.clubs = results;
  };

  const fallbackResult = message => {
    clubListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;