/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      cinzel: ["Cinzel", "serif"],
    },
    backgroundImage: {
      "service-bg": "url('./src/assets/home/chef-service.jpg')",
      featured: "url('./src/assets/home/featured.jpg')",
      "menu-bg": "url('./src/assets/menu/our_menu.jpg')",
      dessert: "url('./src/assets/menu/dessert-bg.jpeg')",
      cake: "url('./src/assets/menu/cake.jpg')",
      noddles: "url('./src/assets/menu/noddles.jpg')",
      pasta: "url('./src/assets/menu/pasta.jpg')",
      pure_veg: "url('./src/assets/menu/pure_veg.jpg')",
      rolls: "url('./src/assets/menu/rolls.jpg')",
      salad: "url('./src/assets/menu/salad-bg.jpg')",
      sandwich: "url('./src/assets/menu/sandwich.jpg')",
      'shop_bg':"url('./src/assets/shop/shop_bg.jpg')"
    },
  },
  plugins: [require("daisyui")],
};
