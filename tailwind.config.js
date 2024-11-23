/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        Container: '1350px',
      },
      fontFamily: {
        Inter: 'Inter',
        Plus: 'Plus Jakarta Sans',
        
      },
      colors: {
        NavBg: '#121833',
        ButtonBg: '#ffc107',
        Buttontext: '#2d3c58',
        Bannerbtntxt: '#121830',
        Serverbg: '#0b0f21',
        Explorebg: '#0b0f21',
        Servertxt: '#D4DCFF',
        BorderBottom: '#121833',
        Check: '#00b67a',
        colltxt: '#2D3C58',
        LoveCard: '#141b38',
        Gradient: '#070916',
      
      },
      backgroundImage: {
         Banner: "url('/src/assets/banner.png')",
         GamerServerBg: "url('/src/assets/gameserverbg.png')",
         FooterBg: "url('../src/assets/foooterbg.png')",
         BudgetBg: "url('./src/assets/budgetbg.png')",
      },
    },
  },
  plugins: [],
}

