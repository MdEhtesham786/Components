
import twElementsPlugin from "tw-elements/plugin.cjs";


export default {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "./node_modules/tw-elements/js/**/*.js"
    ],
    plugins: [twElementsPlugin],
    darkMode: "class"
};