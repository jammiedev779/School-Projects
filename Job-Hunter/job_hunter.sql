-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 06, 2023 at 06:25 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `job_hunter`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `question_id` bigint(20) UNSIGNED NOT NULL,
  `answer` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `applies`
--

CREATE TABLE `applies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `post_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `applies`
--

INSERT INTO `applies` (`id`, `user_id`, `post_id`, `created_at`, `updated_at`) VALUES
(24, 10, 24, '2023-06-24 19:20:36', '2023-06-24 19:20:36'),
(25, 10, 14, '2023-06-24 21:22:47', '2023-06-24 21:22:47'),
(26, 10, 14, '2023-06-24 21:22:57', '2023-06-24 21:22:57'),
(27, 16, 17, '2023-06-25 19:35:06', '2023-06-25 19:35:06'),
(28, 16, 7, '2023-06-25 19:36:46', '2023-06-25 19:36:46'),
(29, 17, 8, '2023-06-25 19:52:09', '2023-06-25 19:52:09'),
(31, 10, 18, '2023-06-25 20:17:28', '2023-06-25 20:17:28'),
(33, 10, 28, '2023-06-25 23:09:23', '2023-06-25 23:09:23'),
(34, 10, 18, '2023-06-26 01:49:27', '2023-06-26 01:49:27');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tag_id` bigint(20) UNSIGNED DEFAULT NULL,
  `title` text NOT NULL,
  `author` varchar(100) NOT NULL,
  `image` varchar(255) NOT NULL,
  `article` text NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `view_count` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `tag_id`, `title`, `author`, `image`, `article`, `category`, `view_count`, `created_at`, `updated_at`) VALUES
(10, 1, '5 Essential Skills for Career Advancement', 'John Smith', 'career6.png', '<p>Are you looking to take your career to the next level? In today\'s competitive job market, it\'s crucial to develop a strong skill set that sets you apart from the crowd. In this article, we will explore five essential skills that can propel your career forward.</p>\r\n<ol>\r\n<li>\r\n<p>Effective Communication: Communication skills are vital in any profession. Whether it\'s expressing your ideas clearly, active listening, or collaborating with team members, honing your communication skills will help you succeed in your career.</p>\r\n</li>\r\n<li>\r\n<p>Leadership Abilities: Leadership skills are highly valued in the workplace. Being able to inspire and motivate others, make informed decisions, and take responsibility are key attributes that can open doors to new opportunities.</p>\r\n</li>\r\n<li>\r\n<p>Adaptability and Flexibility: In today\'s fast-paced and ever-changing work environment, adaptability is crucial. Employers value individuals who can quickly adjust to new situations, embrace change, and thrive in diverse environments.</p>\r\n</li>\r\n<li>\r\n<p>Continuous Learning: Investing in your own personal and professional growth is essential. Stay updated with the latest industry trends, seek out learning opportunities, attend workshops, and pursue relevant certifications to enhance your knowledge and expertise.</p>\r\n</li>\r\n<li>\r\n<p>Problem-Solving: Employers value individuals who can identify challenges, think critically, and propose effective solutions. Developing strong problem-solving skills will make you an invaluable asset to any organization.</p>\r\n</li>\r\n</ol>\r\n<p>Remember, career development is a continuous journey. By focusing on these essential skills, you can position yourself for growth, seize new opportunities, and achieve long-term success in your chosen field.</p>\r\n<p>By regularly refining and expanding your skill set, you\'ll be well-equipped to navigate the ever-evolving job market and make significant strides in your career.</p>\r\n<p>Remember, your career is a marathon, not a sprint. Embrace the learning process, embrace challenges, and continuously strive for improvement. With dedication and perseverance, you can unlock your full potential and achieve your professional goals.</p>\r\n<p>Stay tuned for more career development tips and resources to help you thrive in your chosen career path.</p>\r\n<p>This article aims to provide valuable insights and guidance for individuals seeking career advancement and personal growth within their profession. By focusing on the five essential skills mentioned above, readers can enhance their career prospects and stand out in today\'s competitive job market.</p>', NULL, 0, NULL, NULL),
(11, 2, 'Mastering the Art of Job Searching', 'Emily Johnson', '1687658680-career1.png', '<p>Searching for a new job can be an exciting yet challenging journey. To maximize your chances of landing your dream job, it\'s essential to have a well-planned and strategic approach. In this article, we will discuss ten effective strategies to make your job search successful.</p>\r\n<ol>\r\n<li>\r\n<p>Define Your Goals: Start by clarifying your career goals and aspirations. Determine the specific job role, industry, and company culture that align with your skills and interests. This clarity will help you target your search effectively.</p>\r\n</li>\r\n<li>\r\n<p>Polish Your Resume: Craft a compelling resume that highlights your key accomplishments, skills, and experiences. Tailor it to each job application, emphasizing relevant qualifications and achievements.</p>\r\n</li>\r\n<li>\r\n<p>Networking: Leverage your professional network to uncover hidden job opportunities. Attend industry events, join online communities, and connect with professionals in your desired field. Networking can open doors to valuable connections and job leads.</p>\r\n</li>\r\n<li>\r\n<p>Online Job Portals: Utilize popular online job portals and career websites to search for job openings. Customize your profile and set up job alerts to stay updated with the latest opportunities in your preferred industry.</p>\r\n</li>\r\n<li>\r\n<p>Company Research: Conduct thorough research on companies you\'re interested in. Understand their values, mission, and culture to ensure alignment with your career goals. Tailor your applications to showcase your enthusiasm and knowledge about the company.</p>\r\n</li>\r\n<li>\r\n<p>Utilize Social Media: Optimize your professional presence on platforms like LinkedIn. Showcase your skills, connect with industry professionals, and engage in relevant conversations. Many employers use social media to identify potential candidates.</p>\r\n</li>\r\n<li>\r\n<p>Follow-up: After submitting applications or attending interviews, send follow-up emails or thank-you notes to express your interest and appreciation. This simple gesture can leave a positive impression on hiring managers.</p>\r\n</li>\r\n<li>\r\n<p>Prepare for Interviews: Research common interview questions and practice your responses. Prepare anecdotes that demonstrate your skills and achievements. Dress professionally, maintain good body language, and be confident during interviews.</p>\r\n</li>\r\n<li>\r\n<p>Skill Development: Invest in continuous learning and skill development. Acquire new skills, enroll in relevant courses, or earn certifications to enhance your expertise. This demonstrates your commitment to growth and makes you a more attractive candidate.</p>\r\n</li>\r\n<li>\r\n<p>Stay Positive and Persistent: Job searching can be challenging, and rejection is a part of the process. Stay positive, maintain a proactive mindset, and persistently pursue opportunities. Each setback brings you closer to the right opportunity.</p>\r\n</li>\r\n</ol>\r\n<p>By implementing these strategies, you can navigate the job search process effectively and increase your chances of securing a rewarding job. Remember, patience and perseverance are key. Stay focused, adapt your approach when necessary, and keep pushing forward.</p>\r\n<p>Good luck with your job search journey! Stay tuned for more tips and insights on finding success in the job market.</p>\r\n<p>This article provides practical advice and strategies for individuals embarking on a job search. By following these ten strategies, readers can enhance their job search approach and increase their likelihood of finding suitable employment.</p>', NULL, 0, NULL, NULL),
(12, 3, 'Crafting an Impressive Resume: Key Elements and Tips', 'Emily Thompson', '1687658710-career3.jpg', '<p>A well-crafted resume is your ticket to grabbing the attention of potential employers and securing job interviews. In this article, we will explore the key elements and provide valuable tips for creating an impressive resume that stands out from the competition.</p>\r\n<ol>\r\n<li>\r\n<p>Clear and Concise Format: Start with a clean and organized format. Use headings, bullet points, and white space to enhance readability. Keep the overall layout consistent and ensure that the important information is easily accessible.</p>\r\n</li>\r\n<li>\r\n<p>Contact Information: Include your name, phone number, email address, and professional social media profiles (such as LinkedIn). Make sure your contact information is up to date and prominently placed at the top of your resume.</p>\r\n</li>\r\n<li>\r\n<p>Professional Summary or Objective Statement: Write a concise and compelling summary or objective statement that highlights your skills, experiences, and career goals. Tailor this section to match the requirements of the job you\'re applying for.</p>\r\n</li>\r\n<li>\r\n<p>Relevant Work Experience: List your work experience in reverse chronological order, starting with the most recent job. Include the company name, job title, dates of employment, and a description of your responsibilities and accomplishments. Focus on achievements that demonstrate your skills and contributions.</p>\r\n</li>\r\n<li>\r\n<p>Education and Certifications: Provide details about your educational background, including degrees earned, institutions attended, and any relevant certifications or training programs completed. Mention any honors, awards, or special achievements.</p>\r\n</li>\r\n<li>\r\n<p>Skills and Keywords: Include a section highlighting your key skills and areas of expertise. Incorporate relevant keywords from the job description to increase your resume\'s visibility to applicant tracking systems (ATS) used by many employers.</p>\r\n</li>\r\n<li>\r\n<p>Achievements and Accomplishments: Highlight specific achievements that demonstrate your capabilities. Use quantifiable metrics whenever possible to showcase the impact you made in previous roles. This helps employers understand the value you can bring to their organization.</p>\r\n</li>\r\n<li>\r\n<p>Professional Associations and Volunteering: Mention any professional associations, memberships, or volunteering experiences that are relevant to your field. This demonstrates your commitment to professional growth and community involvement.</p>\r\n</li>\r\n<li>\r\n<p>Tailor for Each Job Application: Customize your resume for each job application by aligning your skills and experiences with the specific requirements of the position. This shows employers that you\'ve taken the time to understand their needs.</p>\r\n</li>\r\n<li>\r\n<p>Proofread and Edit: Thoroughly proofread your resume for grammatical errors, typos, and formatting issues. Ask a trusted friend or mentor to review it as well. A polished and error-free resume creates a positive impression.</p>\r\n</li>\r\n</ol>\r\n<p>Remember, your resume is your marketing tool. It should highlight your strengths, showcase your qualifications, and make a memorable impression on hiring managers. Tailor it to each opportunity, emphasizing your most relevant experiences and skills.</p>\r\n<p>By incorporating these key elements and following these tips, you can create a standout resume that increases your chances of landing interviews and advancing in your career.</p>\r\n<p>Best of luck with your resume-writing endeavors! Stay tuned for more resume tips and resources to help you excel in your job search.</p>\r\n<p>This article provides guidance and tips for crafting an impressive resume. By following the outlined elements and incorporating the provided advice, readers can create a compelling resume that effectively showcases their qualifications and increases their chances of securing job interviews.</p>', NULL, 0, NULL, NULL),
(13, 4, 'Mastering the Art of Successful Job Interviews: 7 Essential Tips', 'Michael Anderson', '1687658740-career4.png', '<p>Congratulations! You\'ve secured a job interview, and now it\'s time to make a lasting impression on the hiring manager. In this article, we will discuss seven essential tips to help you master the art of successful job interviews.</p>\r\n<ol>\r\n<li>\r\n<p>Research the Company: Take the time to thoroughly research the company before your interview. Understand their mission, values, recent achievements, and the industry landscape. This knowledge will demonstrate your genuine interest and preparation.</p>\r\n</li>\r\n<li>\r\n<p>Practice Common Interview Questions: Prepare responses to common interview questions such as \"Tell me about yourself\" or \"Why do you want to work here?\" Practice your answers to ensure they are concise, relevant, and highlight your skills and experiences.</p>\r\n</li>\r\n<li>\r\n<p>Showcase Your Accomplishments: During the interview, don\'t just list your responsibilities; highlight your achievements. Discuss specific projects or initiatives where you made a significant impact. Quantify your accomplishments whenever possible to provide context.</p>\r\n</li>\r\n<li>\r\n<p>Demonstrate Cultural Fit: Employers not only seek skilled individuals but also those who align with their company culture. Showcase your values, interpersonal skills, and ability to collaborate effectively. Be authentic and demonstrate your enthusiasm for the company.</p>\r\n</li>\r\n<li>\r\n<p>Ask Thoughtful Questions: Prepare thoughtful questions to ask the interviewer. This shows your genuine interest in the role and allows you to gather important information about the company. Ask about company culture, team dynamics, or future growth opportunities.</p>\r\n</li>\r\n<li>\r\n<p>Dress Professionally and Pay Attention to Body Language: Dress professionally for the interview, even if the company has a more casual dress code. Pay attention to your body language&mdash;maintain eye contact, sit up straight, and offer a firm handshake. Non-verbal cues can leave a lasting impression.</p>\r\n</li>\r\n<li>\r\n<p>Follow-Up with a Thank-You Note: After the interview, send a personalized thank-you note or email to express your appreciation for the opportunity. Use this opportunity to reiterate your interest, briefly summarize your qualifications, and leave a positive impression.</p>\r\n</li>\r\n</ol>\r\n<p>Remember, preparation is key to a successful interview. Practice your responses, anticipate potential questions, and research the company thoroughly. Show confidence, be yourself, and let your personality shine through.</p>\r\n<p>Each interview is a learning experience, regardless of the outcome. Reflect on your performance, identify areas for improvement, and apply those lessons to future interviews.</p>\r\n<p>Good luck with your upcoming interviews! Stay tuned for more interview tips and resources to help you excel in your job search.</p>\r\n<p>This article provides essential tips for individuals preparing for job interviews. By implementing these strategies, readers can enhance their interview performance, increase their confidence, and leave a positive impression on potential employers.</p>', NULL, 0, NULL, NULL),
(14, 5, 'Unlocking Your Potential: Strategies for Continuous Career Growth', 'Jessica Roberts', '1687658763-career5.jpg', '<p>In today\'s rapidly evolving job market, continuous career growth is essential for professional success and personal fulfillment. If you\'re looking to take your career to new heights, consider implementing the following strategies to unlock your full potential.</p>\r\n<ol>\r\n<li>\r\n<p>Set Clear Goals: Define your career goals and create a roadmap for achieving them. Set both short-term and long-term objectives that align with your passions and aspirations. Clear goals provide direction and motivation for your career journey.</p>\r\n</li>\r\n<li>\r\n<p>Embrace Lifelong Learning: Commit to continuous learning and skill development. Stay updated with industry trends, enroll in relevant courses, attend workshops, and pursue certifications. Embracing learning opportunities equips you with new knowledge and enhances your marketability.</p>\r\n</li>\r\n<li>\r\n<p>Seek Mentorship and Networking: Build a strong professional network and seek guidance from mentors. Mentors can provide valuable insights, share their experiences, and offer advice to help you navigate your career path. Networking opens doors to new opportunities and connections.</p>\r\n</li>\r\n<li>\r\n<p>Embrace Challenges and Take Risks: Don\'t shy away from challenges or fear taking calculated risks. Stepping out of your comfort zone allows for growth and development. Embrace new projects, volunteer for leadership roles, and seize opportunities that stretch your capabilities.</p>\r\n</li>\r\n<li>\r\n<p>Develop Strong Communication Skills: Effective communication is critical for career advancement. Enhance your verbal and written communication skills, active listening, and presentation abilities. Strong communication fosters collaboration, builds relationships, and opens doors to new opportunities.</p>\r\n</li>\r\n<li>\r\n<p>Build a Personal Brand: Craft a compelling personal brand that showcases your expertise, values, and unique strengths. Establish a professional online presence through platforms like LinkedIn and share valuable insights to position yourself as an industry expert.</p>\r\n</li>\r\n<li>\r\n<p>Embrace Feedback and Self-Reflection: Be open to feedback and use it as a tool for growth. Actively seek feedback from colleagues, supervisors, and mentors. Engage in self-reflection to identify areas for improvement and develop a growth mindset.</p>\r\n</li>\r\n<li>\r\n<p>Cultivate Resilience and Adaptability: In a rapidly changing work environment, resilience and adaptability are essential. Develop resilience by embracing failures as learning opportunities and bouncing back from setbacks. Adapt to new technologies, industry trends, and evolving job market demands.</p>\r\n</li>\r\n<li>\r\n<p>Seek Growth Opportunities within Your Current Role: Look for growth opportunities within your current job. Volunteer for cross-functional projects, take on additional responsibilities, or propose innovative solutions to challenges. Show initiative and a willingness to learn and grow.</p>\r\n</li>\r\n<li>\r\n<p>Find Work-Life Balance: Maintaining a healthy work-life balance is crucial for long-term career growth. Prioritize self-care, set boundaries, and allocate time for hobbies and activities outside of work. Balancing your personal and professional life fosters well-being and increases productivity.</p>\r\n</li>\r\n</ol>\r\n<p>Remember, career growth is a journey that requires patience, persistence, and continuous effort. By implementing these strategies, you can unlock your potential, seize opportunities, and achieve long-term career success.</p>\r\n<p>Stay committed to your growth, be proactive in seeking new challenges, and embrace a mindset of continuous improvement. Your career is in your hands&mdash;take charge and embark on a path of lifelong growth and fulfillment.</p>\r\n<p>Keep an eye out for more career growth tips and resources to support your professional journey.</p>\r\n<p>This article provides strategies for individuals seeking continuous career growth. By applying these strategies, readers can enhance their professional development, seize opportunities, and achieve their career goals.</p>', NULL, 0, NULL, NULL),
(16, 1, 'Achieving Work-Life Harmony: Strategies for a Fulfilling and Balanced Life', 'Sarah Thompson', '1687667141-career7.webp', '<p>In today\'s fast-paced and demanding world, achieving work-life balance has become increasingly challenging. However, with the right strategies and mindset, you can create a harmonious blend of work and personal life that promotes overall well-being and fulfillment. Let\'s explore some strategies to help you achieve work-life harmony.</p>\r\n<ol>\r\n<li>\r\n<p>Prioritize and Set Boundaries: Define your priorities and establish clear boundaries between work and personal life. Identify what truly matters to you and allocate time accordingly. Set boundaries by creating dedicated time for family, hobbies, self-care, and relaxation.</p>\r\n</li>\r\n<li>\r\n<p>Manage Time Effectively: Adopt effective time management techniques to maximize productivity and minimize stress. Prioritize tasks, delegate when possible, and avoid multitasking. Schedule breaks to recharge and avoid burnout. Use time-tracking tools to gain insights into how you spend your time.</p>\r\n</li>\r\n<li>\r\n<p>Practice Mindfulness: Incorporate mindfulness practices into your daily routine. Practice being present in the moment, whether it\'s during work tasks or personal activities. Engage in activities that promote relaxation and self-reflection, such as meditation, deep breathing exercises, or journaling.</p>\r\n</li>\r\n<li>\r\n<p>Establish Healthy Work Habits: Create a healthy work environment by setting realistic goals and managing workloads effectively. Avoid overworking and learn to say no when necessary. Take regular breaks, exercise, and maintain a nutritious diet to support your overall well-being.</p>\r\n</li>\r\n<li>\r\n<p>Communicate and Seek Support: Effective communication is vital in maintaining work-life harmony. Communicate openly with your colleagues, supervisors, and loved ones about your needs and priorities. Seek support from family, friends, or mentors when you need it. Delegate tasks and ask for help when necessary.</p>\r\n</li>\r\n<li>\r\n<p>Unplug and Disconnect: Establish designated times to unplug from technology and disconnect from work-related activities. Set boundaries for checking emails or engaging in work-related tasks outside of working hours. Allow yourself to fully immerse in personal activities without work distractions.</p>\r\n</li>\r\n<li>\r\n<p>Nurture Relationships: Invest time and effort into nurturing relationships with loved ones. Prioritize quality time with family and friends. Plan activities together, engage in meaningful conversations, and create lasting memories. Strong personal connections contribute to overall life satisfaction.</p>\r\n</li>\r\n<li>\r\n<p>Pursue Personal Passions and Hobbies: Make time for activities and hobbies that bring you joy and fulfillment outside of work. Engage in activities that align with your passions, whether it\'s painting, playing a musical instrument, gardening, or sports. These activities provide a sense of purpose and rejuvenation.</p>\r\n</li>\r\n<li>\r\n<p>Practice Self-Care: Prioritize self-care as an essential part of maintaining work-life harmony. Engage in activities that promote physical, mental, and emotional well-being, such as exercise, adequate sleep, healthy eating, and engaging in activities that bring you joy and relaxation.</p>\r\n</li>\r\n<li>\r\n<p>Embrace Flexibility: Whenever possible, seek flexible work arrangements that allow you to better manage your work-life balance. Explore options such as flexible working hours, remote work, or compressed workweeks. Embracing flexibility can significantly contribute to work-life harmony.</p>\r\n</li>\r\n</ol>\r\n<p>Remember, work-life harmony is unique to each individual. It requires ongoing self-reflection, adjustment, and a commitment to prioritizing what matters most to you. By implementing these strategies, you can create a more fulfilling and balanced life.</p>\r\n<p>Strive for work-life harmony, and remember to be kind to yourself along the way. Enjoy the journey of finding the right balance that allows you to thrive both personally and professionally.</p>', NULL, 0, NULL, '2023-06-25 10:26:07');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Full Time', NULL, NULL),
(2, 'Part Time', NULL, NULL),
(3, 'Freelance', NULL, NULL),
(4, 'Remote', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL,
  `location` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `website` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `manager` varchar(255) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'company'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `location`, `image`, `website`, `created_at`, `updated_at`, `email`, `password`, `email_verified_at`, `manager`, `bio`, `type`) VALUES
(9, 'Chanel', 'Phnom Penh', '1687402141-chanel.png', 'www.chanel.com', '2023-06-15 19:49:02', '2023-06-21 19:49:02', 'chanelcompany@gmail.com', '$2y$10$sqpA0YVItYtYG9rFl99bHeqBQqarARQFF3v2o9.PG8ZJlvh3IkqQ2', NULL, 'Chanel Manager', NULL, 'company'),
(10, 'Coca-Cola', 'Phnom Penh', '1687402336-Coca-Cola.png', 'https://us.coca-cola.com/', '2023-06-15 19:52:16', '2023-06-21 19:52:16', 'coca-cola@gmail.com', '$2y$10$LAJ7PnO8Fcwntx6n.AHOie7i5ORgVhPoJ7kId90ObxIK7z6tlVy82', NULL, 'coca cola', NULL, 'company'),
(11, 'IBM', 'Battambang', '1687402424-IBM.png', 'https://www.ibm.com/us-en', '2023-04-27 19:53:44', '2023-06-21 19:53:44', 'ibm@gmail.com', '$2y$10$oj3L8OFEMuoiZqc2/WStWOYl/aCzHfsHoLjpaWniZO/Blk5ct07Le', NULL, 'IBM', NULL, 'company'),
(12, 'McDonalds', 'Phnom Penh', '1687404165-McDonalds.png', 'https://www.mcdonalds.com/us/en-us.html', '2023-04-28 20:22:46', '2023-06-21 20:22:46', 'mcDonalds@gmail.com', '$2y$10$PaFeRZdaiMaC6iUrmyCcZ.pk7aJwWdQHA0bOlLz1VdUhRKBtiHOfa', NULL, 'McDonalds', NULL, 'company'),
(13, 'Nasa', 'Kampong Chhnang', '1687404289-nasa.png', 'https://www.nasa.gov/', '2023-05-22 20:24:49', '2023-06-21 20:24:49', 'nasa.space@gmail.com', '$2y$10$pYnwp.vsAL.vzzsRL0uIhOueJVDB4Z57/C9UfZuL3kg/f0EcVsEQe', NULL, 'nasa', NULL, 'company'),
(14, 'Nike', 'Phnom Penh', '1687406157-nike.png', 'https://www.nike.com/', '2023-05-29 20:55:57', '2023-06-21 20:55:57', 'nike.company@gmail.com', '$2y$10$lGOk/1g.OHZWAmdpcd2wLOiWVSywxY23pc1lIL9VQt0NWLQc9Dew.', NULL, 'Nike', NULL, 'company'),
(15, 'Shell', 'Kep', '1687406357-shell.png', 'https://www.shell.com/', '2023-05-30 20:59:17', '2023-06-21 20:59:17', 'shellinterprice@gmail.com', '$2y$10$7K5TZfZMtZ8FJ/BW/XSBBOn1CpHiQcRtApDgSqDkOhtXqZ/ViGVTm', NULL, 'shell', NULL, 'company'),
(16, 'Starbucks', 'Phnom Penh', '1687406470-Starbucks.png', 'https://www.starbucks.com/', '2023-06-21 21:01:10', '2023-06-22 23:26:40', 'starbucks@gmail.com', '$2y$10$qMj4OZecM1f3/GM7JepaSuznTfZ960PGpOymRo1Q8Acasq.2CT3HO', NULL, 'starbucks manager', NULL, 'company'),
(17, 'Tesla', 'Kandal', '1687406565-tesla.png', 'https://www.tesla.com/', '2023-05-16 21:02:45', '2023-06-21 21:02:45', 'tesla.elon@gmail.com', '$2y$10$yNmK9Lzkg0D8IsihoD.Cj.KHNGLy3uyVRxHaqjw.yPQB4j2mi4.pe', NULL, 'Elon Musk', NULL, 'company'),
(18, 'The London Underground', 'Phnom Penh', '1687406631-The London Underground.png', 'https://tfl.gov.uk/modes/tube/', '2023-06-21 21:03:51', '2023-06-21 21:03:51', 'tlu.uk@gmail.com', '$2y$10$vEZqndwm6NAS0ZIBBcISd.M.NHqxYdwifh0r1XosbDiHr0hdORQ62', NULL, 'TLU', NULL, 'company');

-- --------------------------------------------------------

--
-- Table structure for table `company_notification`
--

CREATE TABLE `company_notification` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `company_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `post_id` bigint(20) UNSIGNED NOT NULL,
  `seen` tinyint(1) NOT NULL DEFAULT 0,
  `title` text NOT NULL,
  `body` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `CV` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `company_notification`
--

INSERT INTO `company_notification` (`id`, `company_id`, `user_id`, `post_id`, `seen`, `title`, `body`, `created_at`, `updated_at`, `CV`) VALUES
(22, 16, 10, 24, 1, 'Environmental Engineer', 'Sombath Vinun have applied to your Job Application.', '2023-06-24 19:20:37', '2023-06-24 21:23:44', 'https://firebasestorage.googleapis.com/v0/b/soland-9a89e.appspot.com/o/cv%2F16876540896490.8165185211919359new_resume_001.pdf?alt=media&token=6c51c98c-7a3f-40f4-9b55-6b140e06dcf3'),
(23, 16, 10, 14, 0, 'Human Resources Specialist', 'Sombath Vinun have applied to your Job Application.', '2023-06-24 21:22:48', '2023-06-24 21:22:48', 'https://firebasestorage.googleapis.com/v0/b/soland-9a89e.appspot.com/o/cv%2F16876656453400.3070719230622836new_resume_001.pdf?alt=media&token=5bd9338d-1025-422c-b533-917276ff93af'),
(24, 16, 10, 14, 0, 'Human Resources Specialist', 'Sombath Vinun have applied to your Job Application.', '2023-06-24 21:22:58', '2023-06-24 21:22:58', 'https://firebasestorage.googleapis.com/v0/b/soland-9a89e.appspot.com/o/cv%2F16876656453400.3070719230622836new_resume_001.pdf?alt=media&token=5bd9338d-1025-422c-b533-917276ff93af'),
(25, 9, 16, 17, 0, 'Content Writer', 'John Wick have applied to your Job Application.', '2023-06-25 19:35:07', '2023-06-25 19:35:07', 'https://firebasestorage.googleapis.com/v0/b/soland-9a89e.appspot.com/o/cv%2F16877468536770.027868365632893966CV_TEMPLATE_0002.pdf?alt=media&token=b2d93552-765d-435b-be40-66cceb9e58d2'),
(26, 10, 16, 7, 0, 'Software Engineer', 'John Wick have applied to your Job Application.', '2023-06-25 19:36:47', '2023-06-25 19:36:47', 'https://firebasestorage.googleapis.com/v0/b/soland-9a89e.appspot.com/o/cv%2F16877468536770.027868365632893966CV_TEMPLATE_0002.pdf?alt=media&token=b2d93552-765d-435b-be40-66cceb9e58d2'),
(27, 9, 17, 8, 1, 'Marketing Manager', 'Jammie Mark have applied to your Job Application.', '2023-06-25 19:52:09', '2023-06-25 19:52:40', 'https://firebasestorage.googleapis.com/v0/b/soland-9a89e.appspot.com/o/cv%2F16877479084110.13234588887671572CV_TEMPLATE_0002.pdf?alt=media&token=e5f5d882-2d3c-4631-8279-ce4f9badad57'),
(28, 9, 10, 17, 1, 'Content Writer', 'Sombath Vinun have applied to your Job Application.', '2023-06-25 20:08:45', '2023-06-25 20:40:49', 'https://firebasestorage.googleapis.com/v0/b/soland-9a89e.appspot.com/o/cv%2F16876656453400.3070719230622836new_resume_001.pdf?alt=media&token=5bd9338d-1025-422c-b533-917276ff93af'),
(29, 9, 10, 18, 1, 'Supply Chain Analyst', 'Sombath Vinun have applied to your Job Application.', '2023-06-25 20:17:29', '2023-06-25 20:17:51', 'https://firebasestorage.googleapis.com/v0/b/soland-9a89e.appspot.com/o/cv%2F16876656453400.3070719230622836new_resume_001.pdf?alt=media&token=5bd9338d-1025-422c-b533-917276ff93af'),
(31, 16, 10, 28, 0, 'Graphic Designer', 'Sombath Vinun have applied to your Job Application.', '2023-06-25 23:09:23', '2023-06-25 23:09:23', 'https://firebasestorage.googleapis.com/v0/b/soland-9a89e.appspot.com/o/cv%2F16877592127000.5870064221796605CV_TEMPLATE_0002.pdf?alt=media&token=e7b9cf48-852d-4b05-9328-6e644c3e3454'),
(32, 9, 10, 18, 1, 'Supply Chain Analyst', 'Sombath Vinun have applied to your Job Application.', '2023-06-26 01:49:27', '2023-06-26 01:49:52', 'https://firebasestorage.googleapis.com/v0/b/soland-9a89e.appspot.com/o/cv%2F16877592127000.5870064221796605CV_TEMPLATE_0002.pdf?alt=media&token=e7b9cf48-852d-4b05-9328-6e644c3e3454');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `phone`, `message`, `created_at`, `updated_at`, `subject`) VALUES
(2, 'Sombath Vinun', 'vinunsombath@gmail.com', '0965433266', 'Dear [Employee\'s Name],\nWe are thrilled to announce that you have been promoted to the position of [New Position]. This is a well-deserved recognition of your hard work and dedication. We have no doubt that you will excel in your new role. Please join us in celebrating your success during a small gathering in the conference room tomorrow at 3:00 PM.\nCongratulations once again!\nBest regards,\n[Sombath Vinun]', '2023-06-23 20:34:31', '2023-06-23 20:34:31', NULL),
(3, 'Joub Pijet', 'pijet@gmail.com', '012553956', 'Dear [Applicant\'s Name],\nThank you for your interest in the [Position] at [Your Company]. We wanted to update you on the status of your application. After careful consideration, we regret to inform you that we have decided to move forward with other candidates who closely match our requirements. We appreciate the time and effort you put into the application process and wish you the best in your job search.\nSincerely,\n[Hiring Manager]', '2023-06-23 20:37:41', '2023-06-23 20:37:41', NULL),
(4, 'Som Visal', 'visalnozin@gmail.com', '0924539567', 'Dear [Recipient\'s Name],\nYour opinion matters to us! We are conducting a survey to gather feedback and improve our products/services. We would greatly appreciate it if you could spare a few minutes to complete the survey by clicking on the following link: [Survey Link]. Your responses will remain confidential, and your valuable insights will help us serve you better in the future.\nThank you for your participation!\nBest regards,\n[Your Company]', '2023-06-23 20:38:53', '2023-06-23 20:38:53', NULL),
(5, 'Rouen Hokleng', 'hokleng@gmail.com', '0964623456', 'Dear Team,\nWe are excited to inform you that our company will be relocating to a new office space effective [Relocation Date]. The new address is [New Office Address]. We have ensured a seamless transition, and all your workstations will be set up prior to the move. If you have any questions or concerns, please don\'t hesitate to reach out to the facilities team. We appreciate your cooperation during this exciting time.\nRegards,\n[Management]', '2023-06-23 20:40:04', '2023-06-23 20:40:04', NULL),
(6, 'Jii VannSuii', 'vannsuii007@gmail.com', '0962445677', 'Dear Team,\nWith the holiday season just around the corner, we would like to extend our warmest wishes to you and your families. We would also like to inform you that our office will be closed from [Start Date] to [End Date] for the holidays. We encourage you to take this time to relax, recharge, and spend quality time with your loved ones. We look forward to seeing you all in the new year, refreshed and ready to tackle new challenges!\nHappy holidays!\n[Your Name]', '2023-06-23 20:41:01', '2023-06-23 20:41:01', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `experiences`
--

CREATE TABLE `experiences` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `company_id` bigint(20) UNSIGNED NOT NULL,
  `start` date NOT NULL,
  `end` date DEFAULT NULL,
  `position` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `question` text NOT NULL,
  `answer` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_categories`
--

CREATE TABLE `job_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `job_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `icon` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job_categories`
--

INSERT INTO `job_categories` (`id`, `job_name`, `created_at`, `updated_at`, `icon`) VALUES
(1, 'Information Technology', NULL, NULL, 'Information Technology.png'),
(2, 'Healthcare', NULL, NULL, 'Healthcare.png'),
(3, 'Finance', NULL, NULL, 'Finance.png'),
(4, 'Sales', NULL, NULL, 'Sales.png'),
(5, 'Marketing', NULL, NULL, 'Marketing.png'),
(6, 'Engineering', NULL, NULL, 'Engineering.png'),
(7, 'Education', NULL, NULL, 'Education.png'),
(8, 'Customer Service', NULL, NULL, 'Customer Service.png'),
(9, 'Administration', NULL, NULL, 'Administration.png'),
(10, 'Human Resources', NULL, NULL, 'Human Resources.png'),
(11, 'Retail', NULL, NULL, 'Retail.png'),
(12, 'Hospitality', NULL, NULL, 'Hospitality.png'),
(13, 'Manufacturing', NULL, NULL, 'Manufacturing.png'),
(14, 'Legal', NULL, NULL, 'Legal.png'),
(15, 'Consulting', NULL, NULL, 'Consulting.png'),
(16, 'Media and Communications', NULL, NULL, 'Media and Communications.png'),
(17, 'Art and Design', NULL, NULL, 'Art and Design.png'),
(18, 'Transportation and Logistics', NULL, NULL, 'Transportation and Logistics.png'),
(19, 'Construction', NULL, NULL, 'Construction.png'),
(20, 'Research and Development', NULL, NULL, 'Research and Development.png'),
(21, 'Other', NULL, NULL, 'Other.png');

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `answer_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_04_23_105825_create_companies_table', 1),
(6, '2023_04_23_155455_create_categories_table', 1),
(7, '2023_04_23_160324_create_job_categories_table', 1),
(8, '2023_04_23_162557_create_user_interests_table', 1),
(9, '2023_04_24_075527_create_posts_table', 1),
(10, '2023_04_24_081727_create_skills_table', 1),
(11, '2023_04_24_084408_create_user_skills_table', 1),
(12, '2023_04_27_024212_create_applies_table', 1),
(13, '2023_04_27_024851_create_experiences_table', 1),
(14, '2023_04_27_025452_create_tags_table', 1),
(16, '2023_04_27_034617_create_questions_table', 1),
(17, '2023_04_27_035117_create_answers_table', 1),
(18, '2023_04_27_035623_create_likes_table', 1),
(19, '2023_04_27_040110_create_faqs_table', 1),
(20, '2023_04_27_153806_add_api_token_column_to_users_table', 1),
(21, '2023_05_15_103503_add_hour_column_to_posts_table', 1),
(22, '2023_05_17_102018_add_new_column_to_post_table', 1),
(23, '2023_05_17_113754_add_new_column_to_job_categories', 1),
(24, '2023_05_17_122648_add_new_column_to_companies', 1),
(25, '2023_05_18_153453_add_type_column_to_users', 1),
(26, '2023_05_18_153520_add_type_column_to_company', 1),
(27, '2023_05_22_061648_create_company_notification_table', 1),
(29, '2023_04_27_025901_create_blogs_table', 2),
(31, '2023_06_15_021254_create_contacts_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'main', '5c206e1f9bf235517d96a62a14ffd789048c322275d29273ba61e6172785a496', '[\"*\"]', NULL, NULL, '2023-05-28 19:42:02', '2023-05-28 19:42:02'),
(3, 'App\\Models\\User', 1, 'main', '8901840cfc2a4e1f65f89014a8544f384141cc186d3f8dbe714e1cd8aff8be09', '[\"*\"]', NULL, NULL, '2023-05-28 19:57:59', '2023-05-28 19:57:59'),
(7, 'App\\Models\\User', 1, 'main', '49be15793e70534018a35349d857f01a1bd6e29c5e252c259bfb2dbd868cc47e', '[\"*\"]', '2023-05-29 08:30:09', NULL, '2023-05-29 08:30:08', '2023-05-29 08:30:09'),
(8, 'App\\Models\\User', 1, 'main', 'b62a1db267519e209aed1442008699b3fe0ba92a562550bca3ae4f816639585d', '[\"*\"]', '2023-05-29 08:33:27', NULL, '2023-05-29 08:33:27', '2023-05-29 08:33:27'),
(9, 'App\\Models\\User', 1, 'main', '718975ec013067fbb47612d7f7acfc4d9e94423cbefc634f341826ace2ac63e3', '[\"*\"]', '2023-05-29 08:33:52', NULL, '2023-05-29 08:33:52', '2023-05-29 08:33:52'),
(10, 'App\\Models\\User', 1, 'main', '78df815dd1988f1e2912afbf8d8c061c2070e3f7bee1b5a9582dc64d3ab49623', '[\"*\"]', '2023-05-29 08:35:52', NULL, '2023-05-29 08:35:51', '2023-05-29 08:35:52'),
(11, 'App\\Models\\User', 1, 'main', '25a1ec261f0cb4e7a575f2f6b4e5fd6d9541a2acb528ba8f0638b381103d276c', '[\"*\"]', '2023-05-29 08:36:49', NULL, '2023-05-29 08:36:48', '2023-05-29 08:36:49'),
(19, 'App\\Models\\User', 1, 'main', '65ebd7d81e33ed14947bbb1014f494145879bb618f466649b8b3780463e199ac', '[\"*\"]', NULL, NULL, '2023-05-29 21:05:42', '2023-05-29 21:05:42'),
(29, 'App\\Models\\User', 1, 'main', 'fc669544752efb231effe2f592cc91b6fa9a52f0784f61da0904d31c67194cb7', '[\"*\"]', NULL, NULL, '2023-06-18 09:24:19', '2023-06-18 09:24:19'),
(30, 'App\\Models\\User', 1, 'main', '6a937d572ff5268075ac802be22305c0aebfed907eea7c07d5a3e15c058891c0', '[\"*\"]', NULL, NULL, '2023-06-21 01:08:13', '2023-06-21 01:08:13'),
(31, 'App\\Models\\User', 1, 'main', 'fee6c3d58a0e75ed33e57557a4db105c9d0b83930b38925659eacbf2c7f759ed', '[\"*\"]', NULL, NULL, '2023-06-21 08:57:49', '2023-06-21 08:57:49'),
(32, 'App\\Models\\User', 1, 'main', 'e8c73f3ca1981eeb9aa3f6e6720c71b886e3b15e75fd84c0bdbeddf66b85fcc0', '[\"*\"]', NULL, NULL, '2023-06-21 08:58:59', '2023-06-21 08:58:59'),
(33, 'App\\Models\\User', 1, 'main', '44bb71a7f00fa6e8dccbeefc2694b510c932c20f25a439fa988b6c6b666b4606', '[\"*\"]', NULL, NULL, '2023-06-21 09:16:37', '2023-06-21 09:16:37'),
(34, 'App\\Models\\User', 1, 'main', '7355c8663cb84543d0d4fa55a906c360144c882e63203c6e10c10b97a25aa6ea', '[\"*\"]', NULL, NULL, '2023-06-21 09:20:57', '2023-06-21 09:20:57'),
(35, 'App\\Models\\User', 7, 'main', '2051f9359d8dc79f79d7a560a30bcd45623e2caa239a6aad441e47d548603c6b', '[\"*\"]', '2023-06-21 18:54:53', NULL, '2023-06-21 09:34:11', '2023-06-21 18:54:53'),
(36, 'App\\Models\\User', 1, 'main', 'ef1967cb69e0897960b1ec2174ca9110b8fb20651ccc84b937742bea70dcd890', '[\"*\"]', NULL, NULL, '2023-06-21 09:36:03', '2023-06-21 09:36:03'),
(41, 'App\\Models\\Company', 11, 'main', '5202480ba5fcb2d88c5ce278277025d4df2608c5c49776dd3658d6f1e1e72a27', '[\"*\"]', '2023-06-21 19:54:08', NULL, '2023-06-21 19:53:44', '2023-06-21 19:54:08'),
(49, 'App\\Models\\User', 8, 'main', '01197ebedc13feaa5ffd1a5cd261d480aa399ddbcbbafb7e22b5afe74fe6026d', '[\"*\"]', '2023-06-21 23:42:40', NULL, '2023-06-21 23:42:25', '2023-06-21 23:42:40'),
(50, 'App\\Models\\User', 9, 'main', '38f9f6d5c99115982d034b65431073a5b2baae56534057fe24cd2970e1b6bdae', '[\"*\"]', '2023-06-21 23:45:34', NULL, '2023-06-21 23:44:47', '2023-06-21 23:45:34'),
(65, 'App\\Models\\User', 1, 'main', 'd3dd6f154f7ec4f43b593180ad31f1e63ccb545cea7782d423aa7674fb73d2c6', '[\"*\"]', NULL, NULL, '2023-06-22 09:31:29', '2023-06-22 09:31:29'),
(92, 'App\\Models\\User', 14, 'main', 'ec1164622bbef0cdc8e6b3c16b436d768d6ca692f5d4009d304cb20bce31d58e', '[\"*\"]', '2023-06-24 19:17:52', NULL, '2023-06-24 19:17:29', '2023-06-24 19:17:52'),
(94, 'App\\Models\\Company', 16, 'main', '73b39872cc515267645e777690b99f19a6e65e6b1f23a60f02227cd7d0a8210f', '[\"*\"]', '2023-06-24 19:23:13', NULL, '2023-06-24 19:23:01', '2023-06-24 19:23:13'),
(95, 'App\\Models\\Company', 16, 'main', '8c82aa992bfc8612e8e0efb8ca4db0eaf25db36670ead7aae4e6cdeb310a9cb0', '[\"*\"]', '2023-06-24 20:46:55', NULL, '2023-06-24 19:24:04', '2023-06-24 20:46:55'),
(96, 'App\\Models\\User', 1, 'main', 'ee1ead31ec27bc9af82f32bfc5ed4d8b5a46f37e03002067099b388d11deb62f', '[\"*\"]', NULL, NULL, '2023-06-24 19:29:52', '2023-06-24 19:29:52'),
(101, 'App\\Models\\User', 10, 'main', '7acfe8b9891e05f67b3971e8a74d26521189af4714992e5954758bb1f9e97873', '[\"*\"]', NULL, NULL, '2023-06-24 21:22:14', '2023-06-24 21:22:14'),
(104, 'App\\Models\\User', 1, 'main', '2649b1753f50204f36d17a6511ece16987c9ff3872bdd4aa087eeeed21db4a38', '[\"*\"]', NULL, NULL, '2023-06-24 21:24:50', '2023-06-24 21:24:50'),
(107, 'App\\Models\\User', 1, 'main', 'ed16b67f1dc8366732d6d306c95628133177b73e9ad1461d06990424bf4bf21c', '[\"*\"]', NULL, NULL, '2023-06-25 11:13:34', '2023-06-25 11:13:34'),
(114, 'App\\Models\\User', 1, 'main', '369c20f2be5ba879f14565e05813a1878f23e4bc4f68e11f69d65a6725f39a25', '[\"*\"]', NULL, NULL, '2023-06-25 19:53:49', '2023-06-25 19:53:49'),
(115, 'App\\Models\\User', 18, 'main', 'd1f8b60fe3e8f64dcd0ab76153a1bbf228dfe82119930c2a4eb49cf2ffc62c9f', '[\"*\"]', '2023-06-25 20:02:11', NULL, '2023-06-25 20:02:00', '2023-06-25 20:02:11'),
(119, 'App\\Models\\User', 1, 'main', '87f535a5b5575c21422a263a43dae1a940304fb934044a4592a8761b7207d401', '[\"*\"]', NULL, NULL, '2023-06-25 20:10:08', '2023-06-25 20:10:08'),
(123, 'App\\Models\\User', 1, 'main', '7ec793bf2739b85cc67c17ec29b6830ae0d28f5c698c1965a57aaa11f4bcf1c9', '[\"*\"]', NULL, NULL, '2023-06-25 20:18:33', '2023-06-25 20:18:33'),
(126, 'App\\Models\\User', 1, 'main', '33d565616b307e62a425c55ceb168c6cb90124b368b259dbb7ff8ca49621ad33', '[\"*\"]', NULL, NULL, '2023-06-25 20:28:50', '2023-06-25 20:28:50'),
(127, 'App\\Models\\User', 1, 'main', 'b20c8d6881bbd436eac3d4c50435a625739f56781995e8463f6124a83eb652dc', '[\"*\"]', NULL, NULL, '2023-06-25 20:37:41', '2023-06-25 20:37:41'),
(128, 'App\\Models\\User', 1, 'main', '40dc7fce8b7271bb6cf135957e3f965d9d5498db8345f660e512a1861bbd70f1', '[\"*\"]', NULL, NULL, '2023-06-25 20:41:25', '2023-06-25 20:41:25'),
(129, 'App\\Models\\User', 1, 'main', '336094e34f61a8e21d2c46de3514ecfe97072af284d0cf055bb08450137b0dc6', '[\"*\"]', NULL, NULL, '2023-06-25 20:44:04', '2023-06-25 20:44:04'),
(130, 'App\\Models\\User', 1, 'main', '140ed081100405b8cb1e6fd6c4d2629779f380e9776a169629f56589c9c76a52', '[\"*\"]', NULL, NULL, '2023-06-25 22:49:28', '2023-06-25 22:49:28'),
(136, 'App\\Models\\Company', 9, 'main', 'a79751e109fb91a22a7430a49512df2e8138aff3a04fa8888201cbdf1cd36d6b', '[\"*\"]', '2023-06-26 01:50:32', NULL, '2023-06-25 23:30:32', '2023-06-26 01:50:32'),
(137, 'App\\Models\\User', 1, 'main', 'f3517738f09112f1a672ccd98f24a68c80c36ec04bd70d8076a169de49bfe7ae', '[\"*\"]', NULL, NULL, '2023-06-25 23:52:38', '2023-06-25 23:52:38'),
(139, 'App\\Models\\User', 1, 'main', '3c3ef02f7b76be5cc45969d26ebd431e9e9ef98d4ff533d4857f996e98f3dc55', '[\"*\"]', NULL, NULL, '2023-06-26 00:30:02', '2023-06-26 00:30:02'),
(140, 'App\\Models\\User', 24, 'main', 'e2d2633a77ee6a2edf38457a90c6cc1903fe40962b8f55d3b165a8c4a8018881', '[\"*\"]', '2023-06-26 01:47:40', NULL, '2023-06-26 01:47:26', '2023-06-26 01:47:40'),
(141, 'App\\Models\\User', 10, 'main', '75fd649ffc9a1d2a5c2533a3e1266d89289e295ad6862491b8783cfb0da23cc1', '[\"*\"]', NULL, NULL, '2023-06-26 01:49:08', '2023-06-26 01:49:08'),
(142, 'App\\Models\\User', 1, 'main', 'ade505cb0d269029b7db384e7a3123c181344a0b99a2afe50362de7ad6d489d4', '[\"*\"]', NULL, NULL, '2023-06-26 01:50:48', '2023-06-26 01:50:48');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `job_category_id` bigint(20) UNSIGNED NOT NULL,
  `company_id` bigint(20) UNSIGNED NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `post_name` varchar(255) NOT NULL,
  `salary` varchar(255) NOT NULL,
  `job_description` text NOT NULL,
  `role` text NOT NULL,
  `requirement` text NOT NULL,
  `benefit` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `hour` bigint(20) NOT NULL,
  `experience` text NOT NULL,
  `expire_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `category_id`, `job_category_id`, `company_id`, `is_active`, `post_name`, `salary`, `job_description`, `role`, `requirement`, `benefit`, `created_at`, `updated_at`, `hour`, `experience`, `expire_at`) VALUES
(7, 1, 1, 10, 1, 'Software Engineer', 'Up to $1000 - $2000 per month', '<ul>\n<li>Design, develop, and implement software solutions that meet clients\' requirements.</li>\n<li>Collaborate with cross-functional teams to analyze software requirements and propose effective solutions.</li>\n<li>Write clean and efficient code using programming languages such as Java, C++, or Python.</li>\n<li>Perform thorough testing and debugging of software applications to ensure high-quality deliverables.</li>\n<li>Participate in code reviews and provide constructive feedback to improve code quality.</li>\n<li>Stay up-to-date with emerging technologies and industry trends to enhance software development practices.</li>\n</ul>', 'Design, develop, and maintain software applications according to client requirements. Collaborate with product managers, designers, and other stakeholders to gather and analyze software requirements. Write clean, efficient, and scalable code using programming languages such as Java, C++, or Python. Conduct thorough testing and debugging of software applications to ensure high-quality deliverables. Participate in code reviews and provide constructive feedback to improve code quality. Stay up-to-date with emerging technologies and industry trends to enhance software development practices.', 'Bachelor\'s degree in Computer Science, Software Engineering, or a related field.\nStrong programming skills in languages such as Java, C++, or Python.\nExperience with software development methodologies and best practices.\n1.Knowledge of databases, data structures, and algorithms.\n2. Familiarity with web technologies and frameworks (e.g., HTML, CSS, JavaScript, React).\n3. Ability to work both independently and collaboratively in a team environment.\n4. Excellent problem-solving and analytical skills.\n5. Effective communication and interpersonal skills.', '1. Competitive salary package with performance-based bonuses.\n2. Opportunities for professional growth and career advancement.\n3. Flexible work hours and the option for remote work.\n4. Health insurance coverage for you and your dependents.\n5. Retirement savings plans and company-matching contributions.\n6. Paid time off and vacation days.\n7. Supportive and inclusive work culture.\n8. Training and development programs to enhance your skills.\n9. Exciting projects and the opportunity to work with cutting-edge technologies.', '2023-06-22 07:36:49', '2023-06-22 07:36:49', 6, '1 - 2 years', '2023-08-30'),
(8, 2, 5, 9, 1, 'Marketing Manager', '$800 - Negotiable', '<p><strong>The Marketing Manager\'s responsibilities include:</strong></p>\n<ul>\n<li>Developing and implementing strategic marketing plans to drive brand awareness and customer acquisition.</li>\n<li>Leading and managing a team of marketing professionals, providing guidance and support.</li>\n<li>Conducting market research to identify customer needs, market trends, and competitor activities.</li>\n<li>Creating and executing marketing campaigns across various channels, including digital, print, and social media.</li>\n<li>Analyzing campaign performance and utilizing data-driven insights to optimize marketing strategies.</li>\n<li>Managing marketing budgets and allocating resources effectively.</li>\n<li>Collaborating with sales teams to align marketing efforts with sales goals.</li>\n<li>Building and maintaining strong relationships with stakeholders, including clients, vendors, and media partners.</li>\n<li>Monitoring industry trends and staying up-to-date with the latest marketing techniques and technologies.</li>\n</ul>', 'As a Marketing Manager, you will be responsible for overseeing and implementing marketing strategies to promote our products or services. You will lead a team of marketing professionals, collaborate with cross-functional teams, and drive marketing initiatives to achieve business goals. Your role will involve developing marketing campaigns, analyzing market trends, managing budgets, and measuring campaign effectiveness.', '<p>1. Bachelor\'s degree in Marketing, Business Administration, or a related field. 2. Proven experience in marketing roles, with a focus on developing and executing marketing strategies. 3. Strong leadership skills with the ability to motivate and manage a team. 4. Excellent understanding of market research, consumer behavior, and marketing analytics. 5. Proficiency in digital marketing techniques and platforms. 6. Exceptional communication and interpersonal skills. 7. Strong analytical and problem-solving abilities. 8. Ability to work effectively in a fast-paced and dynamic environment. 9. Familiarity with the industry and market trends.</p>', '<p>Competitive salary and performance-based bonuses. Comprehensive health insurance coverage. Retirement savings plans with employer contributions. Paid time off and flexible work arrangements. 1. Professional development opportunities. 2. Collaborative and inclusive work environment. 3. Opportunity to work with a diverse and talented team. 4. Chance to make a significant impact on the company\'s growth and success. 5. Recognition and rewards for outstanding performance.</p>', '2023-06-22 08:39:19', '2023-06-26 00:10:41', 6, '0.5 - 1 year', '2023-09-09'),
(9, 3, 17, 11, 1, 'Graphic Designer', '$500 - $700 per month', '<p><strong>To be successful in this role, you should possess:</strong></p>\n<ol>\n<li>Creating visually compelling designs, illustrations, and layouts for both digital and print materials.</li>\n<li>Collaborating with the marketing team to develop engaging marketing collateral, including brochures, social media graphics, and email newsletters.</li>\n<li>Designing and optimizing website graphics, icons, and banners to enhance the user experience.</li>\n<li>Developing visual concepts and mockups for new product designs and packaging.</li>\n<li>Incorporating feedback from stakeholders to refine designs and ensure alignment with brand guidelines.</li>\n<li>Keeping up-to-date with design trends, techniques, and software to continually enhance design capabilities.</li>\n<li>Working closely with printers and other external vendors to ensure high-quality production of printed materials.</li>\n<li>Conducting quality checks on final designs and ensuring error-free deliverables.</li>\n<li>Collaborating with cross-functional teams to brainstorm creative ideas and solve design challenges.</li>\n</ol>', 'As a Graphic Designer, you will be responsible for creating visually appealing designs and assets that effectively communicate our brand message. You will collaborate with cross-functional teams, including marketing and product development, to deliver creative solutions. Your role will involve designing graphics for various mediums, maintaining brand consistency, and staying updated with industry trends.', '1. Bachelor\'s degree in Graphic Design, Visual Arts, or a related field.\n2. Proven experience as a Graphic Designer, with a strong portfolio showcasing a range of design projects.\n3. Proficiency in design software, such as Adobe Creative Suite (Photoshop, Illustrator, InDesign).\n4. Solid understanding of design principles, typography, color theory, and layout techniques.\n5. Knowledge of current design trends and best practices.\n6. Strong attention to detail and ability to work on multiple projects simultaneously.\n7. Excellent communication and collaboration skills.\n8. Ability to take constructive feedback and incorporate changes into designs.\n9. Time management skills to meet project deadlines.', '1. Competitive salary and opportunities for career growth.\n2. Comprehensive health insurance coverage.\n3. Retirement savings plans with company contributions.\n4. Flexible work hours and a healthy work-life balance.\n5. Training and professional development programs.\n6. Collaborative and supportive work environment.\n7. Access to cutting-edge design tools and software.\n8. Chance to work on exciting and diverse design projects.\n9. Recognition and appreciation for creative contributions.', '2023-06-22 08:44:34', '2023-06-22 08:44:34', 5, '2 - 4 years', '2023-08-06'),
(10, 1, 4, 12, 1, 'Sales Executive', '$600 to $1000 per month + Negotiable', '<p><strong>The Sales Executive\'s responsibilities include:</strong></p>\n<ol>\n<li>Identifying and pursuing new business opportunities to generate leads and expand the customer base.</li>\n<li>Building and maintaining strong relationships with existing clients, understanding their needs, and offering tailored solutions.</li>\n<li>Conducting market research to stay informed about industry trends, competitors, and potential prospects.</li>\n<li>Developing and implementing effective sales strategies and tactics to achieve sales targets.</li>\n<li>Conducting product demonstrations and presentations to showcase the benefits and value of our offerings.</li>\n<li>Negotiating contracts and closing sales deals, ensuring customer satisfaction and maximizing revenue.</li>\n<li>Collaborating with internal teams, such as marketing and product development, to align sales efforts with overall business objectives.</li>\n<li>Keeping accurate records of sales activities, including leads, prospects, and customer interactions, using CRM systems.</li>\n<li>Continuously updating product knowledge and staying informed about industry developments.</li>\n</ol>', 'write me about \"Graphic Designer\", give me role , job description, requirement and benefit. only job description can use number lists, others use normal text.', '1. Proven experience in sales, preferably in a B2B or consultative selling environment.\n2. Excellent communication and interpersonal skills, with the ability to build rapport and establish trust with clients.\n3. Strong negotiation and closing skills to drive successful sales outcomes.\n4. Results-oriented mindset with a drive to achieve and exceed sales targets.\n5. Familiarity with CRM software and sales analytics tools.\n6. Knowledge of the industry, market trends, and competitors.\n7. Self-motivation and the ability to work independently as well as part of a team.\n8. Adaptability and resilience to handle challenges and rejection in a sales environment.\n9. Willingness to travel for client meetings and industry events, as required.', 'Competitive base salary with commission-based incentives.\nComprehensive health insurance coverage.\nRetirement savings plans with employer contributions.\nOngoing training and professional development opportunities.\nFlexible work arrangements and a healthy work-life balance.\nCollaborative and supportive work environment.\nOpportunities for career growth and advancement.\nRecognition and rewards for achieving sales targets.\nChance to work with a diverse range of clients and industries.', '2023-06-22 08:49:59', '2023-06-22 08:49:59', 6, 'More than 4 years', '2023-07-29'),
(11, 4, 7, 13, 1, 'Content Writer', '$300 - Up per month', '<p>The Content Writer\'s responsibilities include:</p>\n<ul>\n<li>Conducting in-depth research to gather relevant information and insights on assigned topics.</li>\n<li>Creating well-structured, engaging, and SEO-friendly content for websites, blogs, and social media channels.</li>\n<li>Developing creative ideas and concepts for content that aligns with the brand\'s tone and target audience.</li>\n<li>Collaborating with the marketing team to understand content requirements and goals.</li>\n<li>Proofreading and editing content for grammar, clarity, coherence, and adherence to brand guidelines.</li>\n<li>Optimizing content for search engines by incorporating relevant keywords and following SEO best practices.</li>\n<li>Keeping up-to-date with industry trends, new content formats, and emerging platforms.</li>\n<li>Adhering to content schedules and deadlines.</li>\n<li>Conducting periodic content audits to identify areas for improvement and optimize content performance.</li>\n</ul>', 'Role: As a Content Writer, your role will involve creating engaging and informative written content for various platforms. You will be responsible for producing high-quality articles, blog posts, social media content, and other written materials to effectively communicate our brand message. Your creativity, excellent writing skills, and attention to detail will contribute to engaging our target audience and driving content marketing efforts.', 'Proven experience as a Content Writer or in a similar writing-focused role.\nExcellent written and verbal communication skills.\nStrong command of grammar, punctuation, and language usage.\nAbility to adapt writing style to different target audiences and platforms.\nProficiency in conducting research and synthesizing information from reliable sources.\nFamiliarity with SEO principles and best practices.\nBasic understanding of content management systems and publishing tools.\nAttention to detail and ability to meet deadlines.\nCreativity and the ability to generate fresh and innovative content ideas.\nOpenness to feedback and willingness to incorporate changes into content.', 'Competitive compensation package.\nHealth insurance coverage.\nOpportunities for professional development and growth.\nFlexible work arrangements, including remote work options.\nCollaborative and inclusive work environment.\nAccess to industry-leading tools and resources for content creation.\nChance to work with a diverse range of topics and industries.\nRecognition and appreciation for creativity and contributions.\nOpportunity to contribute to the brand\'s growth and success through impactful content.', '2023-06-22 08:55:42', '2023-06-22 08:55:42', 6, 'Internship - No experience', '2023-09-03'),
(12, 1, 9, 14, 1, 'Data Analyst', '$1200 - $2200 per month', '<p><strong>The Data Analyst\'s responsibilities include:</strong></p>\n<ul>\n<li>Collecting and organizing large datasets from various sources.</li>\n<li>Cleaning and validating data to ensure accuracy and reliability.</li>\n<li>Applying statistical analysis techniques to identify trends, patterns, and correlations within the data.</li>\n<li>Developing and implementing data models, algorithms, and visualizations to present findings effectively.</li>\n<li>Creating reports and dashboards to communicate insights and recommendations to stakeholders.</li>\n<li>Collaborating with cross-functional teams to understand data requirements and provide analytical support.</li>\n<li>Conducting ad hoc analyses to answer specific business questions or address challenges.</li>\n<li>Identifying opportunities for process improvements and data-driven decision making.</li>\n<li>Staying updated with the latest tools, techniques, and industry trends in data analysis.</li>\n</ul>', 'As a Data Analyst, your role will involve collecting, analyzing, and interpreting complex data to provide valuable insights and support data-driven decision making. You will be responsible for identifying trends, patterns, and opportunities within the data to drive business growth and improve operational efficiency. Your analytical skills, attention to detail, and ability to work with large datasets will be key to succeeding in this role.', 'Bachelor\'s degree in Mathematics, Statistics, Computer Science, or a related field.\nProven experience as a Data Analyst or in a similar analytical role.\nProficiency in data manipulation and analysis using tools such as SQL, Excel, or Python.\nFamiliarity with statistical analysis techniques and data visualization tools (e.g., Tableau, Power BI).\nStrong analytical thinking and problem-solving skills.\nAttention to detail and ability to work with complex datasets.\nExcellent communication and presentation skills.\nAbility to work independently and as part of a team.\nKnowledge of database management systems and data warehousing concepts.', 'Competitive salary package.\nHealth insurance coverage.\nOpportunities for professional development and training.\nCollaborative and dynamic work environment.\nAccess to cutting-edge data analysis tools and software.\nChance to work with diverse datasets and industries.\nRecognition and appreciation for impactful data insights.\nOpportunity to contribute to data-driven decision making and business growth.\nWork-life balance and flexible work arrangements.', '2023-06-22 08:59:20', '2023-06-22 08:59:20', 6, 'Less than 6 month', '2023-07-21'),
(13, 1, 3, 15, 1, 'Project Manager', '$600 - $800 per month', '<p>The Project Manager\'s responsibilities include:</p>\n<ul>\n<li>Defining project scope, goals, and deliverables in collaboration with stakeholders.</li>\n<li>Developing project plans, including timelines, milestones, and resource allocation.</li>\n<li>Leading project teams, assigning tasks, and monitoring progress to ensure timely execution.</li>\n<li>Identifying and managing project risks, issues, and dependencies.</li>\n<li>Conducting regular project status meetings and providing updates to stakeholders.</li>\n<li>Managing project budgets, tracking expenses, and ensuring financial objectives are met.</li>\n<li>Communicating and collaborating with cross-functional teams to ensure project alignment.</li>\n<li>Facilitating effective communication among team members, stakeholders, and clients.</li>\n<li>Tracking and reporting project performance, including key metrics and success criteria.</li>\n<li>Conducting post-project evaluations to identify lessons learned and areas for improvement.</li>\n</ul>', 'As a Project Manager, your role will involve leading and managing projects from initiation to completion. You will be responsible for ensuring that projects are delivered on time, within budget, and according to the specified requirements. Your strong organizational and leadership skills, along with effective communication and problem-solving abilities, will be essential in successfully delivering projects and achieving project objectives.', 'To be successful in this role, you should possess:\n\nProven experience as a Project Manager or in a similar role.\nStrong knowledge of project management methodologies and best practices.\nExcellent organizational and time management skills.\nEffective leadership and team management abilities.\nExceptional communication and interpersonal skills.\nProblem-solving and decision-making capabilities.\nProficiency in project management software and collaboration tools.\nFamiliarity with budgeting and financial management principles.\nAbility to work under pressure and meet project deadlines.\nCertification in project management (e.g., PMP) is a plus.', 'Competitive salary package.\nComprehensive health insurance coverage.\nRetirement savings plans with employer contributions.\nProfessional development and training opportunities.\nCollaborative and supportive work environment.\nOpportunity to work on diverse and challenging projects.\nRecognition and rewards for project success.\nChance to develop valuable leadership and project management skills.\nWork-life balance and flexible work arrangements.', '2023-06-22 09:02:56', '2023-06-22 09:02:56', 6, 'Internship - No experience', '2023-07-02'),
(14, 2, 10, 16, 1, 'Human Resources Specialist', '$500 - $700 per month', '<p>The Human Resources Specialist\'s responsibilities include:</p>\n<ul>\n<li>Assisting with recruitment processes, including job postings, resume screening, and coordinating interviews.</li>\n<li>Conducting new employee onboarding, including orientation sessions and necessary documentation.</li>\n<li>Managing employee benefits administration, such as enrollments, claims, and inquiries.</li>\n<li>Supporting performance management processes, including performance evaluations and feedback sessions.</li>\n<li>Assisting with employee relations matters, including conflict resolution and disciplinary actions.</li>\n<li>Maintaining employee records, ensuring accuracy and compliance with legal requirements.</li>\n<li>Providing guidance and support to employees regarding HR policies, procedures, and programs.</li>\n<li>Assisting with HR reporting and data analysis, including workforce metrics and trends.</li>\n<li>Assisting with HR projects and initiatives, such as employee engagement programs or policy updates.</li>\n<li>Staying updated with relevant employment laws and regulations to ensure compliance.</li>\n</ul>', 'As a Human Resources Specialist, your role will involve supporting various HR functions and ensuring effective management of human capital within the organization. You will be responsible for tasks such as recruitment, employee onboarding, performance management, benefits administration, and employee relations. Your strong interpersonal skills, knowledge of HR best practices, and ability to maintain confidentiality will contribute to creating a positive and productive work environment.', '<p>Bachelor\'s degree in Human Resources, Business Administration, or a related field. Proven experience in HR roles or related administrative positions. Sound knowledge of HR practices, policies, and employment laws. Strong interpersonal and communication skills. Ability to handle confidential and sensitive information with discretion. Excellent organizational and time management skills. Attention to detail and accuracy in data management. Proficiency in HRIS (Human Resources Information System) and MS Office. Ability to work effectively in a team and collaborate with cross-functional stakeholders. Professional certification in HR (e.g., SHRM-CP, PHR) is a plus.</p>', '<p>Competitive compensation package. Comprehensive health insurance coverage. Retirement savings plans with employer contributions. Training and professional development opportunities. Collaborative and inclusive work environment. Opportunities for career growth and advancement. Chance to work on diverse HR initiatives and projects. Work-life balance and flexible work arrangements. Recognition and rewards for contributions to HR initiatives. Opportunity to make a positive impact on employee well-being and organizational success.</p>', '2023-06-22 09:07:04', '2023-06-25 09:10:36', 5, '1 - 2 years', '2023-07-08'),
(15, 1, 3, 17, 1, 'Financial Analyst', '$500 - $800 per month', '<p>The Financial Analyst\'s responsibilities include:</p>\n<ul>\n<li>Analyzing financial statements, trends, and performance indicators to identify strengths and weaknesses.</li>\n<li>Conducting financial forecasting, budgeting, and variance analysis.</li>\n<li>Assessing investment opportunities, performing valuation analysis, and preparing financial models.</li>\n<li>Monitoring and reporting on financial metrics, key performance indicators, and industry trends.</li>\n<li>Collaborating with cross-functional teams to gather and analyze financial data for decision making.</li>\n<li>Assisting in the preparation of financial reports, presentations, and recommendations.</li>\n<li>Participating in the development of financial strategies and long-term financial planning.</li>\n<li>Conducting ad hoc financial analysis and providing insights to support business initiatives.</li>\n<li>Ensuring compliance with financial regulations and internal policies.</li>\n<li>Staying updated with industry developments, accounting principles, and financial regulations.</li>\n</ul>', 'As a Financial Analyst, your role will involve analyzing financial data, preparing reports, and providing insights to support decision-making processes. You will be responsible for evaluating financial performance, conducting financial forecasting, and assisting in budgeting and investment decisions. Your strong analytical skills, attention to detail, and ability to interpret complex financial information will be crucial in this role.', 'Bachelor\'s degree in Finance, Accounting, Economics, or a related field.\nProven experience as a Financial Analyst or in a similar analytical role.\nStrong analytical and quantitative skills.\nProficiency in financial analysis tools and software (e.g., Excel, financial modeling software).\nKnowledge of financial forecasting, budgeting, and investment analysis techniques.\nUnderstanding of financial statements, accounting principles, and financial regulations.\nExcellent problem-solving and critical thinking abilities.\nAttention to detail and ability to work with complex financial data.\nStrong written and verbal communication skills.\nAbility to work independently and collaborate with cross-functional teams.', 'Competitive salary package.\nHealth insurance coverage.\nRetirement savings plans with employer contributions.\nOpportunities for professional development and training.\nCollaborative and supportive work environment.\nExposure to diverse industries and projects.\nChance to work with senior leaders and contribute to strategic decision making.\nRecognition and rewards for exceptional performance.\nWork-life balance and flexible work arrangements.\nOpportunity for career growth and advancement.', '2023-06-22 09:10:23', '2023-06-22 09:10:23', 6, '1 - 2 years', '2023-07-08'),
(16, 3, 8, 18, 1, 'Customer Service Representative', '$200 - $500 per month or Negotiable', '<p>The Customer Service Representative\'s responsibilities include:</p>\n<ul>\n<li>Responding to customer inquiries via phone, email, or chat in a timely and professional manner.</li>\n<li>Assisting customers with product information, pricing, and order processing.</li>\n<li>Resolving customer complaints or issues by providing appropriate solutions or escalating them to the appropriate department.</li>\n<li>Identifying and assessing customer needs to offer personalized assistance and recommendations.</li>\n<li>Keeping accurate records of customer interactions, transactions, comments, and complaints.</li>\n<li>Providing product or service troubleshooting and technical support, if applicable.</li>\n<li>Collaborating with cross-functional teams to address customer concerns or improve processes.</li>\n<li>Processing returns, exchanges, and refunds according to established policies.</li>\n<li>Maintaining a positive and empathetic attitude while handling customer interactions.</li>\n<li>Keeping up-to-date with product knowledge, policies, and industry trends.</li>\n</ul>', 'As a Customer Service Representative, your role will involve providing excellent customer support and assistance to enhance the overall customer experience. You will be responsible for addressing customer inquiries, resolving issues, and maintaining customer satisfaction. Your strong communication skills, problem-solving abilities, and empathy will contribute to building positive relationships with customers and ensuring their needs are met.', 'High school diploma or equivalent; some college education is a plus.\nProven customer service experience or related customer-facing roles.\nExcellent verbal and written communication skills.\nStrong problem-solving and conflict resolution abilities.\nAbility to work well under pressure and handle challenging customer situations.\nEmpathy and patience when dealing with customer concerns or complaints.\nProficiency in using customer service software, CRM systems, and basic computer applications.\nAbility to multitask and prioritize customer inquiries effectively.\nStrong attention to detail and accuracy in data entry and order processing.\nFlexibility to work in shifts, including evenings, weekends, or holidays, if required.', 'Competitive salary and potential for performance-based incentives.\nHealth insurance coverage.\nPaid time off and vacation days.\nTraining and development programs to enhance customer service skills.\nCollaborative and supportive team environment.\nOpportunities for career growth and advancement.\nEmployee discounts on company products or services.\nRecognition and rewards for exceptional customer service.\nWork-life balance and flexible scheduling options.\nChance to make a positive impact on customer satisfaction and loyalty.', '2023-06-22 09:14:05', '2023-06-22 09:14:05', 4, '2 - 4 years', '2023-07-17'),
(17, 1, 12, 9, 1, 'Content Writer', 'Up to $1000 - $2000 per month', '<ul>\r\n<li>Design, develop, and implement software solutions that meet clients\' requirements.</li>\r\n<li>Collaborate with cross-functional teams to analyze software requirements and propose effective solutions.</li>\r\n<li>Write clean and efficient code using programming languages such as Java, C++, or Python.</li>\r\n<li>Perform thorough testing and debugging of software applications to ensure high-quality deliverables.</li>\r\n<li>Participate in code reviews and provide constructive feedback to improve code quality.</li>\r\n<li>Stay up-to-date with emerging technologies and industry trends to enhance software development practices.</li>\r\n</ul>', 'Design, develop, and maintain software applications according to client requirements. Collaborate with product managers, designers, and other stakeholders to gather and analyze software requirements. Write clean, efficient, and scalable code using programming languages such as Java, C++, or Python. Conduct thorough testing and debugging of software applications to ensure high-quality deliverables. Participate in code reviews and provide constructive feedback to improve code quality. Stay up-to-date with emerging technologies and industry trends to enhance software development practices.', 'Bachelor\'s degree in Computer Science, Software Engineering, or a related field.\r\nStrong programming skills in languages such as Java, C++, or Python.\r\nExperience with software development methodologies and best practices.\r\n1.Knowledge of databases, data structures, and algorithms.\r\n2. Familiarity with web technologies and frameworks (e.g., HTML, CSS, JavaScript, React).\r\n3. Ability to work both independently and collaboratively in a team environment.\r\n4. Excellent problem-solving and analytical skills.\r\n5. Effective communication and interpersonal skills.', '1. Competitive salary package with performance-based bonuses.\r\n2. Opportunities for professional growth and career advancement.\r\n3. Flexible work hours and the option for remote work.\r\n4. Health insurance coverage for you and your dependents.\r\n5. Retirement savings plans and company-matching contributions.\r\n6. Paid time off and vacation days.\r\n7. Supportive and inclusive work culture.\r\n8. Training and development programs to enhance your skills.\r\n9. Exciting projects and the opportunity to work with cutting-edge technologies.', '2023-06-22 07:36:49', '2023-06-22 07:36:49', 6, '1 - 2 years', '2023-08-30'),
(18, 4, 14, 9, 1, 'Supply Chain Analyst', '$800 - Negotiable', '<p><strong>The Marketing Manager\'s responsibilities include:</strong></p>\r\n<ul>\r\n<li>Developing and implementing strategic marketing plans to drive brand awareness and customer acquisition.</li>\r\n<li>Leading and managing a team of marketing professionals, providing guidance and support.</li>\r\n<li>Conducting market research to identify customer needs, market trends, and competitor activities.</li>\r\n<li>Creating and executing marketing campaigns across various channels, including digital, print, and social media.</li>\r\n<li>Analyzing campaign performance and utilizing data-driven insights to optimize marketing strategies.</li>\r\n<li>Managing marketing budgets and allocating resources effectively.</li>\r\n<li>Collaborating with sales teams to align marketing efforts with sales goals.</li>\r\n<li>Building and maintaining strong relationships with stakeholders, including clients, vendors, and media partners.</li>\r\n<li>Monitoring industry trends and staying up-to-date with the latest marketing techniques and technologies.</li>\r\n</ul>', 'As a Marketing Manager, you will be responsible for overseeing and implementing marketing strategies to promote our products or services. You will lead a team of marketing professionals, collaborate with cross-functional teams, and drive marketing initiatives to achieve business goals. Your role will involve developing marketing campaigns, analyzing market trends, managing budgets, and measuring campaign effectiveness.', '1. Bachelor\'s degree in Marketing, Business Administration, or a related field.\r\n2. Proven experience in marketing roles, with a focus on developing and executing marketing strategies.\r\n3. Strong leadership skills with the ability to motivate and manage a team.\r\n4. Excellent understanding of market research, consumer behavior, and marketing analytics.\r\n5. Proficiency in digital marketing techniques and platforms.\r\n6. Exceptional communication and interpersonal skills.\r\n7. Strong analytical and problem-solving abilities.\r\n8. Ability to work effectively in a fast-paced and dynamic environment.\r\n9. Familiarity with the industry and market trends.', 'Competitive salary and performance-based bonuses.\r\nComprehensive health insurance coverage.\r\nRetirement savings plans with employer contributions.\r\nPaid time off and flexible work arrangements.\r\n1. Professional development opportunities.\r\n2. Collaborative and inclusive work environment.\r\n3. Opportunity to work with a diverse and talented team.\r\n4. Chance to make a significant impact on the company\'s growth and success.\r\n5. Recognition and rewards for outstanding performance.', '2023-06-22 08:39:19', '2023-06-22 08:39:19', 6, '0.5 - 1 year', '2023-09-09'),
(19, 2, 8, 11, 1, 'Social Media Manager', '$500 - $700 per month', '<p><strong>To be successful in this role, you should possess:</strong></p>\r\n<ol>\r\n<li>Creating visually compelling designs, illustrations, and layouts for both digital and print materials.</li>\r\n<li>Collaborating with the marketing team to develop engaging marketing collateral, including brochures, social media graphics, and email newsletters.</li>\r\n<li>Designing and optimizing website graphics, icons, and banners to enhance the user experience.</li>\r\n<li>Developing visual concepts and mockups for new product designs and packaging.</li>\r\n<li>Incorporating feedback from stakeholders to refine designs and ensure alignment with brand guidelines.</li>\r\n<li>Keeping up-to-date with design trends, techniques, and software to continually enhance design capabilities.</li>\r\n<li>Working closely with printers and other external vendors to ensure high-quality production of printed materials.</li>\r\n<li>Conducting quality checks on final designs and ensuring error-free deliverables.</li>\r\n<li>Collaborating with cross-functional teams to brainstorm creative ideas and solve design challenges.</li>\r\n</ol>', 'As a Graphic Designer, you will be responsible for creating visually appealing designs and assets that effectively communicate our brand message. You will collaborate with cross-functional teams, including marketing and product development, to deliver creative solutions. Your role will involve designing graphics for various mediums, maintaining brand consistency, and staying updated with industry trends.', '1. Bachelor\'s degree in Graphic Design, Visual Arts, or a related field.\r\n2. Proven experience as a Graphic Designer, with a strong portfolio showcasing a range of design projects.\r\n3. Proficiency in design software, such as Adobe Creative Suite (Photoshop, Illustrator, InDesign).\r\n4. Solid understanding of design principles, typography, color theory, and layout techniques.\r\n5. Knowledge of current design trends and best practices.\r\n6. Strong attention to detail and ability to work on multiple projects simultaneously.\r\n7. Excellent communication and collaboration skills.\r\n8. Ability to take constructive feedback and incorporate changes into designs.\r\n9. Time management skills to meet project deadlines.', '1. Competitive salary and opportunities for career growth.\r\n2. Comprehensive health insurance coverage.\r\n3. Retirement savings plans with company contributions.\r\n4. Flexible work hours and a healthy work-life balance.\r\n5. Training and professional development programs.\r\n6. Collaborative and supportive work environment.\r\n7. Access to cutting-edge design tools and software.\r\n8. Chance to work on exciting and diverse design projects.\r\n9. Recognition and appreciation for creative contributions.', '2023-06-22 08:44:34', '2023-06-22 08:44:34', 5, '2 - 4 years', '2023-08-06'),
(20, 1, 13, 12, 1, 'UX/UI Designer', '$600 to $1000 per month + Negotiable', '<p><strong>The Sales Executive\'s responsibilities include:</strong></p>\r\n<ol>\r\n<li>Identifying and pursuing new business opportunities to generate leads and expand the customer base.</li>\r\n<li>Building and maintaining strong relationships with existing clients, understanding their needs, and offering tailored solutions.</li>\r\n<li>Conducting market research to stay informed about industry trends, competitors, and potential prospects.</li>\r\n<li>Developing and implementing effective sales strategies and tactics to achieve sales targets.</li>\r\n<li>Conducting product demonstrations and presentations to showcase the benefits and value of our offerings.</li>\r\n<li>Negotiating contracts and closing sales deals, ensuring customer satisfaction and maximizing revenue.</li>\r\n<li>Collaborating with internal teams, such as marketing and product development, to align sales efforts with overall business objectives.</li>\r\n<li>Keeping accurate records of sales activities, including leads, prospects, and customer interactions, using CRM systems.</li>\r\n<li>Continuously updating product knowledge and staying informed about industry developments.</li>\r\n</ol>', 'write me about \"Graphic Designer\", give me role , job description, requirement and benefit. only job description can use number lists, others use normal text.', '1. Proven experience in sales, preferably in a B2B or consultative selling environment.\r\n2. Excellent communication and interpersonal skills, with the ability to build rapport and establish trust with clients.\r\n3. Strong negotiation and closing skills to drive successful sales outcomes.\r\n4. Results-oriented mindset with a drive to achieve and exceed sales targets.\r\n5. Familiarity with CRM software and sales analytics tools.\r\n6. Knowledge of the industry, market trends, and competitors.\r\n7. Self-motivation and the ability to work independently as well as part of a team.\r\n8. Adaptability and resilience to handle challenges and rejection in a sales environment.\r\n9. Willingness to travel for client meetings and industry events, as required.', 'Competitive base salary with commission-based incentives.\r\nComprehensive health insurance coverage.\r\nRetirement savings plans with employer contributions.\r\nOngoing training and professional development opportunities.\r\nFlexible work arrangements and a healthy work-life balance.\r\nCollaborative and supportive work environment.\r\nOpportunities for career growth and advancement.\r\nRecognition and rewards for achieving sales targets.\r\nChance to work with a diverse range of clients and industries.', '2023-06-22 08:49:59', '2023-06-22 08:49:59', 6, 'More than 4 years', '2023-07-29'),
(21, 1, 2, 13, 1, 'Business Development Executive', '$300 - Up per month', '<p>The Content Writer\'s responsibilities include:</p>\r\n<ul>\r\n<li>Conducting in-depth research to gather relevant information and insights on assigned topics.</li>\r\n<li>Creating well-structured, engaging, and SEO-friendly content for websites, blogs, and social media channels.</li>\r\n<li>Developing creative ideas and concepts for content that aligns with the brand\'s tone and target audience.</li>\r\n<li>Collaborating with the marketing team to understand content requirements and goals.</li>\r\n<li>Proofreading and editing content for grammar, clarity, coherence, and adherence to brand guidelines.</li>\r\n<li>Optimizing content for search engines by incorporating relevant keywords and following SEO best practices.</li>\r\n<li>Keeping up-to-date with industry trends, new content formats, and emerging platforms.</li>\r\n<li>Adhering to content schedules and deadlines.</li>\r\n<li>Conducting periodic content audits to identify areas for improvement and optimize content performance.</li>\r\n</ul>', 'Role: As a Content Writer, your role will involve creating engaging and informative written content for various platforms. You will be responsible for producing high-quality articles, blog posts, social media content, and other written materials to effectively communicate our brand message. Your creativity, excellent writing skills, and attention to detail will contribute to engaging our target audience and driving content marketing efforts.', 'Proven experience as a Content Writer or in a similar writing-focused role.\r\nExcellent written and verbal communication skills.\r\nStrong command of grammar, punctuation, and language usage.\r\nAbility to adapt writing style to different target audiences and platforms.\r\nProficiency in conducting research and synthesizing information from reliable sources.\r\nFamiliarity with SEO principles and best practices.\r\nBasic understanding of content management systems and publishing tools.\r\nAttention to detail and ability to meet deadlines.\r\nCreativity and the ability to generate fresh and innovative content ideas.\r\nOpenness to feedback and willingness to incorporate changes into content.', 'Competitive compensation package.\r\nHealth insurance coverage.\r\nOpportunities for professional development and growth.\r\nFlexible work arrangements, including remote work options.\r\nCollaborative and inclusive work environment.\r\nAccess to industry-leading tools and resources for content creation.\r\nChance to work with a diverse range of topics and industries.\r\nRecognition and appreciation for creativity and contributions.\r\nOpportunity to contribute to the brand\'s growth and success through impactful content.', '2023-06-22 08:55:42', '2023-06-22 08:55:42', 6, 'Internship - No experience', '2023-09-03'),
(22, 1, 6, 14, 1, 'Operations Manager', '$1200 - $2200 per month', '<p><strong>The Data Analyst\'s responsibilities include:</strong></p>\r\n<ul>\r\n<li>Collecting and organizing large datasets from various sources.</li>\r\n<li>Cleaning and validating data to ensure accuracy and reliability.</li>\r\n<li>Applying statistical analysis techniques to identify trends, patterns, and correlations within the data.</li>\r\n<li>Developing and implementing data models, algorithms, and visualizations to present findings effectively.</li>\r\n<li>Creating reports and dashboards to communicate insights and recommendations to stakeholders.</li>\r\n<li>Collaborating with cross-functional teams to understand data requirements and provide analytical support.</li>\r\n<li>Conducting ad hoc analyses to answer specific business questions or address challenges.</li>\r\n<li>Identifying opportunities for process improvements and data-driven decision making.</li>\r\n<li>Staying updated with the latest tools, techniques, and industry trends in data analysis.</li>\r\n</ul>', 'As a Data Analyst, your role will involve collecting, analyzing, and interpreting complex data to provide valuable insights and support data-driven decision making. You will be responsible for identifying trends, patterns, and opportunities within the data to drive business growth and improve operational efficiency. Your analytical skills, attention to detail, and ability to work with large datasets will be key to succeeding in this role.', 'Bachelor\'s degree in Mathematics, Statistics, Computer Science, or a related field.\r\nProven experience as a Data Analyst or in a similar analytical role.\r\nProficiency in data manipulation and analysis using tools such as SQL, Excel, or Python.\r\nFamiliarity with statistical analysis techniques and data visualization tools (e.g., Tableau, Power BI).\r\nStrong analytical thinking and problem-solving skills.\r\nAttention to detail and ability to work with complex datasets.\r\nExcellent communication and presentation skills.\r\nAbility to work independently and as part of a team.\r\nKnowledge of database management systems and data warehousing concepts.', 'Competitive salary package.\r\nHealth insurance coverage.\r\nOpportunities for professional development and training.\r\nCollaborative and dynamic work environment.\r\nAccess to cutting-edge data analysis tools and software.\r\nChance to work with diverse datasets and industries.\r\nRecognition and appreciation for impactful data insights.\r\nOpportunity to contribute to data-driven decision making and business growth.\r\nWork-life balance and flexible work arrangements.', '2023-06-22 08:59:20', '2023-06-22 08:59:20', 6, 'Less than 6 month', '2023-07-21'),
(23, 1, 1, 15, 1, 'Cybersecurity Analyst', '$600 - $800 per month', '<p>The Project Manager\'s responsibilities include:</p>\r\n<ul>\r\n<li>Defining project scope, goals, and deliverables in collaboration with stakeholders.</li>\r\n<li>Developing project plans, including timelines, milestones, and resource allocation.</li>\r\n<li>Leading project teams, assigning tasks, and monitoring progress to ensure timely execution.</li>\r\n<li>Identifying and managing project risks, issues, and dependencies.</li>\r\n<li>Conducting regular project status meetings and providing updates to stakeholders.</li>\r\n<li>Managing project budgets, tracking expenses, and ensuring financial objectives are met.</li>\r\n<li>Communicating and collaborating with cross-functional teams to ensure project alignment.</li>\r\n<li>Facilitating effective communication among team members, stakeholders, and clients.</li>\r\n<li>Tracking and reporting project performance, including key metrics and success criteria.</li>\r\n<li>Conducting post-project evaluations to identify lessons learned and areas for improvement.</li>\r\n</ul>', 'As a Project Manager, your role will involve leading and managing projects from initiation to completion. You will be responsible for ensuring that projects are delivered on time, within budget, and according to the specified requirements. Your strong organizational and leadership skills, along with effective communication and problem-solving abilities, will be essential in successfully delivering projects and achieving project objectives.', 'To be successful in this role, you should possess:\r\n\r\nProven experience as a Project Manager or in a similar role.\r\nStrong knowledge of project management methodologies and best practices.\r\nExcellent organizational and time management skills.\r\nEffective leadership and team management abilities.\r\nExceptional communication and interpersonal skills.\r\nProblem-solving and decision-making capabilities.\r\nProficiency in project management software and collaboration tools.\r\nFamiliarity with budgeting and financial management principles.\r\nAbility to work under pressure and meet project deadlines.\r\nCertification in project management (e.g., PMP) is a plus.', 'Competitive salary package.\r\nComprehensive health insurance coverage.\r\nRetirement savings plans with employer contributions.\r\nProfessional development and training opportunities.\r\nCollaborative and supportive work environment.\r\nOpportunity to work on diverse and challenging projects.\r\nRecognition and rewards for project success.\r\nChance to develop valuable leadership and project management skills.\r\nWork-life balance and flexible work arrangements.', '2023-06-22 09:02:56', '2023-06-22 09:02:56', 6, 'Internship - No experience', '2023-07-02');
INSERT INTO `posts` (`id`, `category_id`, `job_category_id`, `company_id`, `is_active`, `post_name`, `salary`, `job_description`, `role`, `requirement`, `benefit`, `created_at`, `updated_at`, `hour`, `experience`, `expire_at`) VALUES
(24, 2, 6, 16, 1, 'Environmental Engineer', '$500 - $700 per month', '<p>The Human Resources Specialist\'s responsibilities include:</p>\r\n<ul>\r\n<li>Assisting with recruitment processes, including job postings, resume screening, and coordinating interviews.</li>\r\n<li>Conducting new employee onboarding, including orientation sessions and necessary documentation.</li>\r\n<li>Managing employee benefits administration, such as enrollments, claims, and inquiries.</li>\r\n<li>Supporting performance management processes, including performance evaluations and feedback sessions.</li>\r\n<li>Assisting with employee relations matters, including conflict resolution and disciplinary actions.</li>\r\n<li>Maintaining employee records, ensuring accuracy and compliance with legal requirements.</li>\r\n<li>Providing guidance and support to employees regarding HR policies, procedures, and programs.</li>\r\n<li>Assisting with HR reporting and data analysis, including workforce metrics and trends.</li>\r\n<li>Assisting with HR projects and initiatives, such as employee engagement programs or policy updates.</li>\r\n<li>Staying updated with relevant employment laws and regulations to ensure compliance.</li>\r\n</ul>', 'As a Human Resources Specialist, your role will involve supporting various HR functions and ensuring effective management of human capital within the organization. You will be responsible for tasks such as recruitment, employee onboarding, performance management, benefits administration, and employee relations. Your strong interpersonal skills, knowledge of HR best practices, and ability to maintain confidentiality will contribute to creating a positive and productive work environment.', 'Bachelor\'s degree in Human Resources, Business Administration, or a related field.\r\nProven experience in HR roles or related administrative positions.\r\nSound knowledge of HR practices, policies, and employment laws.\r\nStrong interpersonal and communication skills.\r\nAbility to handle confidential and sensitive information with discretion.\r\nExcellent organizational and time management skills.\r\nAttention to detail and accuracy in data management.\r\nProficiency in HRIS (Human Resources Information System) and MS Office.\r\nAbility to work effectively in a team and collaborate with cross-functional stakeholders.\r\nProfessional certification in HR (e.g., SHRM-CP, PHR) is a plus.', 'Competitive compensation package.\r\nComprehensive health insurance coverage.\r\nRetirement savings plans with employer contributions.\r\nTraining and professional development opportunities.\r\nCollaborative and inclusive work environment.\r\nOpportunities for career growth and advancement.\r\nChance to work on diverse HR initiatives and projects.\r\nWork-life balance and flexible work arrangements.\r\nRecognition and rewards for contributions to HR initiatives.\r\nOpportunity to make a positive impact on employee well-being and organizational success.', '2023-06-22 09:07:04', '2023-06-22 09:07:04', 5, '1 - 2 years', '2023-07-08'),
(25, 4, 2, 17, 1, 'Healthcare Administrator', '$500 - $800 per month', '<p>The Financial Analyst\'s responsibilities include:</p>\r\n<ul>\r\n<li>Analyzing financial statements, trends, and performance indicators to identify strengths and weaknesses.</li>\r\n<li>Conducting financial forecasting, budgeting, and variance analysis.</li>\r\n<li>Assessing investment opportunities, performing valuation analysis, and preparing financial models.</li>\r\n<li>Monitoring and reporting on financial metrics, key performance indicators, and industry trends.</li>\r\n<li>Collaborating with cross-functional teams to gather and analyze financial data for decision making.</li>\r\n<li>Assisting in the preparation of financial reports, presentations, and recommendations.</li>\r\n<li>Participating in the development of financial strategies and long-term financial planning.</li>\r\n<li>Conducting ad hoc financial analysis and providing insights to support business initiatives.</li>\r\n<li>Ensuring compliance with financial regulations and internal policies.</li>\r\n<li>Staying updated with industry developments, accounting principles, and financial regulations.</li>\r\n</ul>', 'As a Financial Analyst, your role will involve analyzing financial data, preparing reports, and providing insights to support decision-making processes. You will be responsible for evaluating financial performance, conducting financial forecasting, and assisting in budgeting and investment decisions. Your strong analytical skills, attention to detail, and ability to interpret complex financial information will be crucial in this role.', 'Bachelor\'s degree in Finance, Accounting, Economics, or a related field.\r\nProven experience as a Financial Analyst or in a similar analytical role.\r\nStrong analytical and quantitative skills.\r\nProficiency in financial analysis tools and software (e.g., Excel, financial modeling software).\r\nKnowledge of financial forecasting, budgeting, and investment analysis techniques.\r\nUnderstanding of financial statements, accounting principles, and financial regulations.\r\nExcellent problem-solving and critical thinking abilities.\r\nAttention to detail and ability to work with complex financial data.\r\nStrong written and verbal communication skills.\r\nAbility to work independently and collaborate with cross-functional teams.', 'Competitive salary package.\r\nHealth insurance coverage.\r\nRetirement savings plans with employer contributions.\r\nOpportunities for professional development and training.\r\nCollaborative and supportive work environment.\r\nExposure to diverse industries and projects.\r\nChance to work with senior leaders and contribute to strategic decision making.\r\nRecognition and rewards for exceptional performance.\r\nWork-life balance and flexible work arrangements.\r\nOpportunity for career growth and advancement.', '2023-06-22 09:10:23', '2023-06-22 09:10:23', 6, '1 - 2 years', '2023-07-08'),
(26, 2, 14, 18, 1, 'Legal Assistant', '$200 - $500 per month or Negotiable', '<p>The Customer Service Representative\'s responsibilities include:</p>\r\n<ul>\r\n<li>Responding to customer inquiries via phone, email, or chat in a timely and professional manner.</li>\r\n<li>Assisting customers with product information, pricing, and order processing.</li>\r\n<li>Resolving customer complaints or issues by providing appropriate solutions or escalating them to the appropriate department.</li>\r\n<li>Identifying and assessing customer needs to offer personalized assistance and recommendations.</li>\r\n<li>Keeping accurate records of customer interactions, transactions, comments, and complaints.</li>\r\n<li>Providing product or service troubleshooting and technical support, if applicable.</li>\r\n<li>Collaborating with cross-functional teams to address customer concerns or improve processes.</li>\r\n<li>Processing returns, exchanges, and refunds according to established policies.</li>\r\n<li>Maintaining a positive and empathetic attitude while handling customer interactions.</li>\r\n<li>Keeping up-to-date with product knowledge, policies, and industry trends.</li>\r\n</ul>', 'As a Customer Service Representative, your role will involve providing excellent customer support and assistance to enhance the overall customer experience. You will be responsible for addressing customer inquiries, resolving issues, and maintaining customer satisfaction. Your strong communication skills, problem-solving abilities, and empathy will contribute to building positive relationships with customers and ensuring their needs are met.', 'High school diploma or equivalent; some college education is a plus.\r\nProven customer service experience or related customer-facing roles.\r\nExcellent verbal and written communication skills.\r\nStrong problem-solving and conflict resolution abilities.\r\nAbility to work well under pressure and handle challenging customer situations.\r\nEmpathy and patience when dealing with customer concerns or complaints.\r\nProficiency in using customer service software, CRM systems, and basic computer applications.\r\nAbility to multitask and prioritize customer inquiries effectively.\r\nStrong attention to detail and accuracy in data entry and order processing.\r\nFlexibility to work in shifts, including evenings, weekends, or holidays, if required.', 'Competitive salary and potential for performance-based incentives.\r\nHealth insurance coverage.\r\nPaid time off and vacation days.\r\nTraining and development programs to enhance customer service skills.\r\nCollaborative and supportive team environment.\r\nOpportunities for career growth and advancement.\r\nEmployee discounts on company products or services.\r\nRecognition and rewards for exceptional customer service.\r\nWork-life balance and flexible scheduling options.\r\nChance to make a positive impact on customer satisfaction and loyalty.', '2023-06-22 09:14:05', '2023-06-22 09:14:05', 4, '2 - 4 years', '2023-07-17'),
(28, 1, 17, 16, 1, 'Graphic Designer', '$1000 - $2000 per month', '<div class=\"mt-2 text-lg text-gray-500 overflow-x-hidden break-words\">\n<p><strong>To be successful in this role, you should possess:</strong></p>\n<ol>\n<li>Creating visually compelling designs, illustrations, and layouts for both digital and print materials.</li>\n<li>Collaborating with the marketing team to develop engaging marketing collateral, including brochures, social media graphics, and email newsletters.</li>\n<li>Designing and optimizing website graphics, icons, and banners to enhance the user experience.</li>\n<li>Developing visual concepts and mockups for new product designs and packaging.</li>\n<li>Incorporating feedback from stakeholders to refine designs and ensure alignment with brand guidelines.</li>\n<li>Keeping up-to-date with design trends, techniques, and software to continually enhance design capabilities.</li>\n<li>Working closely with printers and other external vendors to ensure high-quality production of printed materials.</li>\n<li>Conducting quality checks on final designs and ensuring error-free deliverables.</li>\n<li>Collaborating with cross-functional teams to brainstorm creative ideas and solve design challenges.</li>\n</ol>\n</div>', 'As a Graphic Designer, you will be responsible for creating visually appealing designs and assets that effectively communicate our brand message. You will collaborate with cross-functional teams, including marketing and product development, to deliver creative solutions. Your role will involve designing graphics for various mediums, maintaining brand consistency, and staying updated with industry trends.', '<ol>\n<li>Bachelor\'s degree in Graphic Design, Visual Arts, or a related field.</li>\n<li>Proven experience as a Graphic Designer, with a strong portfolio showcasing a range of design projects.</li>\n<li>Proficiency in design software, such as Adobe Creative Suite (Photoshop, Illustrator, InDesign).</li>\n<li>Solid understanding of design principles, typography, color theory, and layout techniques.</li>\n<li>Knowledge of current design trends and best practices.</li>\n<li>Strong attention to detail and ability to work on multiple projects simultaneously.</li>\n<li>Excellent communication and collaboration skills.</li>\n<li>Ability to take constructive feedback and incorporate changes into designs.</li>\n<li>Time management skills to meet project deadlines.</li>\n</ol>', '<ol>\n<li>Competitive salary and opportunities for career growth.</li>\n<li>Comprehensive health insurance coverage.</li>\n<li>Retirement savings plans with company contributions.</li>\n<li>Flexible work hours and a healthy work-life balance.</li>\n<li>Training and professional development programs.</li>\n<li>Collaborative and supportive work environment.</li>\n<li>Access to cutting-edge design tools and software.</li>\n<li>Chance to work on exciting and diverse design projects.</li>\n<li>Recognition and appreciation for creative contributions.</li>\n</ol>', '2023-06-24 21:24:05', '2023-06-24 21:24:05', 5, 'Less than 6 month', '2023-07-08'),
(31, 1, 1, 9, 1, 'Software Engineer', 'Up to $1000 - $2000 per month', '<ul>\n<li>Design, develop, and implement software solutions that meet clients\' requirements.</li>\n<li>Collaborate with cross-functional teams to analyze software requirements and propose effective solutions.</li>\n<li>Write clean and efficient code using programming languages such as Java, C++, or Python.</li>\n<li>Perform thorough testing and debugging of software applications to ensure high-quality deliverables.</li>\n<li>Participate in code reviews and provide constructive feedback to improve code quality.</li>\n<li>Stay up-to-date with emerging technologies and industry trends to enhance software development practices.</li>\n</ul>', 'Design, develop, and maintain software applications according to client requirements. Collaborate with product managers, designers, and other stakeholders to gather and analyze software requirements. Write clean, efficient, and scalable code using programming languages such as Java, C++, or Python. Conduct thorough testing and debugging of software applications to ensure high-quality deliverables. Participate in code reviews and provide constructive feedback to improve code quality. Stay up-to-date with emerging technologies and industry trends to enhance software development practices.', '<p>Bachelor\'s degree in Computer Science, Software Engineering, or a related field. Strong programming skills in languages such as Java, C++, or Python. Experience with software development methodologies and best practices. 1.Knowledge of databases, data structures, and algorithms. 2. Familiarity with web technologies and frameworks (e.g., HTML, CSS, JavaScript, React). 3. Ability to work both independently and collaboratively in a team environment. 4. Excellent problem-solving and analytical skills. 5. Effective communication and interpersonal skills.</p>', '<p>1. Competitive salary package with performance-based bonuses. 2. Opportunities for professional growth and career advancement. 3. Flexible work hours and the option for remote work. 4. Health insurance coverage for you and your dependents. 5. Retirement savings plans and company-matching contributions. 6. Paid time off and vacation days. 7. Supportive and inclusive work culture. 8. Training and development programs to enhance your skills. 9. Exciting projects and the opportunity to work with cutting-edge technologies.</p>', '2023-06-25 20:28:18', '2023-06-25 20:28:18', 6, '0.5 - 1 year', '2023-07-01'),
(33, 1, 16, 9, 1, 'Social Media Manager', '$500 - $700 per month', '<p><strong>To be successful in this role, you should possess:</strong></p>\n<ol>\n<li>Creating visually compelling designs, illustrations, and layouts for both digital and print materials.</li>\n<li>Collaborating with the marketing team to develop engaging marketing collateral, including brochures, social media graphics, and email newsletters.</li>\n<li>Designing and optimizing website graphics, icons, and banners to enhance the user experience.</li>\n<li>Developing visual concepts and mockups for new product designs and packaging.</li>\n<li>Incorporating feedback from stakeholders to refine designs and ensure alignment with brand guidelines.</li>\n<li>Keeping up-to-date with design trends, techniques, and software to continually enhance design capabilities.</li>\n<li>Working closely with printers and other external vendors to ensure high-quality production of printed materials.</li>\n<li>Conducting quality checks on final designs and ensuring error-free deliverables.</li>\n<li>Collaborating with cross-functional teams to brainstorm creative ideas and solve design challenges.</li>\n</ol>', 'As a Graphic Designer, you will be responsible for creating visually appealing designs and assets that effectively communicate our brand message. You will collaborate with cross-functional teams, including marketing and product development, to deliver creative solutions. Your role will involve designing graphics for various mediums, maintaining brand consistency, and staying updated with industry trends.', '<p>1. Bachelor\'s degree in Graphic Design, Visual Arts, or a related field. 2. Proven experience as a Graphic Designer, with a strong portfolio showcasing a range of design projects. 3. Proficiency in design software, such as Adobe Creative Suite (Photoshop, Illustrator, InDesign). 4. Solid understanding of design principles, typography, color theory, and layout techniques. 5. Knowledge of current design trends and best practices. 6. Strong attention to detail and ability to work on multiple projects simultaneously. 7. Excellent communication and collaboration skills. 8. Ability to take constructive feedback and incorporate changes into designs. 9. Time management skills to meet project deadlines.</p>', '<p>1. Competitive salary and opportunities for career growth. 2. Comprehensive health insurance coverage. 3. Retirement savings plans with company contributions. 4. Flexible work hours and a healthy work-life balance. 5. Training and professional development programs. 6. Collaborative and supportive work environment. 7. Access to cutting-edge design tools and software. 8. Chance to work on exciting and diverse design projects. 9. Recognition and appreciation for creative contributions.</p>', '2023-06-26 01:50:15', '2023-06-26 01:50:15', 5, 'Internship - No experience', '2023-06-30');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `question` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `skill_name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tag` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `tag`, `created_at`, `updated_at`) VALUES
(1, 'Career Development', NULL, NULL),
(2, 'Job Search', NULL, NULL),
(3, 'Resume Writing', NULL, NULL),
(4, 'Interview Tips', NULL, NULL),
(5, 'Professional Networking', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(100) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `banner` varchar(255) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `CV` text DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `api_token` varchar(80) DEFAULT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `username`, `gender`, `profile_image`, `banner`, `bio`, `CV`, `remember_token`, `created_at`, `updated_at`, `api_token`, `type`) VALUES
(1, 'Job-Hunter-Admin', 'admin@gmail.com', NULL, '$2y$10$6mi6XGQfEfeMUo6L/0MYPufUyHLAsJBQo9nvb2rCq28b9UWueBGla', 'admin-job-hunter', 'none', NULL, NULL, NULL, NULL, NULL, '2023-05-28 19:36:11', '2023-05-28 19:36:11', NULL, 'user'),
(8, 'Joub Pijet', 'pijet@gmail.com', '2023-06-21 23:42:36', '$2y$10$2tz.LhScVZhCD6ydiu6JLeosEOK6TA1sK5uac/c/Kalah7v88VXLi', 'PijetDev', 'male', NULL, NULL, NULL, 'https://firebasestorage.googleapis.com/v0/b/soland-9a89e.appspot.com/o/cv%2F16877140714510.3122830667808256CV_TEMPLATE_0002.pdf?alt=media&token=e183c270-890d-4904-8d48-09c5028fd578', NULL, '2023-04-19 23:42:20', '2023-06-21 23:42:36', NULL, 'user'),
(9, 'Som Visal', 'visalnozin@gmail.com', '2023-06-21 23:44:56', '$2y$10$Ph4GjMkCFYwssEbDM3SiD.KvvvPpbs.UdMO9vbub1LY11E.3/2Yei', 'Visalzin2', 'male', '1687416332-profile7.jpg', NULL, NULL, NULL, NULL, '2023-04-18 23:44:42', '2023-06-21 23:45:32', NULL, 'user'),
(10, 'Sombath Vinun', 'vinunsombath@gmail.com', '2023-06-21 23:46:44', '$2y$10$Lm8BZN9iQC5THum80mt7te6jtb6U2wJkPkzAQphtyp2Yne0gJ5YUu', 'vinun123', 'male', '1687748792-pic-removebg-preview2.png', NULL, NULL, 'https://firebasestorage.googleapis.com/v0/b/soland-9a89e.appspot.com/o/cv%2F16877592127000.5870064221796605CV_TEMPLATE_0002.pdf?alt=media&token=e7b9cf48-852d-4b05-9328-6e644c3e3454', NULL, '2023-04-24 23:46:30', '2023-06-25 20:06:32', NULL, 'user'),
(11, 'Rouen Hokleng', 'hokleng@gmail.com', '2023-06-21 23:52:22', '$2y$10$UF1Yx.AZynCcUAE6c0af9.93bQWQ2Xdc9sPoZ.hDPNM1yPOnFATgC', 'hokleng', 'female', NULL, NULL, NULL, NULL, NULL, '2023-06-19 23:51:42', '2023-06-21 23:52:22', NULL, 'user'),
(12, 'Jii VannSuii', 'vannsuii007@gmail.com', '2023-06-22 06:28:20', '$2y$10$/9I2.xradHU3Zb9pQPoAzuZpZWQZ.wjKzGHAovRIlhB4Vr/EcpABq', 'VannSuii', 'male', '1687440515-profile10.jpg', NULL, NULL, NULL, NULL, '2023-06-22 06:28:08', '2023-06-22 06:28:35', NULL, 'user'),
(13, 'Jet Vichea', 'vichear@gmail.com', '2023-06-22 06:33:56', '$2y$10$RaO0ecX5n/3rHWyOP8qqs.2H15grwhz65rlxNh1uVYGizOWntm5zW', 'vicheaDev76', 'male', NULL, NULL, NULL, NULL, NULL, '2023-06-22 06:33:43', '2023-06-22 06:33:56', NULL, 'user'),
(16, 'John Wick', 'johnwick@gmail.com', '2023-06-25 19:25:54', '$2y$10$7.xcYEubmaRqtsbUG3AFjuczFWqcXJe0AR4s2I06AQbbA1o7d0nCu', 'john007', 'male', '1687746844-profile10.jpg', NULL, NULL, 'https://firebasestorage.googleapis.com/v0/b/soland-9a89e.appspot.com/o/cv%2F16877468536770.027868365632893966CV_TEMPLATE_0002.pdf?alt=media&token=b2d93552-765d-435b-be40-66cceb9e58d2', NULL, '2023-06-25 19:25:34', '2023-06-25 19:34:04', NULL, 'user'),
(17, 'Jammie Mark', 'jammie6512@gmail.com', '2023-06-25 19:51:25', '$2y$10$VqK5CXaKvVo/ArByiBXLHuk/BdO2R2CJh.TslBNMy3To6w/qAHiU2', 'jammie', 'male', '1687747901-profile10.jpg', NULL, NULL, 'https://firebasestorage.googleapis.com/v0/b/soland-9a89e.appspot.com/o/cv%2F16877479084110.13234588887671572CV_TEMPLATE_0002.pdf?alt=media&token=e5f5d882-2d3c-4631-8279-ce4f9badad57', NULL, '2023-06-25 19:51:08', '2023-06-25 19:51:41', NULL, 'user'),
(23, 'Pan Sopeak', 'sopeakhr@gmail.com', '2023-06-25 23:24:14', '$2y$10$MSipT1LD6YZxsfDKbkXC5e1GEpwIdeY9epsKGUM9q9.y/hTvJ.aeO', 'sopeakHR', 'male', NULL, NULL, NULL, NULL, NULL, '2023-06-25 23:23:58', '2023-06-25 23:24:14', NULL, 'user'),
(24, 'Vinun Sombath', 'vinunsombath6512@gmail.com', '2023-06-26 01:47:36', '$2y$10$ZsAuiQxKSTxexEb7rvD1Gea/7T2U7O20p7yS6pyPXqb16sS5gIl2q', 'im_vinun', 'male', NULL, NULL, NULL, NULL, NULL, '2023-06-26 01:47:20', '2023-06-26 01:47:36', NULL, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `user_interests`
--

CREATE TABLE `user_interests` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `job_category_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_skills`
--

CREATE TABLE `user_skills` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `skill_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `answers_user_id_foreign` (`user_id`),
  ADD KEY `answers_question_id_foreign` (`question_id`);

--
-- Indexes for table `applies`
--
ALTER TABLE `applies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `applies_user_id_foreign` (`user_id`),
  ADD KEY `applies_post_id_foreign` (`post_id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blogs_tag_id_foreign` (`tag_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `companies_email_unique` (`email`);

--
-- Indexes for table `company_notification`
--
ALTER TABLE `company_notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company_notification_company_id_foreign` (`company_id`),
  ADD KEY `company_notification_user_id_foreign` (`user_id`),
  ADD KEY `company_notification_post_id_foreign` (`post_id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `experiences`
--
ALTER TABLE `experiences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `experiences_user_id_foreign` (`user_id`),
  ADD KEY `experiences_company_id_foreign` (`company_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_categories`
--
ALTER TABLE `job_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `likes_user_id_foreign` (`user_id`),
  ADD KEY `likes_answer_id_foreign` (`answer_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_category_id_foreign` (`category_id`),
  ADD KEY `posts_job_category_id_foreign` (`job_category_id`),
  ADD KEY `posts_company_id_foreign` (`company_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `questions_user_id_foreign` (`user_id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_api_token_unique` (`api_token`);

--
-- Indexes for table `user_interests`
--
ALTER TABLE `user_interests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_interests_user_id_foreign` (`user_id`),
  ADD KEY `user_interests_job_category_id_foreign` (`job_category_id`);

--
-- Indexes for table `user_skills`
--
ALTER TABLE `user_skills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_skills_user_id_foreign` (`user_id`),
  ADD KEY `user_skills_skill_id_foreign` (`skill_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `applies`
--
ALTER TABLE `applies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `company_notification`
--
ALTER TABLE `company_notification`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `experiences`
--
ALTER TABLE `experiences`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `job_categories`
--
ALTER TABLE `job_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `user_interests`
--
ALTER TABLE `user_interests`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_skills`
--
ALTER TABLE `user_skills`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_question_id_foreign` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),
  ADD CONSTRAINT `answers_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `applies`
--
ALTER TABLE `applies`
  ADD CONSTRAINT `applies_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`),
  ADD CONSTRAINT `applies_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `blogs`
--
ALTER TABLE `blogs`
  ADD CONSTRAINT `blogs_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`);

--
-- Constraints for table `company_notification`
--
ALTER TABLE `company_notification`
  ADD CONSTRAINT `company_notification_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`),
  ADD CONSTRAINT `company_notification_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`),
  ADD CONSTRAINT `company_notification_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `experiences`
--
ALTER TABLE `experiences`
  ADD CONSTRAINT `experiences_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`),
  ADD CONSTRAINT `experiences_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_answer_id_foreign` FOREIGN KEY (`answer_id`) REFERENCES `answers` (`id`),
  ADD CONSTRAINT `likes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `posts_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`),
  ADD CONSTRAINT `posts_job_category_id_foreign` FOREIGN KEY (`job_category_id`) REFERENCES `job_categories` (`id`);

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `user_interests`
--
ALTER TABLE `user_interests`
  ADD CONSTRAINT `user_interests_job_category_id_foreign` FOREIGN KEY (`job_category_id`) REFERENCES `job_categories` (`id`),
  ADD CONSTRAINT `user_interests_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `user_skills`
--
ALTER TABLE `user_skills`
  ADD CONSTRAINT `user_skills_skill_id_foreign` FOREIGN KEY (`skill_id`) REFERENCES `skills` (`id`),
  ADD CONSTRAINT `user_skills_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
