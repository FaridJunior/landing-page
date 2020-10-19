document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.documentElement;
  const main = document.querySelector("main");
  const navbarList = document.querySelector("#navbar__list");
  const scrollToTopBtn = document.querySelector("#scrollToTopBtn");

  const addSectionToMain = (id, header, paragraphs) => {
    const section = document.createElement("section");
    section.setAttribute("id", `section${id}`);
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
  };

  const setMainHeader = (headerText) => {
    const header = document.createElement("header");
    header.classList.add("main_hero");
    const h1 = document.createElement("h1");
    h1.textContent = headerText;
    header.appendChild(h1);
    main.append(header);
  };
  const setNavbarMenu = () => {
    sectionsNames = document.querySelectorAll(
      "section > .landing__container > h2"
    );
    console.log(sectionsNames);
    sectionsNames.forEach((sectionName) => {
      const li = document.createElement("li");
      const menuLink = document.createElement("a");
      menuLink.classList.add("menu__link");
      menuLink.textContent = sectionName.textContent;
      li.appendChild(menuLink);
      navbarList.appendChild(li);
    });
  };

  const setPage = () => {
    setMainHeader("Landing Page");
    sectionsData.forEach((section, index) => {
      console.log(index);
      setTimeout(
        () =>
          addSectionToMain((id = index), section.header, section.paragraphs),
        0
      );
    });
    setTimeout(() => setNavbarMenu(), 0);
  };

  const scrollToTop = () => {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    scrollToTopBtn.style.opacity = rootElement.scrollTop / scrollTotal;
    if (rootElement.scrollTop / scrollTotal > 0.15) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
    console.log(
      rootElement.scrollHeight,
      rootElement.clientHeight,
      rootElement.scrollTop
    );
  };
  setPage();

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
