function createTooltip(link)
{
  const tooltipEl = document.createElement("div");
  tooltipEl.className = 'tooltip';

  tooltipEl.appendChild(document.createTextNode("Email copied to clipboard!"));

  const firstChild = document.body.firstChild;

  firstChild.parentNode.insertBefore(tooltipEl, firstChild);

  // Handles positioning.
  const padding = 15;
  const linkProps = link.getBoundingClientRect();
  const tooltipProps = tooltipEl.getBoundingClientRect();
  const topPos = linkProps.top - (tooltipProps.height + padding);
  tooltipEl.setAttribute('style', `top:${topPos}px;left:${linkProps.left}px;`);
}

function copyToClipboard()
{
  const emailEl = document.getElementById("email-icon");

  // Copy to clipboard.
  navigator.clipboard.writeText("tgomes808@yahoo.com");

  createTooltip(emailEl);

  setTimeout(() => document.querySelector(".tooltip").remove(), 2000);
}

