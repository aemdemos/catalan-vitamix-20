export default function decorate(block) {
  block.querySelectorAll('.cards > div').forEach((card) => {
    card.classList.add('card');
    card.querySelector('picture').classList.add('card-img');
    const textDiv = card.querySelectorAll('div')[1];
    textDiv.classList.add('card-text');

    const firstParagraph = textDiv.querySelector('p');
    firstParagraph.classList.add('card-description');

    const title = textDiv.querySelector('h3');
    title.classList.add('card-title');

    const link = textDiv.querySelector('p a');
    link.classList.add('card-link');
  });
}
