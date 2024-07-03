import { transform } from "https://github.com/anthonypetersen/quest-dev-tool/main/test.js";

document.getElementById("ta").addEventListener("input", function() {
    transform.render(
        {
          text: ta.value,
          lang: "en"
        },
        "rendering"
    );
});