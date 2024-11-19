// Search functionality
function performSearch() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    console.log('Searching for:', searchTerm);

}

// Subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Email validation check function
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    console.log('Subscribing email:', email);
    alert('Thank you for subscribing!');
    event.target.reset();
    return false;
}

// Email validation
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    } else {
        header.style.backgroundColor = 'var(--primary-color)';
    }
});

function initializeAnimations() {
    const cards = document.querySelectorAll('.blog-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
});

function submitContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return false;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message. We will get back to you soon!');
    event.target.reset();
    return false;
}


function loadBlogPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;

    blogPosts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'blog-card';
        article.innerHTML = `
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}">
            </div>
            <div class="blog-content">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="blog-post.html?id=${post.id}" class="read-more">Read More →</a>
            </div>
        `;
        blogGrid.appendChild(article);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    loadBlogPosts();
});


document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const commentText = document.getElementById('comment').value;
            
            addComment(username, commentText);
            commentForm.reset();
        });
    }
});

function addComment(username, commentText) {
    const commentsContainer = document.getElementById('comments-container');
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    
    const currentDate = new Date().toLocaleDateString();
    
    commentElement.innerHTML = `
        <div class="comment-header">
            <span class="comment-author">${username}</span>
            <span class="comment-date">${currentDate}</span>
        </div>
        <div class="comment-content">
            <p>${commentText}</p>
        </div>
    `;
    
    commentsContainer.prepend(commentElement);
}

document.addEventListener('DOMContentLoaded', function() {
    const createBlogForm = document.getElementById('create-blog-form');
    if (createBlogForm) {
        createBlogForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('blog-title').value;
            const category = document.getElementById('blog-category').value;
            const content = document.getElementById('blog-content').value;
            console.log('New blog post:', { title, category, content });
            alert('Your blog post has been created!');

            createBlogForm.reset();
        });
    }

    
});

