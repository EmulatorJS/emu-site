export default defineAppConfig({
  docus: {
    title: 'EmulatorJS',
    description: 'A tool to embed an emulator into your website',
    url: 'https://emulatorjs.org',
    image: 'https://emulatorjs.org/media/logo.png',
    socials: {
      github: 'EmulatorJS/EmulatorJS',
      discord: {
        lable: 'Join our Discord',
        href: 'https://discord.gg/6akryGkETU',
        icon: 'fa-brands:discord',
        rel: ''
      }
    },
    layout: 'default',
    header: {
      title: 'EmulatorJS',
      logo: {
        light: "/logo/EmulatorJS Header.png",
        dark: "/logo/EmulatorJS Header Light.png"
      },
      showLinkIcon: true,
      fluid: true,
      exclude: []
    },
    navigation: {
      enabled: true,
      links: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Documentation',
          href: '/getting-started'
        },
        {
          text: 'Code Editor',
          href: '/editor'
        },
        {
          text: 'Demo',
          href: 'https://demo.emulatorjs.org',
          target: '_blank'
        }
      ],
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    footer: {
      credits: {
        icon: 'fa-solid:gamepad',
        text: 'Made with ❤️ by @ethanaobrien & @allancoding',
        href: 'https://github.com/EumlatorJS'
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },

    github: {
      branch: "main",
      repo: "emulatorjs.org",
      owner: "EmulatorJS",
      edit: true
    },
  }
})