export function generatePrintLinksList() {
  const existingWrapper = document.querySelector(
    '.external-links-print-wrapper'
  );

  // Exit early if the user has already printed and generated the links
  if (existingWrapper) return;

  const mainContent = document.querySelector('main');
  if (!mainContent) return;

  const links = Array.from(mainContent.querySelectorAll('a'));
  if (!links.length) return;

  const linksWrapper = document.createElement('div');
  linksWrapper.className = 'external-links-print-wrapper';
  mainContent.appendChild(linksWrapper);

  const linksWrapperHeading = document.createElement('h2');
  linksWrapperHeading.innerHTML = 'Links';
  linksWrapper.appendChild(linksWrapperHeading);

  let counter = 1;
  const linksList = document.createElement('ol');

  links.forEach((link) => {
    // If link is external
    if (link.host !== window.location.host) {
      // Add an item numbers next to the source link
      const itemNumber = document.createElement('sup');
      itemNumber.className = 'external-link-print-superscript';
      itemNumber.innerHTML = `${counter}`;
      link.parentNode.insertBefore(itemNumber, link.nextSibling);

      // Add the link to footer:
      const item = document.createElement('li');
      item.innerHTML = link.href;
      linksList.appendChild(item);

      counter++;
    }
  });

  linksWrapper.appendChild(linksList);
}
