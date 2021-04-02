const es2015 = require("babel-preset-es2015");
const presetReact = require("babel-preset-react");
require("babel-register")({
    presets: [es2015, presetReact],
});
const Sitemap = require("react-router-sitemap").default;
const router = require("./routes").default;

new Sitemap(router()).build("https://diplom-work-client.herokuapp.com").save("../build/sitemap.xml");
