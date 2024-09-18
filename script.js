 const messages = [
    "𝙱𝚎 𝚙𝚊𝚝𝚒𝚎𝚗𝚝, 𝚕𝚘𝚊𝚍𝚒𝚗𝚐 𝚝𝚒𝚖𝚎𝚜 𝚖𝚊𝚢 𝚝𝚊𝚔𝚎 𝚞𝚙 𝚝𝚘 𝟸𝟶 𝚜𝚎𝚌𝚘𝚗𝚍𝚜 🫣",
    "𝚑𝚒, 𝚢𝚎𝚜, 𝚒𝚍 𝚕𝚒𝚔𝚎 𝚝𝚘 𝚑𝚊𝚟𝚎 𝚞𝚑𝚑... 𝚊 𝚞𝚑𝚖... 𝚠𝚑𝚊𝚝 𝚊𝚋𝚘𝚞𝚝 𝚊 𝚞𝚑𝚑𝚑𝚑𝚑𝚑𝚑",
    "𝚄𝚗𝚋𝚕𝚘𝚌𝚔𝚊𝚋𝚕𝚎!",
    "🙶𝙸𝚝'𝚜 𝚊 𝚏𝚎𝚊𝚝𝚞𝚛𝚎🙷",
    "𝚏𝚒𝚗𝚐𝚎𝚛𝚜 𝚌𝚛𝚘𝚜𝚜𝚎𝚍",
    "𝚗𝚘𝚝 𝚊 𝚙𝚛𝚘𝚡𝚢!",
    "𝚞𝚗𝚍𝚎𝚛𝚜𝚝𝚊𝚗𝚍𝚊𝚋𝚕𝚎, 𝚑𝚊𝚟𝚎 𝚊 𝚗𝚒𝚌𝚎 𝚍𝚊𝚢",
    "𝙸𝚝'𝚜 𝚊 𝚞𝚜𝚎𝚛 𝚎𝚛𝚛𝚘𝚛, 𝙸 𝚜𝚠𝚎𝚊𝚛",
    "𝚙𝚊𝚗𝚒𝚌 𝚖𝚘𝚍𝚎",
    "𝙼𝚊𝚍𝚎 𝚋𝚢 𝚍𝚒𝚗𝚐𝚞𝚜𝚌𝚑𝚊𝚗",
    "𝚑𝚎𝚕𝚍 𝚝𝚘𝚐𝚎𝚝𝚑𝚎𝚛 𝚠𝚒𝚝𝚑 𝚍𝚞𝚌𝚔 𝚝𝚊𝚙𝚎 𝚊𝚗𝚍 𝚙𝚛𝚊𝚢𝚎𝚛𝚜",
    "𝚝𝚢𝚙𝚘",
    "𝚌𝚑𝚎𝚌𝚔 𝚞𝚛 𝚠𝚎𝚋𝚌𝚊𝚖 <𝟹",
    "𝚃𝚑𝚒𝚜 𝚙𝚛𝚘𝚓𝚎𝚌𝚝 𝚒𝚜 𝚘𝚙𝚎𝚗 𝚜𝚊𝚞𝚜𝚎!",
    "𝚜𝚑𝚒𝚝 𝚜𝚑𝚒𝚝 𝚜𝚑𝚒𝚝 𝚜𝚑𝚒𝚝 𝚜𝚑𝚒𝚝 𝚜𝚑𝚒𝚝",
    "𝚁𝚎𝚏𝚘𝚛𝚖𝚎𝚍 𝚜𝚔𝚒𝚍 :𝙳",
    "𝚗𝚘𝚝 𝚊 𝚙𝚛𝚘𝚡𝚢!",
    "𝚒𝚜 𝚝𝚑𝚒𝚜 𝚝𝚑𝚒𝚗𝚐 𝚘𝚗?",
    "𝚌𝚑𝚎𝚌𝚔 𝚞𝚛 𝚠𝚊𝚕𝚕𝚜",
    "𝚜𝚝𝚛𝚘𝚗𝚐𝚎𝚛 𝚝𝚑𝚊𝚗 𝚃𝚒𝚝𝚊𝚗𝚒𝚞𝚖?",
    "𝙰𝚖 𝙸 𝚌𝚘𝚘𝚔𝚒𝚗𝚐?",
    "𝚒𝚜 𝚝𝚑𝚒𝚜 𝚝𝚑𝚒𝚗𝚐 𝚘𝚗?",
    "𝚗𝚘𝚙𝚎, 𝚒𝚖 𝚌𝚘𝚘𝚔𝚎𝚍",
    "𝚁𝚎𝚊𝚍 𝚝𝚑𝚎 𝚌𝚑𝚊𝚗𝚐𝚎𝚕𝚘𝚐!",
    "𝚆𝚑𝚊𝚝𝚜 𝚊 𝚙𝚛𝚘𝚡𝚢?",
    "𝚒𝚜 𝚝𝚑𝚒𝚜 𝚝𝚑𝚒𝚗𝚐 𝚘𝚗?",
    "𝚌𝚊𝚛𝚙 𝚊𝚗𝚍 𝚍𝚒𝚎𝚖 𝚘𝚛 𝚜𝚘𝚖𝚎𝚝𝚑𝚒𝚗𝚐",
    "𝚘𝚗 𝚝𝚑𝚎 𝚎𝚍𝚐𝚎 𝚊𝚗𝚍 𝚊𝚕𝚕 𝚝𝚑𝚊𝚝",
    "𝙸 𝚗𝚎𝚎𝚍 𝚊𝚗 𝚎𝚡𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚝𝚘𝚛 𝚝𝚘 𝚏𝚒𝚡 𝚊𝚕𝚕 𝚝𝚑𝚎𝚜𝚎 𝙱𝚄𝙶𝚂",
    "ツ",
    "𝚒 𝚊𝚖 𝚒𝚗 𝚢𝚘𝚞𝚛 𝚠𝚊𝚕𝚕𝚜 :𝙳"
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
    }, 500);
  }

  setInterval(changeMessage, 5000);

  // Using sessionStorage for client-side caching
// Function to render the website content within a Shadow DOM
function renderWebsite() {
    const urlInput = document.getElementById("url");
    let url = urlInput.value.trim();
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
        urlInput.value = url;
    }

    const renderedContent = document.getElementById("rendered-content");
    const loadingSpinner = document.getElementById("loading-spinner");

    const cachedContent = sessionStorage.getItem(url);
    if (cachedContent) {
        displayInShadowDOM(renderedContent, cachedContent);
        loadingSpinner.style.display = "none";
        return; // Exit early if content is cached
    }

    renderedContent.innerHTML = "";
    loadingSpinner.style.display = "block";

    fetchAndRender(url, renderedContent, loadingSpinner);
}

// Function to fetch content and render it in a Shadow DOM
function fetchAndRender(url, renderedContent, loadingSpinner, retryCount = 3) {
    fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent(url))
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {
            // Cache the fetched content
            sessionStorage.setItem(url, data);

            // Render the content in a Shadow DOM
            displayInShadowDOM(renderedContent, data);
            loadingSpinner.style.display = "none";
        })
        .catch((error) => {
            if (retryCount > 0) {
                const delay = 1000 * Math.pow(2, 3 - retryCount);
                setTimeout(() => {
                    fetchAndRender(url, renderedContent, loadingSpinner, retryCount - 1);
                }, delay);
            } else {
                renderedContent.innerHTML = `
                    <p style="color: red;">Error: Failed to load website content. ${error.message}</p>`;
                loadingSpinner.style.display = "none";
            }
        });
}

// Function to create a Shadow DOM and insert the content
// Function to create a Shadow DOM and insert the content
function displayInShadowDOM(renderedContent, htmlContent) {
    // Clear any existing content
    renderedContent.innerHTML = '';

    // Create a shadow root
    const shadowRoot = renderedContent.attachShadow({ mode: 'open' });

    // Create a container for the content and styles
    const container = document.createElement('div');
    container.setAttribute('id', 'shadow-container');
    
    // Create a style element to encapsulate the styles
    const style = document.createElement('style');
    style.textContent = `
        #shadow-container {
            display: block;
            overflow: auto;
            max-width: 100%;
            max-height: 100%;
            box-sizing: border-box;
            padding: 10px;
            background: #f9f9f9; /* Light background for better readability */
            border: 1px solid #ddd; /* Light border to separate content */
        }
        #shadow-container * {
            box-sizing: border-box;
            max-width: 100%;
            max-height: 100%;
            overflow: auto;
        }
    `;

    // Insert the style and content into the shadow DOM
    shadowRoot.appendChild(style);
    container.innerHTML = htmlContent;
    shadowRoot.appendChild(container);

    // Ensure images and background images work correctly
    const baseUrl = new URL(document.location).origin;
    fixRelativeUrls(container, baseUrl);
    fixImages(container, baseUrl);
    fixBackgroundImages(container, baseUrl);
}

// Function to fix relative URLs in the content
function fixRelativeUrls(content, baseUrl) {
    content.querySelectorAll('a').forEach(el => {
        const relativeUrl = el.getAttribute('href');
        if (relativeUrl && !relativeUrl.startsWith('http')) {
            const absoluteUrl = new URL(relativeUrl, baseUrl).href;
            el.setAttribute('href', absoluteUrl);
        }
    });

    content.querySelectorAll('img, script, link, iframe, video source, audio source, audio, video, object, track').forEach(el => {
        fixElementSrc(el, 'src', baseUrl);
        if (el.tagName.toLowerCase() === 'object') {
            el.querySelectorAll('param').forEach(paramEl => {
                const relativeUrl = paramEl.getAttribute('value');
                if (relativeUrl && !relativeUrl.startsWith('http')) {
                    const absoluteUrl = new URL(relativeUrl, baseUrl).href;
                    paramEl.setAttribute('value', absoluteUrl);
                }
            });
        }
    });
}

// Helper function to fix element attributes
function fixElementSrc(el, attributeName, baseUrl) {
    const relativeUrl = el.getAttribute(attributeName);
    if (relativeUrl && !relativeUrl.startsWith('http')) {
        const absoluteUrl = new URL(relativeUrl, baseUrl).href;
        el.setAttribute(attributeName, absoluteUrl);
    }
}

// Function to fix image sources
function fixImages(content, baseUrl) {
    content.querySelectorAll('img').forEach(img => {
        fixElementSrc(img, 'src', baseUrl);
    });
}

// Function to fix background images
function fixBackgroundImages(content, baseUrl) {
    content.querySelectorAll('[style]').forEach(el => {
        const style = el.getAttribute('style');
        const urlPattern = /url\(['"]?(.*?)['"]?\)/g;
        let match;
        while (match = urlPattern.exec(style)) {
            const relativeUrl = match[1];
            if (relativeUrl && !relativeUrl.startsWith('http')) {
                const absoluteUrl = new URL(relativeUrl, baseUrl).href;
                el.style.backgroundImage = `url('${absoluteUrl}')`;
            }
        }
    });
}

    // Create a style element to encapsulate the styles
    const style = document.createElement('style');
    style.textContent = `
        /* Add any global styles needed for the shadow DOM here */
    `;

// Event listeners for buttons (e.g., fetch content)
document.getElementById('button1').addEventListener('click', renderWebsite);
document.getElementById('button2').addEventListener('click', renderWebsite);
document.getElementById('button3').addEventListener('click', renderWebsite);


  function fetchAndRender(url, renderedContent, loadingSpinner, retryCount = 3) {
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

              // Cache the fetched content
              sessionStorage.setItem(url, contentDiv.innerHTML);
          })
          .catch((error) => {
              if (retryCount > 0) {
                  // Retry mechanism with exponential backoff
                  const delay = 1000 * Math.pow(2, 3 - retryCount);
                  setTimeout(() => {
                      fetchAndRender(url, renderedContent, loadingSpinner, retryCount - 1);
                  }, delay);
              } else {
                  renderedContent.innerHTML = `
                      <p style="color: red;">Error: Failed to load website content. ${error.message}</p>`;
                  loadingSpinner.style.display = "none";
              }
          });
  }

  function fixRelativeUrls(content, baseUrl) {
      content.querySelectorAll("a").forEach((el) => {
          const relativeUrl = el.getAttribute("href");
          if (relativeUrl && !relativeUrl.startsWith("http")) {
              const absoluteUrl = new URL(relativeUrl, baseUrl).href;
              el.setAttribute("href", absoluteUrl);
          }
          el.addEventListener("click", function(event) {
              event.preventDefault();
              const urlInput = document.getElementById("url");
              urlInput.value = el.href;
              renderWebsite();
          });
      });

      content.querySelectorAll("img").forEach((el) => {
          fixElementSrc(el, "src", baseUrl);
      });

      content.querySelectorAll("script").forEach((el) => {
          fixElementSrc(el, "src", baseUrl);
      });

      content.querySelectorAll("link").forEach((el) => {
          fixElementSrc(el, "href", baseUrl);
      });

      content.querySelectorAll("iframe").forEach((el) => {
          fixElementSrc(el, "src", baseUrl);
      });

      content.querySelectorAll("video source, audio source").forEach((el) => {
          fixElementSrc(el, "src", baseUrl);
      });

      content.querySelectorAll("audio").forEach((el) => {
          fixElementSrc(el, "src", baseUrl);
      });

      content.querySelectorAll("video").forEach((el) => {
          fixElementSrc(el, "src", baseUrl);
      });

      content.querySelectorAll("object").forEach((el) => {
          fixElementSrc(el, "data", baseUrl);
          el.querySelectorAll("param").forEach((paramEl) => {
              const relativeUrl = paramEl.getAttribute("value");
              if (relativeUrl && !relativeUrl.startsWith("http")) {
                  const absoluteUrl = new URL(relativeUrl, baseUrl).href;
                  paramEl.setAttribute("value", absoluteUrl);
              }
          });
      });

      content.querySelectorAll("track").forEach((el) => {
          fixElementSrc(el, "src", baseUrl);
      });
  }

  function fixElementSrc(el, attributeName, baseUrl) {
      const relativeUrl = el.getAttribute(attributeName);
      if (relativeUrl && !relativeUrl.startsWith("http")) {
          const absoluteUrl = new URL(relativeUrl, baseUrl).href;
          el.setAttribute(attributeName, absoluteUrl);
      }
  }

  // Event listeners for buttons (e.g., fetch content)
  document.getElementById('button1').addEventListener('click', renderWebsite);
  document.getElementById('button2').addEventListener('click', renderWebsite);
  document.getElementById('button3').addEventListener('click', renderWebsite);



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

  document.getElementById('button1').addEventListener('click', function() {
    var url = document.getElementById('url').value;
    var apiUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(url);
    fetchContent(apiUrl);
  });

  document.getElementById('button2').addEventListener('click', function() {
    var url = document.getElementById('url').value;
    var apiUrl = 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent(url);
    fetchContent(apiUrl);
  });

  document.getElementById('button3').addEventListener('click', function() {
    var url = document.getElementById('url').value;
    var apiUrl = 'https://api.codetabs.com/v1/tmp/?quest=' + encodeURIComponent(url);
    fetchContent(apiUrl);
  });

  function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.toggle('active');

    const blurBackground = document.getElementById('blur-background');
    blurBackground.classList.toggle('active');

    if (popup.classList.contains('active')) {
      const alloriginsButton = document.querySelector('#' + popupId + ' button:first-child');
      alloriginsButton.focus();
    }
  }

  var containerResized = false;

  function shrinkContainerAndRender() {
    if (!containerResized) {
      var container = document.querySelector('.container');
      var currentHeight = container.offsetHeight;
      var newHeight = currentHeight * 1.9;
      container.style.height = newHeight + 'px';
      containerResized = true;

      var box = document.querySelector('.box');
      var versionBox = document.querySelector('.version-box');
      var status = document.querySelector('.status');
      var heading = document.querySelector('h11');
      var message = document.querySelector('.message');
      var statusBox = document.querySelector('.status-box');
      var renButton = document.querySelector('.ren-button');
      var webButton = document.querySelector('.web-button');
      var gitButton = document.querySelector('.git-button');
      var holder = document.querySelector('.holder');
      var h2Dv8e46q = document.querySelector('#h2Dv8e46q');
var a1a1a1a1a1 = document.querySelector('.a1a1a1a1a1');
var downloadButton = document.querySelector('#downloadButton');
      box.style.display = 'none';
      versionBox.style.display = 'none';
      status.style.display = 'none';
      heading.style.display = 'none';
      message.style.display = 'none';
      statusBox.style.display = 'none';
      renButton.style.display = 'none';
      webButton.style.display = 'none';
      gitButton.style.display = 'none';
      holder.style.display = 'none';
      h2Dv8e46q.style.display = 'none';
      a1a1a1a1a1.style.display = 'none';
      downloadButton.style.display = 'none';
    }
    renderWebsite();

    var inputGroup = document.querySelector('.input-group');
    var renderedContent = document.querySelector('.rendered-content');
    inputGroup.style.marginTop = '-15px';
    renderedContent.style.marginTop = '-5px';
  }

  function createBlobUrl() {
    var outerHTML = document.documentElement.outerHTML;
    var blob = new Blob([outerHTML], {
      type: 'text/html'
    });
    var blobUrl = URL.createObjectURL(blob);
    var newTab = window.open();
    newTab.document.write('<!DOCTYPE html><html><head><title>Page Content</title></head><body></body></html>');
    newTab.document.close();
    newTab.location.href = blobUrl;
  }

  function openGit() {
    window.open('https://github.com/dinguschan-owo/dingusproxy', '_blank');
  }

  function openWebs() {
    window.open('https://dinguschan-owo.github.io/dingusproxy/', '_blank');
  }

        function changeTitle() {
            var newTitle = document.getElementById('pageTitleInput').value;
            document.title = newTitle;
        }

        function changeFavicon(url) {
            var favicon = document.querySelector('link[rel="icon"]');
            if (!favicon) {
                favicon = document.createElement('link');
                favicon.setAttribute('rel', 'icon');
                document.head.appendChild(favicon);
            }
            favicon.setAttribute('type', 'image/png');
            favicon.setAttribute('href', url);
        }


