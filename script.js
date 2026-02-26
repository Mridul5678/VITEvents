// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle
    const themeToggle = document.getElementById("themeToggle")
  
    // Check for saved theme preference or respect OS preference
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
    const savedTheme = localStorage.getItem("theme")
  
    if (savedTheme === "dark" || (!savedTheme && prefersDarkScheme.matches)) {
      document.body.classList.add("dark-mode")
      themeToggle.checked = true
    }
  
    // Toggle theme when the switch is clicked
    themeToggle.addEventListener("change", function () {
      if (this.checked) {
        document.body.classList.add("dark-mode")
        localStorage.setItem("theme", "dark")
      } else {
        document.body.classList.remove("dark-mode")
        localStorage.setItem("theme", "light")
      }
    })
  
    // Modal Elements
    const loginModal = document.getElementById("loginModal")
    const signupModal = document.getElementById("signupModal")
    const createEventModal = document.getElementById("createEventModal")
    const registerEventModal = document.getElementById("registerEventModal")
    const closeModalButtons = document.querySelectorAll(".close-modal")
  
    // Buttons
    const loginBtn = document.getElementById("loginBtn")
    const signupBtn = document.getElementById("signupBtn")
    const heroLogin = document.getElementById("heroLogin")
    const createEventBtn = document.getElementById("createEventBtn")
    const switchToSignup = document.getElementById("switchToSignup")
    const switchToLogin = document.getElementById("switchToLogin")
    const exploreBtn = document.getElementById("exploreBtn")
    const loadMoreBtn = document.getElementById("loadMoreBtn")
  
    // Forms
    const loginForm = document.getElementById("loginForm")
    const signupForm = document.getElementById("signupForm")
    const createEventForm = document.getElementById("createEventForm")
    const registerEventForm = document.getElementById("registerEventForm")
    const contactForm = document.getElementById("contactForm")
  
    // Other Elements
    const eventsContainer = document.getElementById("eventsContainer")
    const categoryFilter = document.getElementById("categoryFilter")
    const searchEvents = document.getElementById("searchEvents")
    const menuToggle = document.querySelector(".menu-toggle")
    const nav = document.querySelector("nav")
    const toast = document.getElementById("toast")
  
    // Sample Events Data
    const events = [
      {
        id: 1,
        title: "Yantra Central Hack 2026",
        category: "tech",
        date: "2026-02-13",
        time: "09:00",
        venue: "Anna Auditorium",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description:
          "Join us for a 48-hour coding marathon where you can showcase your skills, collaborate with peers, and build innovative solutions to real-world problems.",
        capacity: 200,
        registered: 135,
      },
      {
        id: 2,
        title: "Annual Cultural Fest",
        category: "cultural",
        date: "2026-04-10",
        time: "18:00",
        venue: "SJT Ground",
        image:
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description:
          "Experience the vibrant cultural diversity of our college through music, dance, art, and food. A celebration of talent and tradition!",
        capacity: 500,
        registered: 370,
      },
      {
        id: 3,
        title: "Sports Tournament",
        category: "sports",
        date: "2026-05-05",
        time: "10:00",
        venue: "Outdoor Stadium",
        image:
          "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description:
          "Compete in various sports including basketball, football, cricket, and athletics. Show your sportsmanship and win exciting prizes!",
        capacity: 200,
        registered: 160,
      },
      {
        id: 4,
        title: "Career Fair 2025",
        category: "academic",
        date: "2026-03-25",
        time: "11:00",
        venue: "CS Hall",
        image:
          "https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "Connect with top employers, explore internship and job opportunities, and get insights into various career paths. Bring your resume!",
        capacity: 300,
        registered: 225,
      },
      {
        id: 5,
        title: "AI Workshop Series",
        category: "tech",
        date: "2026-04-05",
        time: "14:00",
        venue: "Sarojini Naidu Gallery",
        image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description:
          "Learn about the latest advancements in artificial intelligence and machine learning through hands-on workshops led by industry experts.",
        capacity: 100,
        registered: 40,
      },
      {
        id: 6,
        title: "Literary Festival",
        category: "cultural",
        date: "2026-05-15",
        time: "16:00",
        venue: "College Library",
        image:
          "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description:
          "Celebrate the world of literature with book readings, poetry slams, debates, and interactive sessions with renowned authors.",
        capacity: 150,
        registered: 65,
      },
    ]
  
    // Display Events
    function displayEvents(eventsToDisplay = events) {
      eventsContainer.innerHTML = ""
  
      eventsToDisplay.forEach((event) => {
        const eventDate = new Date(event.date + "T" + event.time)
        const formattedDate = eventDate.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
        const formattedTime = eventDate.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
  
        const eventCard = document.createElement("div")
        eventCard.className = "event-card"
        eventCard.innerHTML = `
          <div class="event-image">
            <img src="${event.image}" alt="${event.title}">
            <div class="event-category">${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</div>
          </div>
          <div class="event-details">
            <h3 class="event-title">${event.title}</h3>
            <div class="event-info">
              <div class="event-info-item">
                <i class="far fa-calendar-alt"></i>
                <span>${formattedDate}</span>
              </div>
              <div class="event-info-item">
                <i class="far fa-clock"></i>
                <span>${formattedTime}</span>
              </div>
              <div class="event-info-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>${event.venue}</span>
              </div>
            </div>
            <p class="event-description">${event.description}</p>
            <div class="event-footer">
              <div class="event-capacity">
                <span>${event.registered}/${event.capacity} registered</span>
              </div>
              <button class="btn btn-primary register-btn" data-id="${event.id}" data-title="${event.title}">Register</button>
            </div>
          </div>
        `
  
        eventsContainer.appendChild(eventCard)
      })
  
      // Add event listeners to register buttons
      document.querySelectorAll(".register-btn").forEach((button) => {
        button.addEventListener("click", function () {
          const eventId = this.getAttribute("data-id")
          const eventTitle = this.getAttribute("data-title")
          document.getElementById("eventId").value = eventId
          document.getElementById("registerEventTitle").textContent = eventTitle
          openModal(registerEventModal)
        })
      })
    }
  
    // Filter Events
    function filterEvents() {
      const category = categoryFilter.value
      const searchTerm = searchEvents.value.toLowerCase()
  
      let filteredEvents = events
  
      if (category !== "all") {
        filteredEvents = filteredEvents.filter((event) => event.category === category)
      }
  
      if (searchTerm) {
        filteredEvents = filteredEvents.filter(
          (event) =>
            event.title.toLowerCase().includes(searchTerm) ||
            event.description.toLowerCase().includes(searchTerm) ||
            event.venue.toLowerCase().includes(searchTerm),
        )
      }
  
      displayEvents(filteredEvents)
    }
  
    // Modal Functions
    function openModal(modal) {
      modal.style.display = "block"
      document.body.style.overflow = "hidden"
    }
  
    function closeModal(modal) {
      modal.style.display = "none"
      document.body.style.overflow = "auto"
    }
  
    function closeAllModals() {
      const modals = [loginModal, signupModal, createEventModal, registerEventModal]
      modals.forEach((modal) => {
        if (modal) closeModal(modal)
      })
    }
  
    // Form Validation
    function validateForm(form) {
      let isValid = true
      const inputs = form.querySelectorAll("input, select, textarea")
  
      inputs.forEach((input) => {
        const errorElement = document.getElementById(`${input.id}Error`)
        if (!errorElement) return
  
        errorElement.style.display = "none"
  
        if (input.hasAttribute("required") && !input.value.trim()) {
          errorElement.textContent = "This field is required"
          errorElement.style.display = "block"
          isValid = false
        } else if (input.type === "email" && input.value.trim()) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailPattern.test(input.value)) {
            errorElement.textContent = "Please enter a valid email address"
            errorElement.style.display = "block"
            isValid = false
          }
        } else if (input.id === "signupConfirmPassword") {
          const password = document.getElementById("signupPassword").value
          if (input.value !== password) {
            errorElement.textContent = "Passwords do not match"
            errorElement.style.display = "block"
            isValid = false
          }
        } else if (input.id === "eventDate") {
          const selectedDate = new Date(input.value)
          const today = new Date()
          today.setHours(0, 0, 0, 0)
  
          if (selectedDate < today) {
            errorElement.textContent = "Event date cannot be in the past"
            errorElement.style.display = "block"
            isValid = false
          }
        } else if (input.id === "registerPhone") {
          const phonePattern = /^\d{10}$/
          if (!phonePattern.test(input.value.replace(/\D/g, ""))) {
            errorElement.textContent = "Please enter a valid 10-digit phone number"
            errorElement.style.display = "block"
            isValid = false
          }
        } else if (input.id === "eventCapacity") {
          if (Number.parseInt(input.value) < 1) {
            errorElement.textContent = "Capacity must be at least 1"
            errorElement.style.display = "block"
            isValid = false
          }
        }
      })
  
      return isValid
    }
  
    // Show Toast Notification
    function showToast(message, isSuccess = true) {
      const toastIcon = document.querySelector(".toast-icon")
      const toastMessage = document.querySelector(".toast-message")
  
      toastIcon.className = isSuccess ? "fas fa-check-circle toast-icon success" : "fas fa-times-circle toast-icon error"
      toastMessage.textContent = message
  
      toast.classList.add("show")
  
      setTimeout(() => {
        toast.classList.remove("show")
      }, 3000)
    }
  
    // Event Listeners
    if (loginBtn) {
      loginBtn.addEventListener("click", () => openModal(loginModal))
    }
  
    if (signupBtn) {
      signupBtn.addEventListener("click", () => openModal(signupModal))
    }

    if(heroLogin){
      heroLogin.addEventListener("click", () => openModal(signupModal))
    }
  
    if (createEventBtn) {
      createEventBtn.addEventListener("click", () => openModal(createEventModal))
    }
  
    if (switchToSignup) {
      switchToSignup.addEventListener("click", (e) => {
        e.preventDefault()
        closeModal(loginModal)
        openModal(signupModal)
      })
    }
  
    if (switchToLogin) {
      switchToLogin.addEventListener("click", (e) => {
        e.preventDefault()
        closeModal(signupModal)
        openModal(loginModal)
      })
    }
  
    if (exploreBtn) {
      exploreBtn.addEventListener("click", () => {
        document.getElementById("events").scrollIntoView({ behavior: "smooth" })
      })
    }
  
    closeModalButtons.forEach((button) => {
      button.addEventListener("click", () => {
        closeAllModals()
      })
    })
  
    window.addEventListener("click", (e) => {
      if (
        e.target === loginModal ||
        e.target === signupModal ||
        e.target === createEventModal ||
        e.target === registerEventModal
      ) {
        closeAllModals()
      }
    })
  
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active")
      })
    }
  
    if (categoryFilter) {
      categoryFilter.addEventListener("change", filterEvents)
    }
  
    if (searchEvents) {
      searchEvents.addEventListener("input", filterEvents)
    }
  
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", () => {
        showToast("No more events to load")
      })
    }
  
    // Form Submissions
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault()
        if (validateForm(this)) {
          showToast("Login successful!")
          closeAllModals()
        }
      })
    }
  
    if (signupForm) {
      signupForm.addEventListener("submit", function (e) {
        e.preventDefault()
        if (validateForm(this)) {
          showToast("Account created successfully!")
          closeAllModals()
        }
      })
    }
  
    if (createEventForm) {
      createEventForm.addEventListener("submit", function (e) {
        e.preventDefault()
        if (validateForm(this)) {
          showToast("Event created successfully!")
          closeAllModals()
  
          // Add the new event to the events array (in a real app, this would be sent to a server)
          const newEvent = {
            id: events.length + 1,
            title: document.getElementById("eventTitle").value,
            category: document.getElementById("eventCategory").value,
            date: document.getElementById("eventDate").value,
            time: document.getElementById("eventTime").value,
            venue: document.getElementById("eventVenue").value,
            image: document.getElementById("eventImage").value,
            description: document.getElementById("eventDescription").value,
            capacity: Number.parseInt(document.getElementById("eventCapacity").value),
            registered: 0,
          }
  
          events.unshift(newEvent)
          displayEvents()
        }
      })
    }
  
    if (registerEventForm) {
      registerEventForm.addEventListener("submit", function (e) {
        e.preventDefault()
        if (validateForm(this)) {
          const eventId = Number.parseInt(document.getElementById("eventId").value)
          const event = events.find((e) => e.id === eventId)
  
          if (event && event.registered < event.capacity) {
            event.registered++
            showToast("Registration successful!")
            closeAllModals()
            displayEvents() // Update the display to show the new registration count
          } else {
            showToast("Sorry, this event is at full capacity", false)
          }
        }
      })
    }
  
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault()
        if (validateForm(this)) {
          showToast("Message sent successfully!")
          this.reset()
        }
      })
    }
  
    // Initialize the page
    displayEvents()
  })
  
  