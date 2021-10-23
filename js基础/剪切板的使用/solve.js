navigator.clipboard.readText().then(clipText => document.getElementById("p").innerHTML = clipText)
navigator.clipboard.writeText("tess");
