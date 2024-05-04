        const messages = [
            "𝙱𝚎 𝚙𝚊𝚝𝚒𝚎𝚗𝚝, 𝚕𝚘𝚊𝚍𝚒𝚗𝚐 𝚝𝚒𝚖𝚎𝚜 𝚖𝚒𝚐𝚑𝚝 𝚝𝚊𝚔𝚎 𝚞𝚙 𝚝𝚘 𝟸𝟶 𝚜𝚎𝚌𝚘𝚗𝚍𝚜 🫣",
            "𝙼𝚊𝚍𝚎 𝚋𝚢 𝚍𝚒𝚗𝚐𝚞𝚜𝚌𝚑𝚊𝚗",
            "𝚄𝚗𝚋𝚕𝚘𝚌𝚔𝚊𝚋𝚕𝚎!",
            "⚠️ 𝚄𝙿𝙳𝙰𝚃𝙴 𝟷.𝟼 ⚠️",
        ];

        const messageContainer = document.getElementById('message-container');

        function changeMessage() {
            messageContainer.classList.remove('fade-in');
            messageContainer.classList.add('fade-out');

            setTimeout(() => {
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                messageContainer.textContent = randomMessage;

                messageContainer.classList.remove('fade-out');
                messageContainer.classList.add('fade-in');
            }, 500); // Transition delay
        }

        setInterval(changeMessage, 5000);

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
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then((data) => {
                    const content = document.createElement("div");
                    content.innerHTML = data;
                    convertRelativeUrls(content, url);

                    content.querySelectorAll("a").forEach((link) => {
                        link.addEventListener("click", function (event) {
                            event.preventDefault();
                            const href = link.getAttribute("href");
                            if (href) {
                                const newUrl = new URL(href, url).href;
                                urlInput.value = newUrl;
                                renderWebsite();
                            }
                        });
                    });

                    renderedContent.appendChild(content);
                    loadingSpinner.style.display = "none";
                })
                .catch((error) => {
                    console.error("Error:", error);
                    renderedContent.innerHTML = `
                        <p style="color: red;">Error: Failed to load website content. ${error.message}</p>`;
                    loadingSpinner.style.display = "none";
                });
        }

        function convertRelativeUrls(content, baseUrl) {
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
            var popup = document.getElementById(popupId);
            var blurBackground = document.getElementById("blur-background");
            popup.classList.toggle("active");
            blurBackground.classList.toggle("active");
        }

        function openInBlankTab() {
            var outerHTML = document.documentElement.outerHTML;
            var newTab = window.open("about:blank");
            newTab.document.write(outerHTML);
            newTab.document.close();
        }
