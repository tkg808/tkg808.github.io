/* == Functions == */

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

function toggleName()
{
  const headerNameEl = document.getElementsByClassName("header-name-container")[0];
  const landingNameEl = document.getElementsByClassName("landing-name-container")[0];

  // console.log(headerNameEl.getBoundingClientRect());
  // console.log(landingNameEl.getBoundingClientRect());

  // const windowHeight = window.innerHeight;
  const landingNameTop = landingNameEl.getBoundingClientRect().top;

  // Height of landingNameTop when headerNameEl should be visible.
  if (landingNameTop <= 0)
  {
    headerNameEl.classList.add("active");
  }
  else
  {
    headerNameEl.classList.remove("active");
  }
}

/* == Listeners == */

window.addEventListener("scroll", toggleName);

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