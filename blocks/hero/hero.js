export default function decorate(block) {
  // Adding necessary classes to elements
  const heroInnerDiv = block.querySelector('div > div');
  const picture = block.querySelector('picture');
  const img = block.querySelector('img');
  const introductionText = block.querySelector('p:nth-of-type(2)');
  const headline = block.querySelector('h1');
  const exploreText = block.querySelector('p:nth-of-type(3)');

  // Adding classes for styling
  block.classList.add('hero');
  heroInnerDiv.classList.add('hero-inner');
  picture.classList.add('hero-picture');
  img.classList.add('hero-image');
  introductionText.classList.add('hero-introduction');
  headline.classList.add('hero-headline');
  exploreText.classList.add('hero-explore');

  // Splitting headline to separate lines
  const headlineParts = headline.innerHTML.split('So you can');
  headline.innerHTML = `${headlineParts[0]}<br>So you can<br><strong><em>${headlineParts[1].trim()}</em></strong>`;
}
