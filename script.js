function renderWebsite() {
    const urlInput = document.getElementById("url");
    let url = urlInput.value.trim();
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
        urlInput.value = url;
    }

    const renderedContent = document.getElementById("rendered-content");
    const loadingSpinner = document.getElementById("loading-spinner");

    renderedContent.innerHTML = "";
    loadingSpinner.style.display = "block";

    fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent(url))
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {
            const contentDiv = document.createElement("div");
            contentDiv.innerHTML = data;

            fixRelativeUrls(contentDiv, url);

            renderedContent.appendChild(contentDiv);
            loadingSpinner.style.display = "none";
        })
        .catch((error) => {
            renderedContent.innerHTML = `
                <p style="color: red;">Error: Failed to load website content. ${error.message}</p>`;
            loadingSpinner.style.display = "none";
        });
}

function fixRelativeUrls(content, baseUrl) {
    content.querySelectorAll("a, img, video").forEach((el) => {
        const attribute = el.tagName.toLowerCase() === "a" ? "href" : "src";
        const relativeUrl = el.getAttribute(attribute);
        if (relativeUrl && !relativeUrl.startsWith("http")) {
            const absoluteUrl = new URL(relativeUrl, baseUrl).href;
            el.setAttribute(attribute, absoluteUrl);
        }
    });
}

function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    const blurBackground = document.getElementById("blur-background");
    popup.classList.toggle("active");
    blurBackground.classList.toggle("active");
}

function openInBlankTab() {
    const outerHTML = document.documentElement.outerHTML;
    const newTab = window.open("about:blank");
    newTab.document.write(outerHTML);
    newTab.document.close();
}
