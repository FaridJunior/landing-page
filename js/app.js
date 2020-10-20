document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.documentElement;
  const main = document.querySelector("main");
  const navbarMenu = document.querySelector(".navbar__menu");
  const navbarList = document.querySelector("#navbar__list");
  const scrollToTopBtn = document.querySelector("#scrollToTopBtn");
  let sections; // to save sections node list after creation
  let menuLinks; // to save menulinks node list after creation
  let hideScoralbarTimeout;

  // start hellper functions
  const scrollToTop = () => {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= -window.innerHeight * 0.1 && // .2  to still active the section after scorlinng  it by .4 of window height
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) * 1.5 // 1.5 to set to active if only half of the section is apperared
    );
  }

  const handleScroll = () => {
    navbarMenu.style.display = "block";
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    scrollToTopBtn.style.opacity = rootElement.scrollTop / scrollTotal;
    if (rootElement.scrollTop / scrollTotal > 0.15) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
    setTimeout(setActiveSection, 0);

    //hide nav bar when not scorling
    clearTimeout(hideScoralbarTimeout);
    hideScoralbarTimeout = setTimeout(() => {
      navbarMenu.style.display = "none";
    }, 5000);
  };
  // end helper functions

  // start main functions
  const addSectionToMain = (id, header, paragraphs) => {
    const section = document.createElement("section");
    section.setAttribute("id", `section${id}`);
    // default active class
    if (id === 0) {
      section.classList.add("section__active");
    }

    const landingContainer = document.createElement("div");
    landingContainer.classList.add("landing__container");

    const h1 = document.createElement("h2");
    h1.textContent = header;

    landingContainer.appendChild(h1);
    paragraphs.forEach((pText) => {
      const p = document.createElement("p");
      p.textContent = pText;
      landingContainer.appendChild(p);
    });
    section.append(landingContainer);
    main.appendChild(section);
    // update sections array
    sections = document.querySelectorAll("section");
  };

  const setMainHeader = (headerText) => {
    const header = document.createElement("header");
    header.classList.add("main_hero");
    const h1 = document.createElement("h1");
    h1.textContent = headerText;
    header.appendChild(h1);
    main.append(header);
  };
  // build the nav
  const setNavbarMenu = () => {
    sectionsHeaders = document.querySelectorAll(
      "section > .landing__container > h2"
    );
    sectionsHeaders.forEach((sectionHeader, index) => {
      const sectionName = sectionHeader.textContent;
      const li = document.createElement("li");
      const menuLink = document.createElement("a");
      const sectionLink = `#section${index}`;

      menuLink.classList.add("menu__link");
      menuLink.textContent = sectionName;
      menuLink.setAttribute("href", sectionLink);

      li.appendChild(menuLink);
      navbarList.appendChild(li);

      // Scroll to section on link click
      menuLink.addEventListener("click", (e) => {
        e.preventDefault();
        document
          .querySelector(sectionLink)
          .scrollIntoView({ block: "start", behavior: "smooth" });
      });
    });
    menuLinks = document.querySelectorAll(".menu__link");
  };
  // fun to set all page components
  const setPage = () => {
    setMainHeader("Landing Page");
    sectionsData.forEach((section, index) => {
      setTimeout(
        () =>
          addSectionToMain((id = index), section.header, section.paragraphs),
        0
      );
    });
    setTimeout(() => setNavbarMenu(), 0);
  };

  // Add class 'active' to section when near top of viewport
  const setActiveSection = () => {
    sections.forEach((section, index) => {
      const inViewPort = isInViewport(section);
      if (inViewPort) {
        section.classList.add("section__active");
        menuLinks[index].classList.add("menu__link_active");
      } else {
        section.classList.remove("section__active");
        menuLinks[index].classList.remove("menu__link_active");
      }
    });
  };

  setPage();
  // Begin Events
  scrollToTopBtn.addEventListener("click", scrollToTop);
  document.addEventListener("scroll", handleScroll);
});

// sections data may it comes from api
const sectionsData = [
  {
    header: "Section 1",
    paragraphs: [
      ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
    fermentum metus faucibus lectus pharetra dapibus. Suspendisse
    potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
    lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
    convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
    eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
    nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
    lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
    tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
    vitae elit. Integer nec libero venenatis libero ultricies molestie
    semper in tellus. Sed congue et odio sed euismod.`,
      `
    Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
    gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
    Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
    consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
    elementum tortor mollis non.
    `,
    ],
  },
  {
    header: "Section 2",
    paragraphs: [
      ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
    fermentum metus faucibus lectus pharetra dapibus. Suspendisse
    potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
    lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
    convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
    eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
    nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
    lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
    tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
    vitae elit. Integer nec libero venenatis libero ultricies molestie
    semper in tellus. Sed congue et odio sed euismod.`,
      `
    Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
    gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
    Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
    consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
    elementum tortor mollis non.
    `,
    ],
  },
  {
    header: "Section 3",
    paragraphs: [
      ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
    fermentum metus faucibus lectus pharetra dapibus. Suspendisse
    potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
    lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
    convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
    eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
    nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
    lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
    tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
    vitae elit. Integer nec libero venenatis libero ultricies molestie
    semper in tellus. Sed congue et odio sed euismod.`,
      `
    Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
    gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
    Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
    consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
    elementum tortor mollis non.
    `,
    ],
  },
  {
    header: "Section 4",
    paragraphs: [
      ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
    fermentum metus faucibus lectus pharetra dapibus. Suspendisse
    potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
    lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
    convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
    eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
    nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
    lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
    tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
    vitae elit. Integer nec libero venenatis libero ultricies molestie
    semper in tellus. Sed congue et odio sed euismod.`,
      `
    Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
    gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
    Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
    consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
    elementum tortor mollis non.
    `,
    ],
  },
  {
    header: "Section 5",
    paragraphs: [
      ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
    fermentum metus faucibus lectus pharetra dapibus. Suspendisse
    potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
    lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
    convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
    eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
    nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
    lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
    tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
    vitae elit. Integer nec libero venenatis libero ultricies molestie
    semper in tellus. Sed congue et odio sed euismod.`,
      `
    Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
    gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
    Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
    consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
    elementum tortor mollis non.
    `,
    ],
  },
];
