import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface PracticeArea {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
}

export interface Article {
  title: string;
  summary: string;
  category: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}