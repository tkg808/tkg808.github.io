/* == Functions == */

// On click and hover.
function createTooltip(link, text)
{
  const tooltipEl = document.createElement("div");
  tooltipEl.className = 'tooltip';

  tooltipEl.appendChild(document.createTextNode(text));
  const firstChild = document.body.firstChild;

  firstChild.parentNode.insertBefore(tooltipEl, firstChild);

  // Handles positioning.
  const padding = 15;
  const linkProps = link.getBoundingClientRect();
  const tooltipProps = tooltipEl.getBoundingClientRect();
  const topPos = linkProps.top - (tooltipProps.height + padding);
  tooltipEl.setAttribute('style', `top:${topPos}px;left:${linkProps.left}px;`);

  link.addEventListener('mouseout', () =>
  {
    document.querySelector(".tooltip").remove();
  });
}

// On click.
function copyToClipboard(element, info)
{
  // Copy argument to clipboard.
  navigator.clipboard.writeText(info);

  createTooltip(element, "Copied to clipboard!");

  setTimeout(() => document.querySelector(".tooltip").remove(), 2000);
}

// Header name animation.
function toggleName()
{
  const headerNameEl = document.getElementsByClassName("header-name-container")[0];
  const landingNameEl = document.getElementsByClassName("landing-name-container")[0];

  const landingNameTop = landingNameEl.getBoundingClientRect().top;

  // Height of landingNameTop when headerNameEl should be visible.
  (landingNameTop <= 0 ?
    headerNameEl.classList.add("active") :
    headerNameEl.classList.remove("active"));
}

/* == Operations == */

// Applies smooth scroll behavior to all nav-links.
document.querySelectorAll('a[href^="#"]').forEach((anchor) =>
{
  anchor.addEventListener('click', function (event)
  {
    event.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('footer a').forEach((icon) =>
{
  icon.addEventListener('mouseover', () =>
  {
    createTooltip(icon, icon.getAttribute('hoverTip'));
  });

  if (icon.hasAttribute('id'))
  {
    icon.addEventListener('click', () =>
    {
      // Removes hover tip before showing click tip.
      document.querySelector('.tooltip').remove();

      copyToClipboard(icon, icon.getAttribute('hoverTip'));
    });
  }
});

/* == Listeners == */

window.addEventListener("scroll", toggleName);