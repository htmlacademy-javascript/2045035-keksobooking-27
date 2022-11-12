const filterElement = document.querySelector('.map__filters');

const turnFilterOff = () => {
  filterElement.classList.add('.map__filters--disabled');
  [...filterElement.children].forEach((filter) => {
    filter.disabled = true;
  });
};

const turnFilterOn = () => {
  filterElement.classList.remove('.map__filters--disabled');
  [...filterElement.children].forEach((filter) => {
    filter.disabled = false;
  });
};

export { turnFilterOff, turnFilterOn };