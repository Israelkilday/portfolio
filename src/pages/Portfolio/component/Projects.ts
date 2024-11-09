import Portfolio_img0 from "../../../../public/imgs/project_0.jpg";
import Portfolio_img1 from "../../../../public/imgs/project_1.jpg";
import Portfolio_img2 from "../../../../public/imgs/project_2.jpg";
import Portfolio_img3 from "../../../../public/imgs/project_3.jpg";
import Portfolio_img4 from "../../../../public/imgs/project_4.jpg";
import Portfolio_img5 from "../../../../public/imgs/project_5.jpg";
import Portfolio_img6 from "../../../../public/imgs/project_6.jpg";

const data = [
  {
    id: 0,
    image: Portfolio_img1,
    name: "Music Blog",
    description:
      "Single Page Applictaion(SPA) desenvolvida para criar, editar e visualizar posts com integração ao Firebase e db Firestore. Ele inclui um contexto de autenticação que fornece informações sobre o usuário autenticado para os componentes da aplicação. Nele são armazenados dados de usuários, como imagens, títulos e conteúdo de postagens do Blog.",
    technologies: [
      "React",
      "React Router Dom",
      "Context API",
      "Typescript",
      "CSS Modules",
      "Firebase",
      "Firestore",
    ],
    linkDeploy: "https://musicblog-drab.vercel.app/",
    linkRepository: "https://github.com/Israelkilday/musicblog",
  },
  {
    id: 1,
    image: Portfolio_img3,
    name: "Food-Express",
    description:
      "Food-Express é um aplicativo de entrega de alimentos que oferece uma experiência completa tanto para os clientes quanto para os restaurantes. Inspirado nas funcionalidades do iFood. O sistema inclui uma interface de usuário moderna e intuitiva, um robusto sistema de carrinho de compras e autenticação segura.",
    technologies: [
      "Next.14",
      "NextAuth.js",
      "Server Actions",
      "Typescript",
      "React.js",
      "Contex API",
      "TailwindCSS",
      "Shadcn/ui",
      "Prisma ORM",
      "PostgresSQL",
      "Husky",
    ],
    linkDeploy: "https://food-express-isarel-kildays-projects.vercel.app/",
    linkRepository: "https://github.com/Israelkilday/FOOD-EXPRESS",
  },
  {
    id: 2,
    image: Portfolio_img2,
    name: "BarberBlend",
    description:
      "Plataforma de agendamento online que simplifica o processo de reserva de horários em diversas barbearias. Neste projeto, implementei uma funcionalidade de agendamento e cancelamento intuitiva e sincronizada, permitindo aos usuários marcar e desmarcar serviços de forma fácil e eficiente",
    technologies: [
      "Next.14",
      "Typescript",
      "Zod",
      "React.js",
      "React Hook Form",
      "TailwindCSS",
      "Shadcn/ui",
      "Prisma ORM",
      "PostgresSQL",
      "Date-fns",
    ],
    linkDeploy: "https://barberblend.vercel.app/",
    linkRepository: "https://github.com/Israelkilday/BARBERBLEND",
  },
  {
    id: 6,
    image: Portfolio_img6,
    name: "KIMININU'S PIZZARIA",
    description:
      "Projeto de delivery de pizzas desenvolvido como Freelancer, com foco em facilitar os pedidos de pizza na comunidade. Este sistema permite que os usuários acessem o cardápio, personalizem seus pedidos e enviem as informações diretamente para o WhatsApp do restaurante para finalização do pedido.",
    technologies: [
      "Next.js",
      "Typescript",
      "React",
      "React-Modal",
      "React Icons",
      "React-Parallax-mouse",
      "Contex API",
      "TailwindCSS",
      "Vercel",
    ],
    linkDeploy:
      "https://kimininus-pizza-delivery-git-main-isarel-kildays-projects.vercel.app/",
    linkRepository: "https://github.com/Israelkilday/KIMININUS_PIZZA_DELIVERY",
  },
  {
    id: 3,
    image: Portfolio_img4,
    name: "Gabrielle Medeiros",
    description:
      "Este é um projeto Freelancer desenvolvido para o salão de beleza Gabrielle Medeiros. O objetivo do projeto foi criar uma landing page moderna e funcional, destacando os serviços oferecidos pelo salão, com foco na especialidade de alisamento personalizado.",
    technologies: [
      "Next.14",
      "React",
      "Typescript",
      "Context API",
      "React Countup",
      "React Player",
      "React Responsive",
      "React Icons",
      "Framer Motion",
      "TailwindCSS",
      "Shadcn/ui",
    ],
    linkDeploy: "https://gabrielle-medeiros.vercel.app/",
    linkRepository: "https://github.com/Israelkilday/GABRIELLE-MEDEIROS",
  },
  {
    id: 4,
    image: Portfolio_img5,
    name: "DEVTUBE PLAYLISTS",
    description:
      "Plataforma de exibição de playlists sobre programação selecionadas do YouTube. Utilizando React e Zustand, implementei uma interface dinâmica e intuitiva, proporcionando aos usuários uma experiência fluida na navegação. Os vídeos são gerenciados por uma API personalizada que criei e armazenei no JSONPlaceholder.",
    technologies: [
      "React",
      "Typescript",
      "Zustand",
      "React Player",
      "React Icons",
      "Radix-ui",
      "Axios",
      "TailwindCSS",
      "Vitest",
      "Vercel",
      "Husky",
      "Json",
    ],
    linkDeploy: "https://devetube-playlists.vercel.app/",
    linkRepository: "https://github.com/Israelkilday/DEVTUBE-PLAYLISTS",
  },
  {
    id: 5,
    image: Portfolio_img0,
    name: "TEST TÉCNICO - TO DO LIST",
    description:
      "Teste técnico que conclui para uma vaga de desenvolvedor front-end jr, uma Aplicação de To-Do List desenvolvida utilizando o Next.js App Router e SCSS para estilização, com layout responsivo e mobile-friendly, além disso, ao retornar à aplicação, todos os dados de tarefas e o nome do usuário são persistidos no LocalStorage, garantindo que as informações não sejam perdidas ao recarregar a página.",
    technologies: [
      "Next.js",
      "App Router",
      "Typescript",
      "React",
      "React-Modal",
      "Javascript",
      "SCSS",
      "JSX",
      "Vercel",
    ],
    linkDeploy: "https://test-todo-list-ashy.vercel.app/",
    linkRepository: "https://github.com/Israelkilday/TEST",
  },
];

export default data;
