import r_1 from "../assets/projects/reevo-1.png";
import r_2 from "../assets/projects/reevo-2.png";
import r_3 from "../assets/projects/reevo-3.png";
import c_1 from "../assets/projects/ciao-1.png";
import c_2 from "../assets/projects/ciao-2.png";
import c_3 from "../assets/projects/ciao-3.png";
import f_1 from "../assets/projects/forkify-1.png";
import f_2 from "../assets/projects/forkify-2.png";
import w_1 from "../assets/projects/wc-1.png";
import w_2 from "../assets/projects/wc-2.png";
import v_1 from "../assets/projects/v-1.png";
import v_2 from "../assets/projects/v-2.png";
import v_3 from "../assets/projects/v-3.png";
import v_4 from "../assets/projects/v-4.png";

export const resumeLink = "https://drive.google.com/uc?export=download&id=1MfxukCobJ9c7TMrgbFzsZLwV_i3G1enJ";

export const projects = [
  {
    id: 1,
    title: 'REEVO',
    description:
      'A web application frontend for Ecommerce business.',
    imageUrl: [r_1, r_2, r_3],
    techs: ['React', 'Next.js', 'Material-Ui', 'Scss', 'Context API' ],
    siteLink: 'https://reevo.vercel.app/',
    feCodeLink: "https://github.com/rafid0007/Reevo",
    beCodeLink: "beLink",
  },
  {
    id: 2,
    title: 'CIAO',
    description:
      'A web application for a online fashion shop with integrated online payment system',
    imageUrl: [c_1, c_2, c_3],
    techs: ['React', 'Redux-saga', 'Scss', 'Styled Components', 'Firebase', 'Stripe'],
    siteLink: "https://ciao1.herokuapp.com/",
    feCodeLink: "https://github.com/rafid0007/Ciao",
    beCodeLink: "beLink",
  },
  {
    id: 3,
    title: 'RECIPE HUNT',
    description:
      'A website for searching food recipes and determining the amount of ingredients needed for any servings.',
    imageUrl: [f_1, f_2],
    techs: ['Html 5', 'Css 3', 'Javascript'],
    siteLink: "https://rafid0007.github.io/Recipe-Hunt/dist/",
    feCodeLink: "https://github.com/rafid0007/Recipe-Hunt",
    beCodeLink: "beLink",
  },
    {
        id: 4,
        title: 'Chatting Application',
        description: 'A Chatting application. Users can sign up with email and chat with other logged in ' +
            'users by adding their email to create new chats',
        imageUrl: [w_1, w_2],
        techs: ['React', 'Next.js', 'Styled Components', 'Firebase'],
        siteLink: "https://rchatapp.vercel.app/",
        feCodeLink: "https://github.com/rafid0007/whatsapp-clone",
        beCodeLink: "beLink",
    },
     {
        id: 5,
        title: 'Venture',
        description: 'A website design for tour management agency',
        imageUrl: [v_1, v_2, v_3, v_4],
        techs: ['Html', 'Scss'],
        siteLink: "https://rafid0007.github.io/Venture/",
        feCodeLink: "https://github.com/rafid0007/Venture/tree/master",
        beCodeLink: "beLink",
    },

];