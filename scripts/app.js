/* == Variables == */

// const landingPage = document.getElementById("landing").getBoundingClientRect();
// const aboutPage = document.getElementById("about").getBoundingClientRect();
// const workPage = document.getElementById("work").getBoundingClientRect();
// console.log(landingPage);
// console.log(aboutPage);
// console.log(workPage);

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

let pages = [];
pages.push(document.getElementById("landing"));
pages.push(document.getElementById("about"));
pages.push(document.getElementById("work"));
console.log(pages);

let menu = [];
menu.push(document.getElementById("landing-link"));
menu.push(document.getElementById("about-link"));
menu.push(document.getElementById("work-link"));
console.log(menu);

window.onscroll = () =>
{
  pages.forEach((page) =>
  {

    let top = window.scrollY;
    let offset = page.offsetTop - 150;
    let height = page.offsetHeight;
    let id = page.getAttribute("id");
    console.log(id);

    if (top >= offset && top < offset + height)
    {
      menu.forEach((link) =>
      {
        console.log(link);
        link.classList.remove("current");
        if (id === "landing")
        {
          document
            .querySelector(`header a[href*="${id}"]`)
            .classList.add("current");
        }
        else
        {
          document
            .querySelector(`header div a[href*="${id}"]`)
            .classList.add("current");
        }
      });
    }
  });
};

console.log(document.getElementById("about").getBoundingClientRect());