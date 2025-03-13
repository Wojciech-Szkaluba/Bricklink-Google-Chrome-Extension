// Create a popup container
const popup = document.createElement("div");
popup.style.position = "fixed";
popup.style.bottom = "20px";
popup.style.right = "20px";
popup.style.background = "white";
popup.style.border = "1px solid #ccc";
popup.style.borderRadius = "5px";
popup.style.padding = "10px";
popup.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
popup.style.zIndex = "10000";
popup.innerHTML = `
  <h4>BrickLink Downloader</h4>
  <ul style="list-style: none; padding: 0;">
    <li>
      <img src="${chrome.runtime.getURL('images/image128.png')}" alt="Download" style="width: 16px; vertical-align: middle; margin-right: 5px;">
      <a href="https://www.bricklink.com/_file/my_personal_inventory/export.xml?itemType=A" target="_blank">All</a>
    </li>
    <li>
      <img src="${chrome.runtime.getURL('images/image128.png')}" alt="Download" style="width: 16px; vertical-align: middle; margin-right: 5px;">
      <a href="https://www.bricklink.com/_file/my_personal_inventory/export.xml?itemType=S" target="_blank">My Sets</a>
    </li>
    <li>
      <img src="${chrome.runtime.getURL('images/image128.png')}" alt="Download" style="width: 16px; vertical-align: middle; margin-right: 5px;">
      <a href="https://www.bricklink.com/_file/my_personal_inventory/export.xml?itemType=P" target="_blank">My Parts</a>
    </li>
    <li>
      <img src="${chrome.runtime.getURL('images/image128.png')}" alt="Download" style="width: 16px; vertical-align: middle; margin-right: 5px;">
      <a href="https://www.bricklink.com/_file/my_personal_inventory/export.xml?itemType=M" target="_blank">My Minifigures</a>
    </li>
    <li>
      <img src="${chrome.runtime.getURL('images/image128.png')}" alt="Download" style="width: 16px; vertical-align: middle; margin-right: 5px;">
      <a href="https://www.bricklink.com/_file/my_personal_inventory/export.xml?itemType=G" target="_blank">My Gear</a>
    </li>
    <li>
      <img src="${chrome.runtime.getURL('images/image128.png')}" alt="Download" style="width: 16px; vertical-align: middle; margin-right: 5px;">
      <a href="https://www.bricklink.com/_file/my_personal_inventory/export.xml?itemType=B" target="_blank">My Books</a>
    </li>
    <li>
      <img src="${chrome.runtime.getURL('images/image128.png')}" alt="Download" style="width: 16px; vertical-align: middle; margin-right: 5px;">
      <a href="https://www.bricklink.com/_file/my_personal_inventory/export.xml?itemType=C" target="_blank">My Catalogs</a>
    </li>
  </ul>
  <button style="margin-top: 10px; padding: 5px 10px; background: #0078d7; color: white; border: none; border-radius: 3px; cursor: pointer;">Close</button>
`;

// Append popup to the body
document.body.appendChild(popup);

// Add close button functionality
popup.querySelector("button").addEventListener("click", () => {
  popup.remove();
});
