const products = {
  individual: [
    {
      name: 'Individual Life Policy',
      description: 'Comprehensive life insurance coverage tailored to your personal needs and financial goals.',
      features: [
        'Flexible coverage options',
        'Customizable benefits',
        'Death and disability benefits',
        'Optional riders available'
      ],
      icon: 'fa-user-shield'
    },
    {
      name: 'Pinnacle Life Protection Plan',
      description: 'Our flagship protection plan offering complete financial security for you and your loved ones.',
      features: [
        'Enhanced coverage benefits',
        'Investment component',
        'Flexible premium payment',
        'Additional protection riders'
      ],
      icon: 'fa-shield-alt'
    },
    {
      name: 'Royal Funeral Policy',
      description: 'Comprehensive funeral coverage ensuring dignified arrangements without financial burden.',
      features: [
        'Immediate funeral expenses coverage',
        'Family support benefits',
        'Quick claims processing',
        'Flexible payment options'
      ],
      icon: 'fa-heart'
    }
  ],
  group: [
    {
      name: 'Comprehensive Group Life Policy',
      description: 'Complete group life insurance solution for organizations and their employees.',
      features: [
        'Death and disability coverage',
        'Critical illness benefits',
        'Family protection',
        'Flexible benefit structure'
      ],
      icon: 'fa-users'
    },
    {
      name: 'Keyman Protection Policy',
      description: 'Protect your business against the loss of key employees and executives.',
      features: [
        'Business continuity protection',
        'Key person replacement costs',
        'Flexible sum assured',
        'Quick claims settlement'
      ],
      icon: 'fa-user-tie'
    },
    {
      name: 'Group Life Policy',
      description: 'Essential life coverage for groups and organizations of all sizes.',
      features: [
        'Basic life coverage',
        'Accidental death benefits',
        'Easy administration',
        'Cost-effective premiums'
      ],
      icon: 'fa-building'
    }
  ],
  education: [
    {
      name: 'Future Scholar Policy',
      description: 'Secure your children\'s educational future with our comprehensive education plan.',
      features: [
        'Guaranteed education fund',
        'Flexible premium payment',
        'Life insurance protection',
        'Waiver of premium benefit'
      ],
      icon: 'fa-graduation-cap'
    },
    {
      name: 'Skuul Boafo Plan',
      description: 'Affordable education savings plan designed for all income levels.',
      features: [
        'Low premium options',
        'Education support benefits',
        'Flexible payment terms',
        'Additional family benefits'
      ],
      icon: 'fa-book'
    },
    {
      name: 'Edwadifuo Ahobanbo Plan',
      description: 'Comprehensive savings plan combining education and life protection.',
      features: [
        'Education savings',
        'Life insurance coverage',
        'Investment benefits',
        'Family protection'
      ],
      icon: 'fa-piggy-bank'
    }
  ],
  pension: [
    {
      name: 'Personal Pension Plan',
      description: 'Secure your retirement with our flexible personal pension scheme.',
      features: [
        'Tax-advantaged savings',
        'Flexible contributions',
        'Investment options',
        'Retirement benefits'
      ],
      icon: 'fa-chart-line'
    },
    {
      name: 'Executive Pension Plan',
      description: 'Premium pension solution designed for corporate executives and professionals.',
      features: [
        'Enhanced benefits',
        'Investment choices',
        'Tax efficiency',
        'Flexible retirement options'
      ],
      icon: 'fa-briefcase'
    }
  ],
  protection: [
    {
      name: 'Loan Protection Policy',
      description: 'Protect your loans and ensure your family isn\'t burdened with debt.',
      features: [
        'Outstanding loan coverage',
        'Flexible terms',
        'Quick claims process',
        'Peace of mind'
      ],
      icon: 'fa-credit-card'
    },
    {
      name: 'Mortgage Protection Policy',
      description: 'Safeguard your mortgage payments and protect your family\'s home.',
      features: [
        'Mortgage balance coverage',
        'Property protection',
        'Flexible premium options',
        'Family security'
      ],
      icon: 'fa-home'
    }
  ]
};

export const productCategories = {
  individual: products.individual.map(product => ({
    ...product,
    id: product.name.toLowerCase().replace(/\s+/g, '-'),
    benefits: [
      'Life coverage',
      'Investment growth',
      'Tax advantages',
      'Flexible premium options'
    ],
    eligibility: [
      'Age 18-65',
      'Valid identification',
      'Regular income source',
      'Ghanaian resident or citizen'
    ],
    icon: product.icon,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
    highlights: [
      { title: 'Coverage Range', value: 'Up to GHS 500,000' },
      { title: 'Premium Options', value: 'Monthly/Quarterly/Annually' },
      { title: 'Investment Options', value: 'Multiple choices' },
      { title: 'Maturity Period', value: '10-30 years' }
    ],
    additionalInfo: {
      'Minimum Premium': 'GHS 100/month',
      'Maximum Age': '65 years',
      'Waiting Period': '6 months',
      'Surrender Value': 'Available after 3 years'
    }
  })),
  education: products.education.map(product => ({
    ...product,
    id: product.name.toLowerCase().replace(/\s+/g, '-'),
    benefits: [
      'Education funding',
      'Life coverage',
      'Investment growth',
      'Flexible withdrawals'
    ],
    eligibility: [
      'Age 18-50',
      'Valid identification',
      'Regular income source',
      'Ghanaian resident or citizen'
    ],
    icon: product.icon,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop",
    highlights: [
      { title: 'Coverage Range', value: 'Up to GHS 300,000' },
      { title: 'Premium Options', value: 'Monthly/Quarterly/Annually' },
      { title: 'Investment Options', value: 'Multiple choices' },
      { title: 'Maturity Period', value: '5-20 years' }
    ],
    additionalInfo: {
      'Minimum Premium': 'GHS 50/month',
      'Maximum Age': '50 years',
      'Waiting Period': '6 months',
      'Partial Withdrawals': 'Available for education'
    }
  })),
  group: products.group.map(product => ({
    ...product,
    id: product.name.toLowerCase().replace(/\s+/g, '-'),
    benefits: [
      'Group coverage',
      'Cost-effective premiums',
      'Administrative support',
      'Flexible terms'
    ],
    eligibility: [
      'Minimum 10 employees',
      'Valid business registration',
      'Active business operations',
      'Regular payroll'
    ],
    icon: product.icon,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop",
    highlights: [
      { title: 'Coverage Range', value: 'Up to GHS 1,000,000' },
      { title: 'Premium Options', value: 'Monthly/Quarterly' },
      { title: 'Group Size', value: '10+ employees' },
      { title: 'Policy Term', value: '1-5 years' }
    ],
    additionalInfo: {
      'Minimum Group Size': '10 employees',
      'Maximum Age': '70 years',
      'Waiting Period': '3 months',
      'Portability': 'Available'
    }
  })),
  pension: products.pension.map(product => ({
    ...product,
    id: product.name.toLowerCase().replace(/\s+/g, '-'),
    benefits: [
      'Retirement income',
      'Tax advantages',
      'Investment growth',
      'Flexible contributions'
    ],
    eligibility: [
      'Age 18-60',
      'Valid identification',
      'Regular income source',
      'Ghanaian resident or citizen'
    ],
    icon: product.icon,
    image: "https://images.unsplash.com/photo-1718010588689-9806ce642d39?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: [
      { title: 'Contribution Range', value: 'Flexible amounts' },
      { title: 'Payment Options', value: 'Monthly/Quarterly/Annually' },
      { title: 'Investment Options', value: 'Multiple choices' },
      { title: 'Retirement Age', value: '60 years' }
    ],
    additionalInfo: {
      'Minimum Contribution': 'GHS 100/month',
      'Maximum Age': '60 years',
      'Vesting Period': '5 years',
      'Lump Sum': 'Available at retirement'
    }
  })),
  protection: products.protection.map(product => ({
    ...product,
    id: product.name.toLowerCase().replace(/\s+/g, '-'),
    benefits: [
      'Loan protection',
      'Mortgage coverage',
      'Flexible terms',
      'Quick claims'
    ],
    eligibility: [
      'Age 18-60',
      'Valid identification',
      'Active loan/mortgage',
      'Ghanaian resident or citizen'
    ],
    icon: product.icon,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
    highlights: [
      { title: 'Coverage Range', value: 'Up to loan amount' },
      { title: 'Premium Options', value: 'Monthly/Quarterly' },
      { title: 'Policy Term', value: 'Matches loan term' },
      { title: 'Claims Period', value: '30 days' }
    ],
    additionalInfo: {
      'Minimum Coverage': 'GHS 10,000',
      'Maximum Age': '60 years',
      'Waiting Period': '3 months',
      'Claims Process': '30 days'
    }
  }))
};

export const getProductById = (productId) => {
  for (const category of Object.values(productCategories)) {
    const product = category.find(p => p.id === productId);
    if (product) return product;
  }
  return null;
};

export const getRelatedProducts = (productId, maxCount = 3) => {
  for (const category of Object.values(productCategories)) {
    const product = category.find(p => p.id === productId);
    if (product) {
      return category
        .filter(p => p.id !== productId)
        .slice(0, maxCount);
    }
  }
  return [];
};

export const getAllProducts = () => {
  return Object.values(productCategories).flat();
};

export const getProductsByCategory = (categoryId) => {
  return productCategories[categoryId] || [];
}; 