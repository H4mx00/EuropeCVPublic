import { Zap, UserX, Lock, Star } from 'lucide-react';

export const ATSCheckerConfig = {
  hero: {
    title: {
      prefix: '',
      highlight: 'ATS Checker'
    },
    badge: 'Free',
    subtitle: 'Get an instant ATS score and AI-powered resume feedback',
    uploadArea: {
      title: 'Upload your resume',
      subtitle: 'Supported formats: PDF, DOCX, TXT. Max file size: 5MB',
      buttonText: 'Select File',
      dragDropText: 'or drag and drop it here',
    },
    badges: [
      { label: 'Free Trial', icon: Star, color: 'text-amber-400' },
      { label: 'No Account Needed', icon: UserX, color: 'text-blue-500' },
      { label: 'Private & Secure', icon: Lock, color: 'text-green-500' },
    ]
  },
  statsBanner: {
    stats: [
      { value: '98%', label: 'ATS Compatibility Score Accuracy' },
      { value: '30 Secs', label: 'Average Resume Scan Time' },
      { value: '1,000+', label: 'ATS Rules & Formatting Checks' }
    ],
    logos: {
      title: 'Join thousands of job seekers hired at top companies',
      names: ['GOOGLE', 'AMAZON', 'NETFLIX', 'MICROSOFT', 'SPOTIFY']
    }
  }
};

export const ATSFAQConfig = {
  header: {
    title: "Frequently\nAsked Questions",
    description: "Learn how the ATS Checker analyzes your resume and helps you bypass applicant tracking systems to land more interviews."
  },
  videoPlaceholder: {
    filename: "ATS_CHECKER_DEMO.MP4",
    duration: "1:45",
    resolution: "1080P",
    promoText: "See how the ATS Checker works in 1 minute",
    matchScore: "98%"
  },
  faqList: [
    {
      question: "What is an ATS Checker?",
      answer: "An ATS (Applicant Tracking System) Checker analyzes your resume to ensure it can be correctly read and processed by applicant tracking systems used by employers."
    },
    {
      question: "Why is ATS compatibility important?",
      answer: "Many companies use ATS software to screen resumes before a recruiter reviews them. An ATS-friendly resume improves the chances of your application being seen."
    },
    {
      question: "How does the ATS Checker work?",
      answer: "The tool scans your resume for formatting issues, keyword optimization, section structure, readability, and ATS compatibility, then provides actionable recommendations."
    },
    {
      question: "Can an ATS Checker guarantee interviews?",
      answer: "No. An ATS Checker helps improve your resume's compatibility and optimization, but interview decisions also depend on your experience, qualifications, and the job market."
    },
    {
      question: "What resume formats are ATS-friendly?",
      answer: "Most ATS systems work best with cleanly formatted resumes in PDF or DOCX format, using standard fonts, headings, and layouts."
    },
    {
      question: "Does the ATS Checker evaluate keywords?",
      answer: "Yes. It identifies missing keywords, skills, and job-specific terms that can help align your resume with a target job description."
    },
    {
      question: "Is my resume data secure?",
      answer: "Your resume is processed securely and is not shared with employers or third parties without your consent."
    },
    {
      question: "How often should I check my resume?",
      answer: "It's recommended to run an ATS check whenever you update your resume or apply for a different role to ensure it matches the job requirements."
    },
    {
      question: "Can I check my resume against a specific job description?",
      answer: "Yes. Upload your resume and the job description to receive tailored keyword and compatibility recommendations."
    },
    {
      question: "What ATS score is considered good?",
      answer: "Generally, a score of 80% or higher indicates strong ATS compatibility, though requirements may vary depending on the employer and industry."
    }
  ]
};
