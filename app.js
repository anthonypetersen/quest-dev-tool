import { transform } from "https://github.com/episphere/quest-dev/quest2/replace2.js";

document.getElementById("ta").addEventListener("input", function() {
    transform.render(
        {
          text: ta.value,
          lang: "en"
        },
        "rendering"
    );
});