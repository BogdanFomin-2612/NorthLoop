// Mobile nav toggle — shared across all pages
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".mobile-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Set the current year in the footer
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Chat widget (demo) — toggle open/close + canned reply, no backend
  var chatWidget = document.getElementById("chatWidget");
  var chatToggle = document.getElementById("chatToggle");
  var chatPanel = document.getElementById("chatPanel");
  var chatClose = document.getElementById("chatClose");
  var chatForm = document.getElementById("chatForm");
  var chatInput = document.getElementById("chatInput");
  var chatMessages = document.getElementById("chatMessages");

  if (chatWidget && chatToggle && chatPanel) {
    var openChat = function () {
      chatWidget.classList.add("open");
      chatToggle.setAttribute("aria-expanded", "true");
      chatPanel.setAttribute("aria-hidden", "false");
      if (chatInput) chatInput.focus();
    };
    var closeChat = function () {
      chatWidget.classList.remove("open");
      chatToggle.setAttribute("aria-expanded", "false");
      chatPanel.setAttribute("aria-hidden", "true");
      chatToggle.focus();
    };

    chatToggle.addEventListener("click", function () {
      if (chatWidget.classList.contains("open")) {
        closeChat();
      } else {
        openChat();
      }
    });

    if (chatClose) {
      chatClose.addEventListener("click", closeChat);
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && chatWidget.classList.contains("open")) {
        closeChat();
      }
    });

    var demoReplies = [
      "Thanks for trying the demo! This reply is pre-written \u2014 a real bot here would answer using your actual info.",
      "Got it. In a live version, this is where booking, FAQs, or order lookups would happen.",
      "Noted! This preview just shows the interface \u2014 happy to build the real logic behind it next."
    ];
    var replyIndex = 0;

    if (chatForm && chatInput && chatMessages) {
      chatForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var text = chatInput.value.trim();
        if (!text) return;

        var userMsg = document.createElement("div");
        userMsg.className = "chat-msg chat-msg-user";
        userMsg.textContent = text;
        chatMessages.appendChild(userMsg);
        chatInput.value = "";
        chatMessages.scrollTop = chatMessages.scrollHeight;

        window.setTimeout(function () {
          var botMsg = document.createElement("div");
          botMsg.className = "chat-msg chat-msg-bot";
          botMsg.textContent = demoReplies[replyIndex % demoReplies.length];
          replyIndex++;
          chatMessages.appendChild(botMsg);
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 700);
      });
    }
  }
});
