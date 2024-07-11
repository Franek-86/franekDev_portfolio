import { data } from "./data.js";
console.log(data);
const closeBtn = document.querySelector(".close-btn");
const navBtn = document.querySelector(".nav-btn");
const sidebar = document.querySelector(".sidebar");
const navBar = document.querySelector(".nav");

navBtn.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

window.addEventListener("scroll", () => {
  const test = window.scrollY;
  if (test > 80) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }
});

// language
const langEl = document.querySelector(".langWrap");
const link = document.querySelectorAll("a");
const titleEl = document.querySelector(".bannerTitle");
const descrEl = document.querySelector(".bannerDescription");
const aboutTitle = document.querySelector(".aboutTitle");
const aboutDescription1 = document.querySelector(".aboutDescription1");
const aboutDescription2 = document.querySelector(".aboutDescription2");
const webDevelopmentText = document.querySelector(".webDevelopmentText");
const webDesignText = document.querySelector(".webDesignText");
const appDesignText = document.querySelector(".appDesignText");
const latestWorksTitle = document.querySelector(".latestWorksTitle");
const latestWorksText = document.querySelector(".latestWorksText");
const touchTitle = document.querySelector(".touchTitle");
const touchText = document.querySelector(".touchText");
const touchBtn = document.querySelector(".touchBtn");
const bannerBtn = document.querySelector(".bannerBtn");
const navHome = document.querySelector(".navHome");
const navAbout = document.querySelector(".navAbout");
const navContact = document.querySelector(".navContact");
const navProjects = document.querySelector(".navProjects");
const sidebarHome = document.querySelector(".sidebarHome");
const sidebarAbout = document.querySelector(".sidebarAbout");
const sidebarContact = document.querySelector(".sidebarContact");
const sidebarProjects = document.querySelector(".sidebarProjects");
const projectPage = document.querySelector(".projectPage");
const aboutMeBtn = document.querySelector(".aboutMeBtn");
const singleAboutTitle = document.querySelector(".singleAboutTitle");
const singleAboutText1 = document.querySelector(".singleAboutText1");
const singleAboutText2 = document.querySelector(".singleAboutText2");
const singleContactTitle = document.querySelector(".singleContactTitle");
const singleContactText1 = document.querySelector(".singleContactText1");
const singleContactText2 = document.querySelector(".singleContactText2");
const singleProjectsTitle = document.querySelector(".singleProjectsTitle");
const singleTimeline1 = document.querySelectorAll(".singleTimeline1");
const singleTimeline2 = document.querySelector(".singleTimeline2");
const singleTimeline3 = document.querySelector(".singleTimeline3");
const singleTimeline4 = document.querySelector(".singleTimeline4");
const singleTimeline5 = document.querySelector(".singleTimeline5");
const singleTimeline01 = document.querySelector(".singleTimeline01");
const singleTimeline02 = document.querySelector(".singleTimeline02");
const p_bluesTarot = document.querySelector(".p_bluesTarot");
const p_roadToSaintNicholas = document.querySelector(".p_roadToSaintNicholas");
const p_tecnocupolePancaldi = document.querySelector(".p_tecnocupolePancaldi");
const p_studiDentisticiMaffei = document.querySelector(
  ".p_studiDentisticiMaffei"
);
const p_ernestVerner = document.querySelector(".p_ernestVerner");
const p_jumboClubs = document.querySelector(".p_jumboClubs");
const p_theCoffeeBlend = document.querySelector(".p_theCoffeeBlend");
const p_comfySlot = document.querySelector(".p_comfySlot");
const p_cocktailsSet = document.querySelector(".p_cocktailsSet");
const p_jumboColombiaTea = document.querySelector(".p_jumboColombiaTea");
const p_technicalDocumentTemplate = document.querySelector(
  ".p_technicalDocumentTemplate"
);
const p_jobTracker = document.querySelector(".p_jobTracker");
const p_githubUsers = document.querySelector(".p_githubUsers");
const p_winMe = document.querySelector(".p_winMe");
const p_cocktailsTable = document.querySelector(".p_cocktailsTable");

const translate = (attr) => {
  if (titleEl) {
    titleEl.textContent = data[attr].bannerTitle;
  }
  if (descrEl) {
    descrEl.textContent = data[attr].bannerDescription;
  }
  if (aboutTitle) {
    aboutTitle.textContent = data[attr].aboutTitle;
  }
  if (aboutDescription1) {
    aboutDescription1.textContent = data[attr].aboutDescription1;
  }
  if (aboutDescription2) {
    aboutDescription2.textContent = data[attr].aboutDescription2;
  }
  if (webDevelopmentText) {
    webDevelopmentText.textContent = data[attr].webDevelopmentText;
  }
  if (webDesignText) {
    webDesignText.textContent = data[attr].webDesignText;
  }
  if (appDesignText) {
    appDesignText.textContent = data[attr].appDesignText;
  }
  if (latestWorksTitle) {
    latestWorksTitle.textContent = data[attr].latestWorksTitle;
  }
  if (latestWorksText) {
    latestWorksText.textContent = data[attr].latestWorksText;
  }
  if (touchTitle) {
    touchTitle.textContent = data[attr].touchTitle;
  }
  if (touchText) {
    touchText.textContent = data[attr].touchText;
  }
  if (touchBtn) {
    touchBtn.textContent = data[attr].touchBtn;
  }
  if (bannerBtn) {
    bannerBtn.textContent = data[attr].bannerBtn;
  }
  if (navHome) {
    navHome.textContent = data[attr].navHome;
  }
  if (navAbout) {
    navAbout.textContent = data[attr].navAbout;
  }
  if (navContact) {
    navContact.textContent = data[attr].navContact;
  }
  if (navProjects) {
    navProjects.textContent = data[attr].navProjects;
  }
  if (sidebarHome) {
    sidebarHome.textContent = data[attr].sidebarHome;
  }
  if (sidebarAbout) {
    sidebarAbout.textContent = data[attr].sidebarAbout;
  }
  if (sidebarContact) {
    sidebarContact.textContent = data[attr].sidebarContact;
  }
  if (sidebarProjects) {
    sidebarProjects.textContent = data[attr].sidebarProjects;
  }
  if (aboutMeBtn) {
    aboutMeBtn.textContent = data[attr].aboutMeBtn;
  }
  if (projectPage) {
    projectPage.textContent = data[attr].projectPage;
  }
  if (singleAboutTitle) {
    singleAboutTitle.textContent = data[attr].singleAboutTitle;
  }
  if (singleAboutText1) {
    singleAboutText1.innerHTML = data[attr].singleAboutText1;
  }
  if (singleAboutText2) {
    singleAboutText2.textContent = data[attr].singleAboutText2;
  }
  if (singleContactTitle) {
    singleContactTitle.textContent = data[attr].singleContactTitle;
  }
  if (singleContactText1) {
    singleContactText1.textContent = data[attr].singleContactText1;
  }
  if (singleContactText2) {
    singleContactText2.textContent = data[attr].singleContactText2;
  }
  if (singleProjectsTitle) {
    singleProjectsTitle.textContent = data[attr].singleProjectsTitle;
  }
  if (
    singleTimeline1 &&
    singleTimeline2 &&
    singleTimeline3 &&
    singleTimeline4 &&
    singleTimeline5
  ) {
    singleTimeline1.forEach((i) => {
      i.textContent = data[attr].singleTimeline1;
    });
    singleTimeline3.textContent = data[attr].singleTimeline3;
    singleTimeline4.textContent = data[attr].singleTimeline4;
    singleTimeline5.textContent = data[attr].singleTimeline5;
  }
  if (singleTimeline01) {
    singleTimeline01.textContent = data[attr].singleTimeline01;
  }
  if (singleTimeline02) {
    singleTimeline02.textContent = data[attr].singleTimeline02;
  }
  // projects page

  if (p_bluesTarot) {
    p_bluesTarot.innerHTML = data[attr].p_bluesTarot;
  }
  if (p_roadToSaintNicholas) {
    p_roadToSaintNicholas.innerHTML = data[attr].p_roadToSaintNicholas;
  }
  if (p_tecnocupolePancaldi) {
    p_tecnocupolePancaldi.innerHTML = data[attr].p_tecnocupolePancaldi;
  }
  if (p_studiDentisticiMaffei) {
    p_studiDentisticiMaffei.innerHTML = data[attr].p_studiDentisticiMaffei;
  }
  if (p_ernestVerner) {
    p_ernestVerner.innerHTML = data[attr].p_ernestVerner;
  }
  if (p_tecnocupolePancaldi) {
    p_tecnocupolePancaldi.innerHTML = data[attr].p_tecnocupolePancaldi;
  }
  if (p_jumboClubs) {
    p_jumboClubs.innerHTML = data[attr].p_jumboClubs;
  }
  if (p_theCoffeeBlend) {
    p_theCoffeeBlend.innerHTML = data[attr].p_theCoffeeBlend;
  }
  if (p_comfySlot) {
    p_comfySlot.innerHTML = data[attr].p_comfySlot;
  }
  if (p_cocktailsSet) {
    p_cocktailsSet.innerHTML = data[attr].p_cocktailsSet;
  }
  if (p_jumboColombiaTea) {
    p_jumboColombiaTea.innerHTML = data[attr].p_jumboColombiaTea;
  }
  if (p_technicalDocumentTemplate) {
    p_technicalDocumentTemplate.innerHTML =
      data[attr].p_technicalDocumentTemplate;
  }
  if (p_jobTracker) {
    p_jobTracker.innerHTML = data[attr].p_jobTracker;
  }
  if (p_githubUsers) {
    p_githubUsers.innerHTML = data[attr].p_githubUsers;
  }
  if (p_winMe) {
    p_winMe.innerHTML = data[attr].p_winMe;
  }
  if (p_cocktailsTable) {
    p_cocktailsTable.innerHTML = data[attr].p_cocktailsTable;
  }
};
window.addEventListener("DOMContentLoaded", () => {
  const test = localStorage.getItem("lang");
  console.log("test", test);
  if (test) {
    translate(test);

    console.log(langEl.querySelector(".active"));
    langEl.querySelector(".active").classList.remove("active");
    console.log("test2", langEl.querySelector('[language="' + test + '"]'));
    console.log("questo", langEl.querySelector('[language="' + test + '"]'));
    langEl.querySelector('[language="' + test + '"]').classList.add("active");
  }

  link.forEach((el) => {
    el.addEventListener("click", () => {
      langEl.querySelector(".active").classList.remove("active");
      el.classList.add("active");

      let attr = el.getAttribute("language");
      translate(attr);
      localStorage.setItem("lang", attr);
    });
  });
});
