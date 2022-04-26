/* == Functions == */

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
}

function copyToClipboard()
{
  const emailEl = document.getElementById("email-icon");

  // Copy argument to clipboard.
  navigator.clipboard.writeText("tgomes808@yahoo.com");

  createTooltip(emailEl, "Email copied to clipboard!");

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

/* == Listeners == */

window.addEventListener("scroll", toggleName);
console.log(document.links);