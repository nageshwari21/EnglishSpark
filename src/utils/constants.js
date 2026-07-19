export const COLORS = {
  primary: '#0B2E83',
  accent: '#FF6B00',
  white: '#FFFFFF',
  gray: '#F5F7FB',
}

export const COURSES = [
  { _id: 'c1', title: 'Spoken English', duration: '2 Months', price: 4999, level: 'Beginner to Advanced', language: 'English & Hindi', image: '/images/course-spoken.jpg', description: 'Build everyday speaking confidence through guided conversation practice, pronunciation drills, and real-life role plays.', curriculum: ['Foundations of spoken English', 'Everyday conversation practice', 'Pronunciation & fluency', 'Real-life role plays', 'Confidence building sessions'], trainer: 't1' },
  { _id: 'c2', title: 'Basic English', duration: '3 Months', price: 3999, level: 'Beginner', language: 'English & Hindi', image: '/images/course-basic.jpg', description: 'A strong foundation in grammar, vocabulary, and sentence structure for absolute beginners.', curriculum: ['Grammar fundamentals', 'Vocabulary building', 'Sentence construction', 'Basic conversation', 'Reading & writing practice'], trainer: 't2' },
  { _id: 'c3', title: 'Advanced English', duration: '3 Months', price: 6999, level: 'Advanced', language: 'English', image: '/images/course-advanced.jpg', description: 'Refine fluency, vocabulary, and professional communication for advanced learners.', curriculum: ['Advanced grammar', 'Professional vocabulary', 'Public speaking', 'Debate & discussion', 'Writing mastery'], trainer: 't3' },
  { _id: 'c4', title: 'IELTS Preparation', duration: '3 Months', price: 7999, level: 'Intermediate to Advanced', language: 'English', image: '/images/course-ielts.jpg', description: 'Comprehensive preparation covering all four IELTS modules with mock tests.', curriculum: ['Listening strategies', 'Reading techniques', 'Writing task 1 & 2', 'Speaking practice', 'Full mock tests'], trainer: 't1' },
  { _id: 'c5', title: 'PTE Preparation', duration: '2 Months', price: 7999, level: 'Intermediate to Advanced', language: 'English', image: '/images/course-pte.jpg', description: 'Targeted PTE training with scoring strategies and practice tests.', curriculum: ['PTE format overview', 'Speaking & writing', 'Reading & listening', 'Scoring strategies', 'Practice tests'], trainer: 't4' },
  { _id: 'c6', title: 'Interview Preparation', duration: '1 Month', price: 4499, level: 'All Levels', language: 'English', image: '/images/course-interview.jpg', description: 'Sharpen interview communication skills with mock interviews and feedback.', curriculum: ['Common interview questions', 'Body language', 'Mock interviews', 'Resume-based Q&A', 'Confidence coaching'], trainer: 't3' },
]

export const TRAINERS = [
  { _id: 't1', name: 'Priya Sharma', role: 'Spoken English Expert', experience: '8+ Years', image: '/images/trainer-priya.jpg', bio: 'Priya specializes in helping learners speak fluently and confidently in everyday situations.', rating: 4.8 },
  { _id: 't2', name: 'Rahul Mehta', role: 'IELTS Expert', experience: '10+ Years', image: '/images/trainer-rahul.jpg', bio: 'Rahul has trained thousands of students to achieve their target IELTS band scores.', rating: 4.9 },
  { _id: 't3', name: 'Sneha Iyer', role: 'Communication Coach', experience: '7+ Years', image: '/images/trainer-sneha.jpg', bio: 'Sneha focuses on professional communication and interview readiness.', rating: 4.7 },
  { _id: 't4', name: 'Vikram Patel', role: 'Interview Preparation', experience: '6+ Years', image: '/images/trainer-vikram.jpg', bio: 'Vikram coaches learners on interview etiquette and confident self-presentation.', rating: 4.8 },
  { _id: 't5', name: 'Anita Deshmukh', role: 'Grammar Expert', experience: '9+ Years', image: '/images/trainer-anita.jpg', bio: 'Anita makes grammar simple and practical for learners of all levels.', rating: 4.6 },
  { _id: 't6', name: 'Karan Singh', role: 'PTE Expert', experience: '5+ Years', image: '/images/trainer-karan.jpg', bio: 'Karan specializes in PTE scoring strategies and exam techniques.', rating: 4.7 },
]

export const TESTIMONIALS = [
  { _id: 'r1', name: 'Anjali Sharma', role: 'Spoken English Student', rating: 5, text: 'EnglishSpark helped me improve my speaking skills and boosted my confidence tremendously.' },
  { _id: 'r2', name: 'Rohit Verma', role: 'IELTS Student', rating: 5, text: 'The trainers are amazing and the classes are very interactive. Highly recommend!' },
  { _id: 'r3', name: 'Neha Patil', role: 'Interview Preparation Student', rating: 5, text: 'I cracked my interview with the interview preparation course. Thank you EnglishSpark!' },
]

export const BLOGS = [
  { _id: 'b1', title: '10 Daily Habits to Improve Your English', category: 'English Tips', date: 'May 19, 2025', image: '/images/blog-1.jpg', excerpt: 'Small daily habits that compound into major improvements in your spoken English over time.' },
  { _id: 'b2', title: 'How to Improve Your Pronunciation', category: 'Pronunciation', date: 'May 19, 2025', image: '/images/blog-2.jpg', excerpt: 'Practical exercises to sound clearer and more confident when you speak.' },
  { _id: 'b3', title: 'Top 20 Vocabulary Words You Must Know', category: 'Vocabulary', date: 'May 19, 2025', image: '/images/blog-3.jpg', excerpt: 'Expand your vocabulary with these commonly used yet impactful words.' },
  { _id: 'b4', title: 'Tips to Crack an Interview in First Attempt', category: 'Interview Tips', date: 'May 20, 2025', image: '/images/blog-4.jpg', excerpt: 'A step-by-step approach to prepare and succeed in your next interview.' },
  { _id: 'b5', title: 'Common Grammar Mistakes to Avoid', category: 'Grammar', date: 'April 28, 2025', image: '/images/blog-5.jpg', excerpt: 'Avoid these frequent grammar slip-ups to sound more polished.' },
  { _id: 'b6', title: 'How to Think in English', category: 'English Tips', date: 'April 20, 2025', image: '/images/blog-6.jpg', excerpt: 'Train your brain to think directly in English for natural fluency.' },
]

export const FAQS = [
  { q: 'What is the duration of the courses?', a: 'Our courses range from 1 to 3 months depending on the course you choose, with flexible batch timings.' },
  { q: 'Are certificates provided after the course?', a: 'Yes, every student receives a certificate of completion after finishing their course successfully.' },
  { q: 'Do you offer online classes?', a: 'Yes, we offer both online live classes and in-person sessions at our institute.' },
  { q: 'How can I book a demo class?', a: 'You can book a free demo class from the Demo Class page by filling out a short form.' },
  { q: 'What is the fee structure?', a: 'Fees vary by course. Please check the individual course details page for exact pricing.' },
  { q: 'Is there any refund policy?', a: 'Yes, we offer a refund within 7 days of enrollment if you are not satisfied with the course.' },
]
