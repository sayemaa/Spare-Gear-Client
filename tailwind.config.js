module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                doctortheme: {
                    primary: "#144e5f",
                    secondary: "#a30129",
                    accent: "#117896",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
}
